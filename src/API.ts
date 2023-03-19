/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateChallengeTypeInput = {
  id?: string | null,
  name: string,
  description: string,
  active: boolean,
  _version?: number | null,
};

export type ModelChallengeTypeConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  and?: Array< ModelChallengeTypeConditionInput | null > | null,
  or?: Array< ModelChallengeTypeConditionInput | null > | null,
  not?: ModelChallengeTypeConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ChallengeType = {
  __typename: "ChallengeType",
  id: string,
  name: string,
  description: string,
  active: boolean,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateChallengeTypeInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  active?: boolean | null,
  _version?: number | null,
};

export type DeleteChallengeTypeInput = {
  id: string,
  _version?: number | null,
};

export type ModelChallengeTypeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  active?: ModelBooleanInput | null,
  and?: Array< ModelChallengeTypeFilterInput | null > | null,
  or?: Array< ModelChallengeTypeFilterInput | null > | null,
  not?: ModelChallengeTypeFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelChallengeTypeConnection = {
  __typename: "ModelChallengeTypeConnection",
  items:  Array<ChallengeType | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionChallengeTypeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionChallengeTypeFilterInput | null > | null,
  or?: Array< ModelSubscriptionChallengeTypeFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateChallengeTypeMutationVariables = {
  input: CreateChallengeTypeInput,
  condition?: ModelChallengeTypeConditionInput | null,
};

export type CreateChallengeTypeMutation = {
  createChallengeType?:  {
    __typename: "ChallengeType",
    id: string,
    name: string,
    description: string,
    active: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateChallengeTypeMutationVariables = {
  input: UpdateChallengeTypeInput,
  condition?: ModelChallengeTypeConditionInput | null,
};

export type UpdateChallengeTypeMutation = {
  updateChallengeType?:  {
    __typename: "ChallengeType",
    id: string,
    name: string,
    description: string,
    active: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteChallengeTypeMutationVariables = {
  input: DeleteChallengeTypeInput,
  condition?: ModelChallengeTypeConditionInput | null,
};

export type DeleteChallengeTypeMutation = {
  deleteChallengeType?:  {
    __typename: "ChallengeType",
    id: string,
    name: string,
    description: string,
    active: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetChallengeTypeQueryVariables = {
  id: string,
};

export type GetChallengeTypeQuery = {
  getChallengeType?:  {
    __typename: "ChallengeType",
    id: string,
    name: string,
    description: string,
    active: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListChallengeTypesQueryVariables = {
  filter?: ModelChallengeTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChallengeTypesQuery = {
  listChallengeTypes?:  {
    __typename: "ModelChallengeTypeConnection",
    items:  Array< {
      __typename: "ChallengeType",
      id: string,
      name: string,
      description: string,
      active: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncChallengeTypesQueryVariables = {
  filter?: ModelChallengeTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncChallengeTypesQuery = {
  syncChallengeTypes?:  {
    __typename: "ModelChallengeTypeConnection",
    items:  Array< {
      __typename: "ChallengeType",
      id: string,
      name: string,
      description: string,
      active: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateChallengeTypeSubscriptionVariables = {
  filter?: ModelSubscriptionChallengeTypeFilterInput | null,
};

export type OnCreateChallengeTypeSubscription = {
  onCreateChallengeType?:  {
    __typename: "ChallengeType",
    id: string,
    name: string,
    description: string,
    active: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateChallengeTypeSubscriptionVariables = {
  filter?: ModelSubscriptionChallengeTypeFilterInput | null,
};

export type OnUpdateChallengeTypeSubscription = {
  onUpdateChallengeType?:  {
    __typename: "ChallengeType",
    id: string,
    name: string,
    description: string,
    active: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteChallengeTypeSubscriptionVariables = {
  filter?: ModelSubscriptionChallengeTypeFilterInput | null,
};

export type OnDeleteChallengeTypeSubscription = {
  onDeleteChallengeType?:  {
    __typename: "ChallengeType",
    id: string,
    name: string,
    description: string,
    active: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
