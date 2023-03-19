/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChallengeType = /* GraphQL */ `
  query GetChallengeType($id: ID!) {
    getChallengeType(id: $id) {
      id
      name
      description
      active
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listChallengeTypes = /* GraphQL */ `
  query ListChallengeTypes(
    $filter: ModelChallengeTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChallengeTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        active
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncChallengeTypes = /* GraphQL */ `
  query SyncChallengeTypes(
    $filter: ModelChallengeTypeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChallengeTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        active
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
