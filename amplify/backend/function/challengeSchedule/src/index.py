import requests
import json
import os
import boto3
import time

from requests_aws_sign import AWSV4Sign

def Cquery(query, variables: dict):
    session = boto3.session.Session()
    credentials = session.get_credentials()
    region = session.region_name or 'us-east-2'
    
    endpoint = os.environ.get('APPSYNC_URL', None)
    headers={"Content-Type": "application/json"}
    payload = {"query": query, 'variables': variables}

    appsync_region = __parse_region_from_url(endpoint) or region
    auth=AWSV4Sign(credentials, appsync_region, 'appsync')
    try:
        response = requests.post(
            endpoint,
            auth=auth,
            json=payload,
            headers=headers
        ).json()
        if 'errors' in response:
            print('Error attempting to query AppSync')
            print(response['errors'])
        else:
            return response
    except Exception as exception:
        print('Error with Mutation')
        print(exception)

    return None

def __parse_region_from_url(url):
    """Parses the region from the appsync url so we call the correct region regardless of the session or the argument"""
    split = url.split('.')
    if 2 < len(split):
        return split[2]
    return None


def handler(event, context):
    print(event)

    input = {
        'name': 'New Challenge Type tester',
        'desc': 'This challenge was written.'
    }

    query = """
        mutation makeNewChalType($name: String!, $desc: String!) {
            createChallengeType(input: {name: $name, description: $desc, active: true}) {
                name
                description
                active
            }
        }
    """
    res = Cquery(query, { 'input': input })
    print(res)

    """
    mutation makeNewChal {
        createChallenge(input: {challengeChallengeTypeId: "8966c822-aa32-4c1d-b84c-f7716458ad0a", userCount: 2, started: null, status:INACTIVE}) {
            id
            userCount
            status
        }
    }
    
    mutation setChallengeInactive($id: ID!, $versionIn: Int) {
       updateChallenge(input: {id: $id, status: INACTIVE, _version: $versionIn}) {
         id
         status
     	}
     }

    query getActiveChallenges {
        challengesByStatus(status: ACTIVE) {
            items {
                id
                started
                _version
            }
        }
    }
    """