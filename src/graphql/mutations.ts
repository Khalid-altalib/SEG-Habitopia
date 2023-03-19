/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChallengeType = /* GraphQL */ `
  mutation CreateChallengeType(
    $input: CreateChallengeTypeInput!
    $condition: ModelChallengeTypeConditionInput
  ) {
    createChallengeType(input: $input, condition: $condition) {
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
export const updateChallengeType = /* GraphQL */ `
  mutation UpdateChallengeType(
    $input: UpdateChallengeTypeInput!
    $condition: ModelChallengeTypeConditionInput
  ) {
    updateChallengeType(input: $input, condition: $condition) {
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
export const deleteChallengeType = /* GraphQL */ `
  mutation DeleteChallengeType(
    $input: DeleteChallengeTypeInput!
    $condition: ModelChallengeTypeConditionInput
  ) {
    deleteChallengeType(input: $input, condition: $condition) {
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
