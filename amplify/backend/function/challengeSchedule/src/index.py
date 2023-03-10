import requests
import json
import time
from datetime import datetime, timedelta
# import os
# import boto3

# from requests_aws_sign import AWSV4Sign

# def Cquery(query, variables: dict):
#     session = boto3.session.Session()
#     credentials = session.get_credentials()
#     region = session.region_name or 'us-east-2'
    
#     endpoint = os.environ.get('APPSYNC_URL', None)
#     headers={"Content-Type": "application/json"}
#     payload = {"query": query, 'variables': variables}

#     appsync_region = __parse_region_from_url(endpoint) or region
#     auth=AWSV4Sign(credentials, appsync_region, 'appsync')
#     try:
#         response = requests.post(
#             endpoint,
#             auth=auth,
#             json=payload,
#             headers=headers
#         ).json()
#         if 'errors' in response:
#             print('Error attempting to query AppSync')
#             print(response['errors'])
#         else:
#             return response
#     except Exception as exception:
#         print('Error with Mutation')
#         print(exception)

#     return None

# def __parse_region_from_url(url):
#     """Parses the region from the appsync url so we call the correct region regardless of the session or the argument"""
#     split = url.split('.')
#     if 2 < len(split):
#         return split[2]
#     return None


# def handler(event, context):
#     print(event)

#     input = {
#         'name': 'New Challenge Type tester',
#         'desc': 'This challenge was written.'
#     }

#     query = """
#         mutation makeNewChalType($name: String!, $desc: String!) {
#             createChallengeType(input: {name: $name, description: $desc, active: true}) {
#                 name
#                 description
#                 active
#             }
#         }
#     """
#     res = Cquery(query, { 'input': input })
#     print(res)

#     """
#     mutation makeNewChal {
#         createChallenge(input: {challengeChallengeTypeId: "8966c822-aa32-4c1d-b84c-f7716458ad0a", userCount: 2, started: null, status:INACTIVE}) {
#             id
#             userCount
#             status
#         }
#     }
    
    # mutation setChallengeInactive($id: ID!, $versionIn: Int) {
    #    updateChallenge(input: {id: $id, status: INACTIVE, _version: $versionIn}) {
    #      id
    #      status
    #  	}
    #  }

    # query getActiveChallenges {
    #     challengesByStatus(status: ACTIVE) {
    #         items {
    #             id
    #             started
    #             _version
    #         }
    #     }
    # }
#     """
def handler(event, context):

    url = "https://gca5bevlizbrbf7lsmhwbn3cyi.appsync-api.eu-west-2.amazonaws.com/graphql"

    headers = {
    'x-api-key': 'da2-n657qaa6lndkdgsdmefs5d73qu',
    'Content-Type': 'application/json'
    }

    class payloadGetActiveChallenges:
        def __init__(self):
            self.query = "{\"query\":\"query getActiveChallenges {\\r\\n        challengesByStatus(status: ACTIVE) {\\r\\n            items {\\r\\n                id\\r\\n                started\\r\\n                _version\\r\\n                _deleted\\r\\n            }\\r\\n        }\\r\\n    }\",\"variables\":{}}"
        
        def asPayload(self):
            return self.query

    class payloadSetChallengeCompleted:
        def __init__(self, id, version):
            self.query = "{\"query\":\"mutation setChallengeCompleted($id: ID!, $versionIn: Int) {\\r\\n   updateChallenge(input: {id: $id, status: COMPLETED, _version: $versionIn}) {\\r\\n     id\\r\\n     status\\r\\n  \\t}\\r\\n }\",\"variables\":{\"id\":\""+id+"\",\"versionIn\":"+str(version)+"}}"

        def asPayload(self):
            return self.query

    class payloadGetChallengesToStart:
        def __init__(self):
            self.query = "{\"query\":\"query getChallengesToStart {\\r\\n        challengesByStatus(status: INACTIVE) {\\r\\n            items {\\r\\n                id\\r\\n                createdAt\\r\\n                _version\\r\\n                _deleted\\r\\n            }\\r\\n        }\\r\\n    }\",\"variables\":{}}"

        def asPayload(self):
            return self.query

    class payloadSetChallengeActive:
        def __init__(self, id, version):
            self.query = "{\"query\":\"mutation setChallengeInactive($id: ID!, $versionIn: Int) {\\r\\n       updateChallenge(input: {id: $id, status: ACTIVE, _version: $versionIn, started: "+str(int(time.time()))+"}) {\\r\\n         id\\r\\n         status\\r\\n     \\t}\\r\\n     }\",\"variables\":{\"id\":\""+id+"\",\"versionIn\": "+str(version)+"}}"

        def asPayload(self):
            return self.query

    responseGetActiveChallenges = requests.request("POST", url, headers=headers, data=payloadGetActiveChallenges().asPayload())

    getResponseAsJson = json.loads(responseGetActiveChallenges.text)["data"]["challengesByStatus"]["items"]

    activeChalsWithoutDeleted = [x for x in getResponseAsJson if (str(x["_deleted"]) != 'True')]

    for chalToInact in activeChalsWithoutDeleted:
        if chalToInact["started"] < int(time.time())-60*60*24*7:
            responseSetChallengeCompleted = requests.request("POST", url, headers=headers, data=payloadSetChallengeCompleted(chalToInact["id"], chalToInact["_version"]).asPayload())
            updateResponseAsJson = json.loads(responseSetChallengeCompleted.text)["data"]["updateChallenge"]

    responseGetChallengesToStart = requests.request("POST", url, headers=headers, data=payloadGetChallengesToStart().asPayload())
    challengesToStartWithoutDeleted = [x for x in json.loads(responseGetChallengesToStart.text)["data"]["challengesByStatus"]["items"] if (str(x["_deleted"]) != 'True')]

    for chalToStart in challengesToStartWithoutDeleted:
        if datetime.strptime(chalToStart["createdAt"],"%Y-%m-%dT%H:%M:%S.%fZ") < (datetime.today() - timedelta(days=1)):
            responseSetChallengeActive = requests.request("POST", url, headers=headers, data=payloadSetChallengeActive(chalToStart["id"], chalToStart["_version"]).asPayload())
            updateResponseAsJson = json.loads(responseSetChallengeActive.text)["data"]["updateChallenge"]