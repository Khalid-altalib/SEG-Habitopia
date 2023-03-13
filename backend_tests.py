import requests
import json
import time
from datetime import datetime, timedelta

"""
    Tests for all endpoints - Query's and Mutations for GraphQL endpoint
"""

#GraphQL resource
url = "https://gca5bevlizbrbf7lsmhwbn3cyi.appsync-api.eu-west-2.amazonaws.com/graphql"

#key and protocol
headers = {
    'x-api-key': 'da2-n657qaa6lndkdgsdmefs5d73qu',
    'Content-Type': 'application/json'
}

#export const (.*)\n  query (.*\n)

#query ([^=f(])
#query \l$1

testQuerys = []

testMutations = [

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
        self.createMutation = "{\"query\":\"mutation testCreate {\\r\\n            create"+mutationIn["name"]+"(input: \{"+mutationIn["creationVars"]+"\}}) {\\r\\n                id\\r\\n      }\\r\\n  }\",\"variables\":{}}"
        self.updateMutation = "{\"query\":\"mutation testUpdate {\\r\\n            update"+mutationIn["name"]+"(input: \{"+mutationIn["updateVars"]+"\}}) {\\r\\n                id\\r\\n      }\\r\\n  }\",\"variables\":{}}"
        self.deleteMutation = "{\"query\":\"mutation testDelete {\\r\\n            delete"+mutationIn["name"]+"(input: \{"+mutationIn["updateVars"]+"\}}) {\\r\\n                id\\r\\n      }\\r\\n  }\",\"variables\":{}}"
    
    def createAsPayload(self):
        return self.createMutation
    
    def updateAsPayload(self):
        return self.updateMutation
    
    def deleteAsPayload(self):
        return self.deleteMutation

#Queue and execute all querys and assert 200 response from GraphQL resource
num_tests = 0
num_failed = 0

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
    try:
        assert responseTestMutationCreate.status_code == 200
        print("Test Passed: create" + testMutation["name"] + " returned 200\n")
    except AssertionError as e:
        num_failed+=1
        print("Assertion Error: " + str(e))
        print("Mutation: create" + testMutation["name"])
        print("Response: " + str(responseTestMutationCreate.status_code)+"\n")
    
    responseTestMutationUpdate = requests.request("POST", url, headers=headers, data=payloadGenericMutation(testMutation).updateAsPayload())
    num_tests+=1
    try:
        assert responseTestMutationUpdate.status_code == 200
        print("Test Passed: update" + testMutation["name"] + " returned 200\n")
    except AssertionError as e:
        num_failed+=1
        print("Assertion Error: " + str(e))
        print("Mutation: update" + testMutation["name"])
        print("Response: " + str(responseTestMutationUpdate.status_code)+"\n")
    
    responseTestMutationDelete = requests.request("POST", url, headers=headers, data=payloadGenericMutation(testMutation).deleteAsPayload())
    num_tests+=1
    try:
        assert responseTestMutationDelete.status_code == 200
        print("Test Passed: delete" + testMutation["name"] + " returned 200\n")
    except AssertionError as e:
        num_failed+=1
        print("Assertion Error: " + str(e))
        print("Mutation: delete" + testMutation["name"])
        print("Response: " + str(responseTestMutationDelete.status_code)+"\n")

print("\n-------------------------\n{}/{} tests passed\n{}% test coverage\n-------------------------\n".format(num_tests-num_failed, num_tests, str(100*num_tests/(len(testQuerys)+(len(testMutations)*3)))))
       
