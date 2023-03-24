import requests
import json
import time
from datetime import datetime, timedelta
import re

"""
    Tests for all endpoints - Query's and Mutations for GraphQL resource
"""

#GraphQL resource
url = "https://kak5ovgm35etxilpjodj72ed34.appsync-api.eu-west-2.amazonaws.com/graphql"

#key and protocol
headers = {
    'x-api-key': 'da2-ejak5jxjlrgbhlag7ajyjt7jze',
    'Content-Type': 'application/json'
}

#GraphQL querys to execute for every table and custom index rule

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


#Non related mutations (no relations to other tables)
testMutations = [
    {
        "name": "ChallengeType",
        "creationVars": "name: \\\"testChalType\\\", description: \\\"test\\\", active: true",
        "updateVars": "name: \\\"testUpdatedChalType\\\""
    },
    {
        "name": "User",
        "creationVars": "name: \\\"testUser\\\"",
        "updateVars": "name: \\\"testUpdatedUser\\\""
    },
    {
        "name": "ChatRoom",
        "creationVars": "name: \\\"testChatRoom\\\"",
        "updateVars": "name: \\\"testUpdatedChatRoom\\\""
    },
]

#List of created items for use in related mutations
createdItems = {}

#Related mutations (relations to other tables)
relatedTestMutations = [
    {
        "name": "Challenge",
        "creationVars": "challengeChallengeTypeId: \\\"REL ChallengeType ID\\\", status: INACTIVE, challengeChatRoomId: \\\"REL ChatRoom ID\\\", userCount: 0",
        "updateVars": "userCount: 1"
    },
    {
        "name": "Message",
        "creationVars": "text: \\\"testMessage\\\", chatroomID: \\\"REL ChatRoom ID\\\", userID: \\\"REL User ID\\\"",
        "updateVars": "text: \\\"testUpdatedMessage\\\""
    },
    {
        "name": "Checkin",
        "creationVars": "userID: \\\"REL User ID\\\", chatroomID: \\\"REL ChatRoom ID\\\", validationCount: 0",
        "updateVars": "validationCount: 1"
    },
    {
        "name": "Leaderboard",
        "creationVars": "leaderboardChallengeTypeId: \\\"REL ChallengeType ID\\\", leaderboardUserId: \\\"REL User ID\\\", numberOfCheckins: 0",
        "updateVars": "numberOfCheckins: 1"
    },
]

#Replacement function for ID - transforms regex match groups into ID's from createdItems
def replaceRelatedIds(match):
    if match.group() is not None:
        return createdItems[match.group()[4:-3]][0]

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
        self.updateMutation = "{\"query\":\"mutation testUpdate {\\r\\n            update"+self.updateMutationStub[0]+"(input: {id: \\\""+id+"\\\", _version: "+str(version)+", "+self.updateMutationStub[1]+"}) {\\r\\n        id\\r\\n        _version\\r\\n    }\\r\\n}\",\"variables\":{}}"
        return self.updateMutation
    
    def deleteAsPayload(self, id, version):
        self.deleteMutation = "{\"query\":\"mutation testDelete {\\r\\n            delete"+self.deleteMutationStub+"(input: {id: \\\""+id+"\\\", _version: "+str(version)+"}) {\\r\\n                id\\r\\n      }\\r\\n  }\",\"variables\":{}}"
        return self.deleteMutation


num_tests = 0
num_failed = 0
num_skipped = 0


#Queue and execute all querys and assert 200 response from GraphQL resource
for testQuery in testQuerys:
    #populate and send POST request to query resource
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

#NR CREATE
#Queue and execute all non-related create mutations and assert 200 response from GraphQL resource
for testMutation in testMutations:
    #populate and send POST request to create non-related object
    responseTestMutationCreate = requests.request("POST", url, headers=headers, data=payloadGenericMutation(testMutation).createAsPayload())
    num_tests+=1
    try:
        assert responseTestMutationCreate.status_code == 200
        indexName = "create"+testMutation["name"]

        #assert that the response isn't 200 with errors
        assert (type(json.loads(responseTestMutationCreate.text)["data"]) != None.__class__)

        #receive and save the ID and version of the created object
        id = json.loads(responseTestMutationCreate.text)["data"][indexName]["id"]
        version = json.loads(responseTestMutationCreate.text)["data"][indexName]["_version"]
        createdItems[testMutation["name"]] = [id, version]

        print("Test Passed: create" + testMutation["name"] + " returned 200\n")

    except AssertionError as e:
        num_failed+=1
        print("Assertion Error: " + str(e))
        print("Mutation: create" + testMutation["name"])
        print("Full Query: "+ payloadGenericMutation(testMutation).createAsPayload())
        if responseTestMutationCreate.status_code==200:
            print("Response: " + str(responseTestMutationCreate.status_code))
            print(json.loads(responseTestMutationCreate.text)["errors"][0])
            print()
        else:
            print("Response: " + str(responseTestMutationCreate.status_code)+"\n")

    except KeyError as e:
        num_failed+=1
        print("Creation Error: " + str(e))
        print("Mutation: create" + testMutation["name"])
        print("Full Query: "+ payloadGenericMutation(testMutation).createAsPayload())
        if responseTestMutationCreate.status_code==200:
            print("Response: " + str(responseTestMutationCreate.status_code))
            print(json.loads(responseTestMutationCreate.text)["errors"][0])
            print()
        else:
            print("Response: " + str(responseTestMutationCreate.status_code)+"\n")

#R CREATE
#Queue and execute all related create mutations and assert 200 response from GraphQL resource
for testMutation in relatedTestMutations:
    try:
        #Attempt to generate and replace ID's in creationVars
        baseMutation = payloadGenericMutation(testMutation).createAsPayload()
        baseMutationReplacedId = re.sub(r"REL (\b)(\w*)(\b) ID", replaceRelatedIds, baseMutation)

        #populate and send POST request to create related object
        responseTestMutationCreate = requests.request("POST", url, headers=headers, data=baseMutationReplacedId)
        num_tests+=1
        try:
            assert responseTestMutationCreate.status_code == 200
            indexName = "create"+testMutation["name"]

            #assert that the response isn't 200 with errors
            assert (type(json.loads(responseTestMutationCreate.text)["data"]) != None.__class__)

            #receive and save the ID and version of the created object
            id = json.loads(responseTestMutationCreate.text)["data"][indexName]["id"]
            version = json.loads(responseTestMutationCreate.text)["data"][indexName]["_version"]
            createdItems[testMutation["name"]] = [id, version]

            print("Test Passed: create" + testMutation["name"] + " returned 200\n")

        except AssertionError as e:
            num_failed+=1
            print("Assertion Error: " + str(e))
            print("Mutation: create" + testMutation["name"])
            print("Full Query: "+ payloadGenericMutation(testMutation).createAsPayload())
            if responseTestMutationCreate.status_code==200:
                print("Response: " + str(responseTestMutationCreate.status_code))
                print(json.loads(responseTestMutationCreate.text)["errors"][0])
                print()
            else:
                print("Response: " + str(responseTestMutationCreate.status_code)+"\n")

        except KeyError as e:
            num_failed+=1
            print("Creation Error: " + str(e))
            print("Mutation: create" + testMutation["name"])
            print("Full Query: "+ payloadGenericMutation(testMutation).createAsPayload())
            if responseTestMutationCreate.status_code==200:
                print("Response: " + str(responseTestMutationCreate.status_code))
                print(json.loads(responseTestMutationCreate.text)["errors"][0])
                print()
            else:
                print("Response: " + str(responseTestMutationCreate.status_code)+"\n")

    except KeyError as e:
        #If the creation of a related object fails, skip the creation of all objects that rely on it
        print("Skipping create test for " + testMutation["name"] + " because creation of reliant related record failed\n")
        num_skipped+=1

#R UPDATE DELETE
#Queue and execute all related update and delete mutations and assert 200 response from GraphQL resource (reverse order to maintain relationship integrity)
for testMutation in reversed(relatedTestMutations):
    try:
        #Attempt to get details of created object
        id = createdItems[testMutation["name"]][0]
        version = createdItems[testMutation["name"]][1]

        #populate and send POST request to update existing related object
        responseTestMutationUpdate = requests.request("POST", url, headers=headers, data=payloadGenericMutation(testMutation).updateAsPayload(id, version))
        num_tests+=1
        try:
            #assert that the response is 200 and the version has incremented
            assert responseTestMutationUpdate.status_code == 200
            assert json.loads(responseTestMutationUpdate.text)["data"]["update"+testMutation["name"]]["_version"] == (version+1)

            version+=1
            print("Test Passed: update" + testMutation["name"] + " returned 200\n")

        except AssertionError as e:
            num_failed+=1
            print("Assertion Error: " + str(e))
            print("Mutation: update" + testMutation["name"])
            print("Full Query: "+ payloadGenericMutation(testMutation).updateAsPayload(id, version))
            if responseTestMutationUpdate.status_code==200:
                print("Response: " + str(responseTestMutationUpdate.status_code))
                print(json.loads(responseTestMutationUpdate.text)["errors"][0])
                print()
            else:
                print("Response: " + str(responseTestMutationUpdate.status_code)+"\n")

        #populate and send POST request to delete existing related object
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
            if responseTestMutationDelete.status_code==200:
                print("Response: " + str(responseTestMutationDelete.status_code))
                print(json.loads(responseTestMutationDelete.text)["errors"][0])
                print()
            else:
                print("Response: " + str(responseTestMutationDelete.status_code)+"\n")

    except KeyError:
        print("Skipping update and delete tests for " + testMutation["name"] + " because create failed\n")
        num_skipped+=2

#NR UPDATE DELETE
#Queue and execute all non-related update and delete mutations and assert 200 response from GraphQL resource
for testMutation in testMutations:
    try:
        #Attempt to get details of created object
        id = createdItems[testMutation["name"]][0]
        version = createdItems[testMutation["name"]][1]
        #populate and send POST request to update existing non-related object
        responseTestMutationUpdate = requests.request("POST", url, headers=headers, data=payloadGenericMutation(testMutation).updateAsPayload(id, version))
        num_tests+=1
        try:
            #assert that the response is 200 and the version has incremented
            assert responseTestMutationUpdate.status_code == 200
            assert json.loads(responseTestMutationUpdate.text)["data"]["update"+testMutation["name"]]["_version"] == (version+1)

            version+=1
            print("Test Passed: update" + testMutation["name"] + " returned 200\n")

        except AssertionError as e:
            num_failed+=1
            print("Assertion Error: " + str(e))
            print("Mutation: update" + testMutation["name"])
            print("Full Query: "+ payloadGenericMutation(testMutation).updateAsPayload(id, version))
            if responseTestMutationUpdate.status_code==200:
                print("Response: " + str(responseTestMutationUpdate.status_code))
                print(json.loads(responseTestMutationUpdate.text)["errors"][0])
                print()
            else:
                print("Response: " + str(responseTestMutationUpdate.status_code)+"\n")

        #populate and send POST request to delete existing non-related object
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
            if responseTestMutationDelete.status_code==200:
                print("Response: " + str(responseTestMutationDelete.status_code))
                print(json.loads(responseTestMutationDelete.text)["errors"][0])
                print()
            else:
                print("Response: " + str(responseTestMutationDelete.status_code)+"\n")

    except KeyError:
        #Skip update and delete tests if create failed
        print("Skipping update and delete tests for " + testMutation["name"] + " because create failed\n")
        num_skipped+=2

#Print test summary and coverage on completion
print("\n--------------------------------------------\n{}/{} tests passed\n{}% test coverage ({} tests skipped)\n--------------------------------------------\n".format(num_tests-num_failed, num_tests, str(100*num_tests/(len(testQuerys)+(len(testMutations)*3)+(len(relatedTestMutations)*3))), num_skipped))
       
