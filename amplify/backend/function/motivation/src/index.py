import requests
import json

"""
    Trigger event handler for cloudwatch scheduled event (every 8am and 8pm)
     - Sends motivational messages to active challenge chat rooms

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

    """
        Send motivational messages to active challenge chat rooms
        - Messsages are generated using the GPT-3 davinci text model provided by OpenAI
    """

    #Send motivational messages only when running at 9:00, 9:01, 9:02
    
    def motivationalQuoteFromGpt(prompt):
        #Prompt is a list of two strings: [challenge detail, list of users in challenge]
        #use this to form prompt for GPT-3
        formed_prompt = "Write a single short movational message (around 25 words as plain text, no quotation marks) for a group of people who are currently doing a challenge to " + prompt[0] + ". The only people in the challenge are " + prompt[1]
        
        #Send request to OpenAI API
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
        #shed unnneccessary data from response and return
        return res["choices"][0]["text"][2:]

    #Send query for updated list of active challenges
    updatedResponseGetActiveChallenges = requests.request("POST", url, headers=headers, data=payloadGetActiveChallenges().asPayload())
    newActiveResponseAsJson = json.loads(updatedResponseGetActiveChallenges.text)["data"]["challengesByStatus"]["items"]
    
    #Filter out datastore error deleted challenges
    newActiveChalsWithoutDeleted = [x for x in newActiveResponseAsJson if (str(x["_deleted"]) != 'True')]

    for chalToMotivate in newActiveChalsWithoutDeleted:
        #extract challenge details and users
        chalGoal = chalToMotivate["ChallengeType"]["description"]
        chalUsers = chalToMotivate["Users"]["items"]
        users = []
        for user in chalUsers:
            users.append(user["user"]["name"])

        #format users list for prompt
        userString = ""+str(str(users).replace('[', "").replace(']',""))

        chalMotivation = motivationalQuoteFromGpt([chalGoal, userString])

        #populate payload for new message and send GraphQL request
        payload = "{\"query\":\"mutation makeMessage {\\r\\n    createMessage(input: {userID: \\\"66ab98f2-c5c6-45ad-986e-fab9641422ac\\\", chatroomID: \\\""+chalToMotivate["challengeChatRoomId"]+"\\\", text: \\\""+chalMotivation+"\\\", messageType: TEXT}) {\\r\\n        id\\r\\n        text\\r\\n        messageType\\r\\n        userID\\r\\n        createdAt\\r\\n        updatedAt\\r\\n        _lastChangedAt\\r\\n        _version\\r\\n        chatroomID\\r\\n    }\\r\\n}\",\"variables\":{}}"
        payload = payload.encode('utf-8')
        makeMessageResponse = requests.request("POST", url, headers=headers, data=payload)

    return "SUCCESS"