/* Amplify Params - DO NOT EDIT
	API_HABITOPIA_CHALLENGETABLE_ARN
	API_HABITOPIA_CHALLENGETABLE_NAME
	API_HABITOPIA_CHALLENGETYPETABLE_ARN
	API_HABITOPIA_CHALLENGETYPETABLE_NAME
	API_HABITOPIA_CHATROOMTABLE_ARN
	API_HABITOPIA_CHATROOMTABLE_NAME
	API_HABITOPIA_CHECKINTABLE_ARN
	API_HABITOPIA_CHECKINTABLE_NAME
	API_HABITOPIA_GRAPHQLAPIENDPOINTOUTPUT
	API_HABITOPIA_GRAPHQLAPIIDOUTPUT
	API_HABITOPIA_GRAPHQLAPIKEYOUTPUT
	API_HABITOPIA_LEADERBOARDTABLE_ARN
	API_HABITOPIA_LEADERBOARDTABLE_NAME
	API_HABITOPIA_MESSAGETABLE_ARN
	API_HABITOPIA_MESSAGETABLE_NAME
	API_HABITOPIA_USERTABLE_ARN
	API_HABITOPIA_USERTABLE_NAME
	AUTH_HABITOPIA_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

import crypto from '@aws-crypto/sha256-js';
import { defaultProvider } from '@aws-sdk/credential-provider-node';
import { SignatureV4 } from '@aws-sdk/signature-v4';
import { HttpRequest } from '@aws-sdk/protocol-http';
import { default as fetch, Request } from 'node-fetch';

const GRAPHQL_ENDPOINT = process.env.API_HABITOPIA_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.AWS_REGION || 'us-east-1';
const { Sha256 } = crypto;

// const query = /* GraphQL */ `
//   query Active_Challenges {
//     listTodos {
//       items {
//         id
//         name
//         description
//       }
//     }
//   }
// `;
const query = /* GraphQL */ `
  query getActiveChallenges {
    challengesByStatus(status: ACTIVE) {
      items {
        id
        started
      }
    }
  }
`;

const mutation = /* GraphQL */ `
mutation setChallengeInactive {
  updateChallenge(input: {id: "68b263a4-0e18-4015-98ca-b22d49c019a0", status: INACTIVE}) {
    id
    status
  }
}
`;
// const mutation = /* GraphQL */ `
// mutation setChallengeInactive($id: ID!) {
//   updateChallenge(input: {id: $id, status: INACTIVE}) {
// }
// `;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

 export const handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const endpoint = new URL(GRAPHQL_ENDPOINT);

  const signer = new SignatureV4({
    credentials: defaultProvider(),
    region: AWS_REGION,
    service: 'appsync',
    sha256: Sha256
  });

  const queryRequestToBeSigned = new HttpRequest({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      host: endpoint.host
    },
    hostname: endpoint.host,
    body: JSON.stringify({ query }),
    path: endpoint.pathname
  });

  const signedQuery = await signer.sign(queryRequestToBeSigned);
  const queryRequest = new Request(endpoint, signedQuery);

  let statusCode = 200;
  let body;
  let response;

  try {
    queryResponse = await fetch(queryRequest);
    body = await queryResponse.json();
    console.log(`BODY: ${JSON.stringify(body)}`);
    if (body.errors) statusCode = 400;
    
    if (body.data.challengesByStatus.items.length === 0) {
      console.log("No active challenges to end...");
    } else {
      //for (i = 0; i < body.data.challengesByStatus.items.length; i++) {

      const mutationRequestToBeSigned = new HttpRequest({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          host: endpoint.host
        },
        hostname: endpoint.host,
        body: JSON.stringify({ mutation, variables : {id: body.data.challengesByStatus.items[0].id}}),
        path: endpoint.pathname
      });
    
      const signedMutation = await signer.sign(mutationRequestToBeSigned);
      const mutationRequest = new Request(endpoint, signedMutation);

      mutationResponse = await fetch(mutationRequest);
      body = await mutationResponse.json();
      console.log(`BODY: ${JSON.stringify(body)}`);
      if (body.errors) statusCode = 400;
      //}
    }

  } catch (error) {
    statusCode = 500;
    body = {
      errors: [
        {
          message: error.message
        }
      ]
    };
  }

  return {
    statusCode,
    //  Uncomment below to enable CORS requests
    // headers: {
    //   "Access-Control-Allow-Origin": "*",
    //   "Access-Control-Allow-Headers": "*"
    // }, 
    body: JSON.stringify(body)
  };
};