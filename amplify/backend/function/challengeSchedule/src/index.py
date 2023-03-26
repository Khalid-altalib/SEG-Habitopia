import requests
import json
import time
from datetime import datetime, timedelta

"""
    Trigger event handler for cloudwatch scheduled event (every 12 hours)
     - Stops and sets expired active challenges to completed
     - Starts queued inactive challenges if full or older than a day

    Run `amplify mock function` to test locally
"""
def handler(event, context):

    #GraphQL resource
    url = "https://hsvnovneejbkniuslgoiow4jxi.appsync-api.eu-west-2.amazonaws.com/graphql"

    #key and protocol
    headers = {
        'x-api-key': 'da2-e2q5nesyvnfjlfmztf43pwyiaq',
        'Content-Type': 'application/json'
    }

    #payload class: query for active challenges
    class payloadGetActiveChallenges:
        def __init__(self):
            self.query = "{\"query\":\"query getActiveChallenges {\\r\\n        challengesByStatus(status: ACTIVE) {\\r\\n            items {\\r\\n                id\\r\\n                started\\r\\n                _version\\r\\n                _deleted\\r\\n            }\\r\\n        }\\r\\n    }\",\"variables\":{}}"
        
        def asPayload(self):
            return self.query

    #payload class: mutation for completing individual challenge
    class payloadSetChallengeCompleted:
        def __init__(self, id, version):
            self.query = "{\"query\":\"mutation setChallengeCompleted($id: ID!, $versionIn: Int) {\\r\\n   updateChallenge(input: {id: $id, status: COMPLETED, _version: $versionIn}) {\\r\\n     id\\r\\n     status\\r\\n  \\t}\\r\\n }\",\"variables\":{\"id\":\""+id+"\",\"versionIn\":"+str(version)+"}}"

        def asPayload(self):
            return self.query

    #payload class: query for inactive challenges to start
    class payloadGetChallengesToStart:
        def __init__(self):
            self.query = "{\"query\":\"query getChallengesToStart {\\r\\n        challengesByStatus(status: INACTIVE) {\\r\\n            items {\\r\\n                id\\r\\n                createdAt\\r\\n                updatedAt\\r\\n                userCount\\r\\n                _version\\r\\n                _deleted\\r\\n            }\\r\\n        }\\r\\n    }\",\"variables\":{}}"

        def asPayload(self):
            return self.query

    #payload class: mutation for activating individual challenge
    class payloadSetChallengeActive:
        def __init__(self, id, version):
            self.query = "{\"query\":\"mutation setChallengeInactive($id: ID!, $versionIn: Int) {\\r\\n       updateChallenge(input: {id: $id, status: ACTIVE, _version: $versionIn, started: "+str(int(time.time()))+"}) {\\r\\n         id\\r\\n         status\\r\\n     \\t}\\r\\n     }\",\"variables\":{\"id\":\""+id+"\",\"versionIn\": "+str(version)+"}}"

        def asPayload(self):
            return self.query

    #Send query for active challenges
    responseGetActiveChallenges = requests.request("POST", url, headers=headers, data=payloadGetActiveChallenges().asPayload())
    getActiveResponseAsJson = json.loads(responseGetActiveChallenges.text)["data"]["challengesByStatus"]["items"]

    #Filter out datastore error deleted challenges
    activeChalsWithoutDeleted = [x for x in getActiveResponseAsJson if (str(x["_deleted"]) != 'True')]

    #Set expired challenges to completed
    for chalToInact in activeChalsWithoutDeleted:
        if (chalToInact["started"] < int(time.time())-60*60*24*7):
            responseSetChallengeCompleted = requests.request("POST", url, headers=headers, data=payloadSetChallengeCompleted(chalToInact["id"], chalToInact["_version"]).asPayload())
            updateResponseAsJson = json.loads(responseSetChallengeCompleted.text)["data"]["updateChallenge"]

    #Send query for queued full or waiting inactive challenges
    responseGetChallengesToStart = requests.request("POST", url, headers=headers, data=payloadGetChallengesToStart().asPayload())
    getInactiveResponseAsJson = json.loads(responseGetChallengesToStart.text)["data"]["challengesByStatus"]["items"]

    #Filter out datastore error deleted challenges
    challengesToStartWithoutDeleted = [chal for chal in getInactiveResponseAsJson if (str(chal["_deleted"]) != 'True')]

    #Set queued full or waiting inactive challenges to active
    for chalToStart in challengesToStartWithoutDeleted:
        if ((datetime.strptime(chalToStart["updatedAt"],"%Y-%m-%dT%H:%M:%S.%fZ") < (datetime.today() - timedelta(minutes=5))) and (chalToStart["userCount"]>=3)):
            responseSetChallengeActive = requests.request("POST", url, headers=headers, data=payloadSetChallengeActive(chalToStart["id"], chalToStart["_version"]).asPayload())
            updateResponseAsJson = json.loads(responseSetChallengeActive.text)["data"]["updateChallenge"]

    return "SUCCESS"