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
            self.query = "{\"query\":\"query getActiveChallenges {\\r\\n    challengesByStatus(status: ACTIVE) {\\r\\n        items{\\r\\n            id\\r\\n            started\\r\\n            _version\\r\\n            _deleted\\r\\n            challengeChatRoomId\\r\\n            Users {\\r\\n                items {\\r\\n                    user {\\r\\n                        name\\r\\n                    }\\r\\n                }\\r\\n            }\\r\\n            ChallengeType {\\r\\n                name\\r\\n                description\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n}\",\"variables\":{}}"
        
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
            self.query = "{\"query\":\"mutation setChallengeInactive {\\r\\n    updateChallenge(input: {id: \\\""+id+"\\\", status: ACTIVE, _version: "+str(version)+", started: "+str(int(time.time()))+"}) {\\r\\n        id\\r\\n        status\\r\\n        challengeChallengeTypeId\\r\\n        _version\\r\\n        _lastChangedAt        \\r\\n        updatedAt        \\r\\n        createdAt\\r\\n    }\\r\\n}\",\"variables\":{}}"
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
        if ((datetime.strptime(chalToStart["updatedAt"],"%Y-%m-%dT%H:%M:%S.%fZ") < (datetime.today() - timedelta(minutes=1))) and (chalToStart["userCount"]>=3)):
            responseSetChallengeActive = requests.request("POST", url, headers=headers, data=payloadSetChallengeActive(chalToStart["id"], chalToStart["_version"]).asPayload())
            updateResponseAsJson = json.loads(responseSetChallengeActive.text)["data"]["updateChallenge"]
    
    nowTime = datetime.now()
    allowed_mins = [0,1,2]
    if nowTime.hour == 9 and (nowTime.minute in allowed_mins):
        def motivationalQuoteFromGpt(prompt):
            formed_prompt = "Write a single short movational message (around 25 words as plain text, no quotation marks) for a group of people who are currently doing a challenge to " + prompt[0] + ". The only people in the challenge are " + prompt[1]
            res = requests.post(f"https://api.openai.com/v1/completions",
                headers = {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer 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"
                },
                json={
                    "model": "text-davinci-003",
                    "prompt": formed_prompt,
                    "max_tokens": 50
                }).json()
            return res["choices"][0]["text"][2:]

        #Send query for active challenges
        updatedResponseGetActiveChallenges = requests.request("POST", url, headers=headers, data=payloadGetActiveChallenges().asPayload())
        newActiveResponseAsJson = json.loads(updatedResponseGetActiveChallenges.text)["data"]["challengesByStatus"]["items"]
        
        #Filter out datastore error deleted challenges
        newActiveChalsWithoutDeleted = [x for x in newActiveResponseAsJson if (str(x["_deleted"]) != 'True')]

        for chalToMotivate in newActiveChalsWithoutDeleted:
            chalGoal = chalToMotivate["ChallengeType"]["description"]
            chalUsers = chalToMotivate["Users"]["items"]
            users = []
            for user in chalUsers:
                users.append(user["user"]["name"])

            userString = ""+str(str(users).replace('[', "").replace(']',""))

            chalMotivation = motivationalQuoteFromGpt([chalGoal, userString])

            #form new message
            payload = "{\"query\":\"mutation makeMessage {\\r\\n    createMessage(input: {userID: \\\"66ab98f2-c5c6-45ad-986e-fab9641422ac\\\", chatroomID: \\\""+chalToMotivate["challengeChatRoomId"]+"\\\", text: \\\""+chalMotivation+"\\\", messageType: TEXT}) {\\r\\n        id\\r\\n        text\\r\\n        messageType\\r\\n        userID\\r\\n        createdAt\\r\\n        updatedAt\\r\\n        _lastChangedAt\\r\\n        _version\\r\\n        chatroomID\\r\\n    }\\r\\n}\",\"variables\":{}}"
            payload = payload.encode('utf-8')
            makeMessageResponse = requests.request("POST", url, headers=headers, data=payload)

    return "SUCCESS"