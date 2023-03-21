import requests
import json
import time
from datetime import datetime, timedelta

"""
    Tests for all endpoints - Query's and Mutations for GraphQL endpoint
"""

#GraphQL resource
url = "https://kak5ovgm35etxilpjodj72ed34.appsync-api.eu-west-2.amazonaws.com/graphql"

#key and protocol
headers = {
    'x-api-key': 'da2-ejak5jxjlrgbhlag7ajyjt7jze',
    'Content-Type': 'application/json'
}

#VALUES FOR CHALLEND ENV
# #GraphQL resource
# url = "https://gca5bevlizbrbf7lsmhwbn3cyi.appsync-api.eu-west-2.amazonaws.com/graphql"

# #key and protocol
# headers = {
#     'x-api-key': 'da2-n657qaa6lndkdgsdmefs5d73qu',
#     'Content-Type': 'application/json'
# }

#export const (.*)\n  query (.*\n)

#query ([^=f(])
#query \l$1

testQuerys = ["getLeaderboard(id: \\\"testID\\\") {\\r\\n        id\\r\\n    }",

"listLeaderboards {\\r\\n        items {\\r\\n            id\\r\\n        }\\r\\n    }",

"getChallenge(id: \\\"testID\\\") {\\r\\n        id\\r\\n    }",

"listChallenges {\\r\\n        items {\\r\\n            id\\r\\n        }\\r\\n    }",

"challengesByStatus(status: ACTIVE) {\\r\\n        items {\\r\\n            id\\r\\n        }\\r\\n    }",

"getChallengeType(id: \\\"testID\\\") {\\r\\n        id\\r\\n    }",

"listChallengeTypes {\\r\\n        items {\\r\\n            id\\r\\n        }\\r\\n    }",

"getUser(id: \\\"testID\\\") {\\r\\n        id\\r\\n    }",

"listUsers {\\r\\n        items {\\r\\n            id\\r\\n        }\\r\\n    }",

"getMessage(id: \\\"testID\\\") {\\r\\n        id\\r\\n    }",

"listMessages {\\r\\n        items {\\r\\n            id\\r\\n        }\\r\\n    }",

"messagesByChatroomID(chatroomID: \\\"testID\\\") {\\r\\n        items {\\r\\n            id\\r\\n        }\\r\\n    }",

"messagesByUserID(userID: \\\"testID\\\") {\\r\\n        items {\\r\\n            id\\r\\n        }\\r\\n    }",

"getChatRoom(id: \\\"testID\\\") {\\r\\n        id\\r\\n    }",

"listChatRooms {\\r\\n        items {\\r\\n            id\\r\\n        }\\r\\n    }",

"getCheckin(id: \\\"testID\\\") {\\r\\n        id\\r\\n    }",

"listCheckins {\\r\\n        items {\\r\\n            id\\r\\n        }\\r\\n    }",

"checkinsByUserID(userID: \\\"testID\\\") {\\r\\n        items {\\r\\n            id\\r\\n        }\\r\\n    }",

"checkinsByChatroomID(chatroomID: \\\"testID\\\") {\\r\\n        items {\\r\\n            id\\r\\n        }\\r\\n    }",

"getChallengeUser(id: \\\"testID\\\") {\\r\\n        id\\r\\n    }",

"listChallengeUsers {\\r\\n        items {\\r\\n            id\\r\\n        }\\r\\n    }",

"challengeUsersByChallengeId(challengeId: \\\"testID\\\") {\\r\\n        items {\\r\\n            id\\r\\n        }\\r\\n    }",

"challengeUsersByUserId(userID: \\\"testID\\\") {\\r\\n        items {\\r\\n            id\\r\\n        }\\r\\n    }",

"getUserChatRoom(id: \\\"testID\\\") {\\r\\n        id\\r\\n    }",

"listUserChatRooms {\\r\\n        items {\\r\\n            id\\r\\n        }\\r\\n    }",

"userChatRoomsByUserId(userId: \\\"testID\\\") {\\r\\n        items {\\r\\n            id\\r\\n        }\\r\\n    }",

"userChatRoomsByChatRoomId(chatRoomId: \\\"testID\\\") {\\r\\n        items {\\r\\n            id\\r\\n        }\\r\\n    }",

"getUserValidatedCheckIn(id: \\\"testID\\\") {\\r\\n        id\\r\\n    }",

"listUserValidatedCheckIns {\\r\\n        items {\\r\\n            id\\r\\n        }\\r\\n    }",

"userValidatedCheckInsByUserId(userId: \\\"testID\\\") {\\r\\n        items {\\r\\n            id\\r\\n        }\\r\\n    }",

"userValidatedCheckInsByCheckinId(checkinId: \\\"testID\\\") {\\r\\n        items {\\r\\n            id\\r\\n        }\\r\\n    }"]

testMutations = [
    {
        "name": "ChallengeType",
        "creationVars": "name: \\\"test\\\", description: \\\"test\\\", active: true",
        "updateVars": "name: \\\"testUpdated\\\""
    },
    {
        "name": "User",
        "creationVars": "",
        "updateVars": "name: \\\"testUpdated\\\""
    },
    # {
    #     "name": "ChatRoom",
    #     "creationVars": "",
    #     "updateVars": ""
    # },
    # {
    #     "name": "Challenge",
    #     "creationVars": "challengeChallengeTypeId: \"testID\", status: INACTIVE, challengeChatRoomId: \"testid\", userCount: 0",
    #     "updateVars": "challengeChallengeTypeId: \"testID2\""
    # },
    # {
    #     "name": "Message",
    #     "creationVars": "",
    #     "updateVars": ""
    # },
    # {
    #     "name": "Checkin",
    #     "creationVars": "",
    #     "updateVars": ""
    # },
    # {
    #     "name": "Leaderboard",
    #     "creationVars": "",
    #     "updateVars": ""
    # },
]

#payload class: generic frame to populate with test querys
class payloadGenericQuery:
    def __init__(self, queryIn):
        self.query = "{\"query\":\"query testQuery {\\r\\n    "+ queryIn + "\\r\\n}\",\"variables\":{}}"
    
    def asPayload(self):
        return self.query


#payload class: generic frame to populate with test mutations
class payloadGenericMutation:
    def __init__(self, mutationIn):
        self.createMutation = "{\"query\":\"mutation testCreate {\\r\\n            create"+mutationIn["name"]+"(input: {"+mutationIn["creationVars"]+"}) {\\r\\n                id\\r\\n                _version\\r\\n      }\\r\\n  }\",\"variables\":{}}"
        self.updateMutationStub = [mutationIn["name"], mutationIn["updateVars"]]
        self.deleteMutationStub = mutationIn["name"]
    
    def createAsPayload(self):
        return self.createMutation
    
    def updateAsPayload(self, id, version):
        self.updateMutation = "{\"query\":\"mutation testUpdate {\\r\\n            update"+self.updateMutationStub[0]+"(input: {id: \""+id+"\", _version: "+str(version)+", "+self.updateMutationStub[1]+"}) {\\r\\n        id\\r\\n        _version\\r\\n    }\\r\\n}\",\"variables\":{}}"
                                      # "{\"query\":\"mutation testMutation {\\r\\n    updateChallengeType(input: {id: \\\"fdf238d8-62d9-484a-a83a-4efdb59e3ce9\\\", _version: 1, name: \\\"testUpdated\\\"}) {\\r\\n        id\\r\\n        _version\\r\\n    }\\r\\n}\",\"variables\":{}}"
        return self.updateMutation
    
    def deleteAsPayload(self, id, version):
        self.deleteMutation = "{\"query\":\"mutation testDelete {\\r\\n            delete"+self.deleteMutationStub+"(input: {id: \""+id+"\", _version: "+str(version)+"}) {\\r\\n                id\\r\\n      }\\r\\n  }\",\"variables\":{}}"
        return self.deleteMutation

#Queue and execute all querys and assert 200 response from GraphQL resource

num_tests = 0
num_failed = 0
num_skipped = 0


for testQuery in testQuerys:
    responseTestQuery = requests.request("POST", url, headers=headers, data=payloadGenericQuery(testQuery).asPayload())
    num_tests+=1
    try:
        assert responseTestQuery.status_code == 200
        print("Test Passed: " + testQuery.split(" ")[0].split("(")[0] + " returned 200\n")
    except AssertionError as e:
        num_failed+=1
        print("Assertion Error: " + str(e))
        print("Query: " + testQuery)
        print("Response: " + str(responseTestQuery.status_code)+"\n")

for testMutation in testMutations:
    responseTestMutationCreate = requests.request("POST", url, headers=headers, data=payloadGenericMutation(testMutation).createAsPayload())
    num_tests+=1
    createCont=True
    try:
        assert responseTestMutationCreate.status_code == 200
        indexName = "create"+testMutation["name"]
        id = json.loads(responseTestMutationCreate.text)["data"][indexName]["id"]
        version = json.loads(responseTestMutationCreate.text)["data"][indexName]["_version"]
        print("Test Passed: create" + testMutation["name"] + " returned 200\n")
    except AssertionError as e:
        createCont=False
        num_failed+=1
        print("Assertion Error: " + str(e))
        print("Mutation: create" + testMutation["name"])
        print("Full Query: "+ payloadGenericMutation(testMutation).createAsPayload())
        print("Response: " + str(responseTestMutationCreate.status_code)+"\n")
    except KeyError as e:
        createCont=False
        num_failed+=1
        print("Creation Error: " + str(e))
        print("Mutation: create" + testMutation["name"])
        print("Full Query: "+ payloadGenericMutation(testMutation).createAsPayload())
        print("Response: " + str(responseTestMutationCreate.status_code)+"\n")
    
    if createCont:
        responseTestMutationUpdate = requests.request("POST", url, headers=headers, data=payloadGenericMutation(testMutation).updateAsPayload(id, version))
        num_tests+=1
        try:
            assert responseTestMutationUpdate.status_code == 200
            assert json.loads(responseTestMutationUpdate.text)["data"]["update"+testMutation["name"]]["_version"] == (version+1)
            version+=1
            print("Test Passed: update" + testMutation["name"] + " returned 200\n")
        except AssertionError as e:
            num_failed+=1
            print("Assertion Error: " + str(e))
            print("Mutation: update" + testMutation["name"])
            print("Full Query: "+ payloadGenericMutation(testMutation).updateAsPayload(id, version))
            print("Response: " + str(responseTestMutationUpdate.status_code)+"\n")


        responseTestMutationDelete = requests.request("POST", url, headers=headers, data=payloadGenericMutation(testMutation).deleteAsPayload(id, version))
        num_tests+=1
        try:
            assert responseTestMutationDelete.status_code == 200
            print("Test Passed: delete" + testMutation["name"] + " returned 200\n")
        except AssertionError as e:
            num_failed+=1
            print("Assertion Error: " + str(e))
            print("Mutation: delete" + testMutation["name"])
            print("Full Query: "+ payloadGenericMutation(testMutation).deleteAsPayload(id, version))
            print("Response: " + str(responseTestMutationDelete.status_code)+"\n")
    else:
        num_skipped+=2

print("\n-------------------------\n{}/{} tests passed\n{}% test coverage ({} tests skipped)\n-------------------------\n".format(num_tests-num_failed, num_tests, str(100*num_tests/(len(testQuerys)+(len(testMutations)*3))), num_skipped))
       
