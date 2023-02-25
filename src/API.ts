/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateChallengeInput = {
  id?: string | null,
  started?: string | null,
  userCount?: number | null,
  finished?: string | null,
  _version?: number | null,
  challengeChallengeTypeId: string,
  challengeChatRoomId?: string | null,
};

export type ModelChallengeConditionInput = {
  started?: ModelStringInput | null,
  userCount?: ModelIntInput | null,
  finished?: ModelStringInput | null,
  and?: Array< ModelChallengeConditionInput | null > | null,
  or?: Array< ModelChallengeConditionInput | null > | null,
  not?: ModelChallengeConditionInput | null,
  challengeChallengeTypeId?: ModelIDInput | null,
  challengeChatRoomId?: ModelIDInput | null,
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

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
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

export type Challenge = {
  __typename: "Challenge",
  id: string,
  ChallengeType: ChallengeType,
  Users?: ModelChallengeUserConnection | null,
  started?: string | null,
  ChatRoom?: ChatRoom | null,
  userCount?: number | null,
  finished?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  challengeChallengeTypeId: string,
  challengeChatRoomId?: string | null,
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

export type ModelChallengeUserConnection = {
  __typename: "ModelChallengeUserConnection",
  items:  Array<ChallengeUser | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ChallengeUser = {
  __typename: "ChallengeUser",
  id: string,
  challengeId: string,
  userId: string,
  challenge: Challenge,
  user: User,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type User = {
  __typename: "User",
  id: string,
  name?: string | null,
  image?: string | null,
  biography?: string | null,
  email?: string | null,
  notifications?: boolean | null,
  Messages?: ModelMessageConnection | null,
  ChatRooms?: ModelUserChatRoomConnection | null,
  Checkins?: ModelCheckinConnection | null,
  challenges?: ModelChallengeUserConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  text?: string | null,
  chatroomID: string,
  userID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelUserChatRoomConnection = {
  __typename: "ModelUserChatRoomConnection",
  items:  Array<UserChatRoom | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UserChatRoom = {
  __typename: "UserChatRoom",
  id: string,
  userId: string,
  chatRoomId: string,
  user: User,
  chatRoom: ChatRoom,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ChatRoom = {
  __typename: "ChatRoom",
  id: string,
  Messages?: ModelMessageConnection | null,
  users?: ModelUserChatRoomConnection | null,
  Checkins?: ModelCheckinConnection | null,
  LastMessage?: Message | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  chatRoomLastMessageId?: string | null,
};

export type ModelCheckinConnection = {
  __typename: "ModelCheckinConnection",
  items:  Array<Checkin | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Checkin = {
  __typename: "Checkin",
  id: string,
  timeStamp?: string | null,
  userID: string,
  chatroomID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateChallengeInput = {
  id: string,
  started?: string | null,
  userCount?: number | null,
  finished?: string | null,
  _version?: number | null,
  challengeChallengeTypeId?: string | null,
  challengeChatRoomId?: string | null,
};

export type DeleteChallengeInput = {
  id: string,
  _version?: number | null,
};

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

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
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

export type CreateUserInput = {
  id?: string | null,
  name?: string | null,
  image?: string | null,
  biography?: string | null,
  email?: string | null,
  notifications?: boolean | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  biography?: ModelStringInput | null,
  email?: ModelStringInput | null,
  notifications?: ModelBooleanInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  image?: string | null,
  biography?: string | null,
  email?: string | null,
  notifications?: boolean | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateMessageInput = {
  id?: string | null,
  text?: string | null,
  chatroomID: string,
  userID: string,
  _version?: number | null,
};

export type ModelMessageConditionInput = {
  text?: ModelStringInput | null,
  chatroomID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type UpdateMessageInput = {
  id: string,
  text?: string | null,
  chatroomID?: string | null,
  userID?: string | null,
  _version?: number | null,
};

export type DeleteMessageInput = {
  id: string,
  _version?: number | null,
};

export type CreateChatRoomInput = {
  id?: string | null,
  _version?: number | null,
  chatRoomLastMessageId?: string | null,
};

export type ModelChatRoomConditionInput = {
  and?: Array< ModelChatRoomConditionInput | null > | null,
  or?: Array< ModelChatRoomConditionInput | null > | null,
  not?: ModelChatRoomConditionInput | null,
  chatRoomLastMessageId?: ModelIDInput | null,
};

export type UpdateChatRoomInput = {
  id: string,
  _version?: number | null,
  chatRoomLastMessageId?: string | null,
};

export type DeleteChatRoomInput = {
  id: string,
  _version?: number | null,
};

export type CreateCheckinInput = {
  id?: string | null,
  timeStamp?: string | null,
  userID: string,
  chatroomID: string,
  _version?: number | null,
};

export type ModelCheckinConditionInput = {
  timeStamp?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  chatroomID?: ModelIDInput | null,
  and?: Array< ModelCheckinConditionInput | null > | null,
  or?: Array< ModelCheckinConditionInput | null > | null,
  not?: ModelCheckinConditionInput | null,
};

export type UpdateCheckinInput = {
  id: string,
  timeStamp?: string | null,
  userID?: string | null,
  chatroomID?: string | null,
  _version?: number | null,
};

export type DeleteCheckinInput = {
  id: string,
  _version?: number | null,
};

export type CreateChallengeUserInput = {
  id?: string | null,
  challengeId: string,
  userId: string,
  _version?: number | null,
};

export type ModelChallengeUserConditionInput = {
  challengeId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelChallengeUserConditionInput | null > | null,
  or?: Array< ModelChallengeUserConditionInput | null > | null,
  not?: ModelChallengeUserConditionInput | null,
};

export type UpdateChallengeUserInput = {
  id: string,
  challengeId?: string | null,
  userId?: string | null,
  _version?: number | null,
};

export type DeleteChallengeUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserChatRoomInput = {
  id?: string | null,
  userId: string,
  chatRoomId: string,
  _version?: number | null,
};

export type ModelUserChatRoomConditionInput = {
  userId?: ModelIDInput | null,
  chatRoomId?: ModelIDInput | null,
  and?: Array< ModelUserChatRoomConditionInput | null > | null,
  or?: Array< ModelUserChatRoomConditionInput | null > | null,
  not?: ModelUserChatRoomConditionInput | null,
};

export type UpdateUserChatRoomInput = {
  id: string,
  userId?: string | null,
  chatRoomId?: string | null,
  _version?: number | null,
};

export type DeleteUserChatRoomInput = {
  id: string,
  _version?: number | null,
};

export type ModelChallengeFilterInput = {
  id?: ModelIDInput | null,
  started?: ModelStringInput | null,
  userCount?: ModelIntInput | null,
  finished?: ModelStringInput | null,
  and?: Array< ModelChallengeFilterInput | null > | null,
  or?: Array< ModelChallengeFilterInput | null > | null,
  not?: ModelChallengeFilterInput | null,
  challengeChallengeTypeId?: ModelIDInput | null,
  challengeChatRoomId?: ModelIDInput | null,
};

export type ModelChallengeConnection = {
  __typename: "ModelChallengeConnection",
  items:  Array<Challenge | null >,
  nextToken?: string | null,
  startedAt?: number | null,
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

export type ModelChallengeTypeConnection = {
  __typename: "ModelChallengeTypeConnection",
  items:  Array<ChallengeType | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  biography?: ModelStringInput | null,
  email?: ModelStringInput | null,
  notifications?: ModelBooleanInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  chatroomID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelChatRoomFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelChatRoomFilterInput | null > | null,
  or?: Array< ModelChatRoomFilterInput | null > | null,
  not?: ModelChatRoomFilterInput | null,
  chatRoomLastMessageId?: ModelIDInput | null,
};

export type ModelChatRoomConnection = {
  __typename: "ModelChatRoomConnection",
  items:  Array<ChatRoom | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCheckinFilterInput = {
  id?: ModelIDInput | null,
  timeStamp?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  chatroomID?: ModelIDInput | null,
  and?: Array< ModelCheckinFilterInput | null > | null,
  or?: Array< ModelCheckinFilterInput | null > | null,
  not?: ModelCheckinFilterInput | null,
};

export type ModelChallengeUserFilterInput = {
  id?: ModelIDInput | null,
  challengeId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelChallengeUserFilterInput | null > | null,
  or?: Array< ModelChallengeUserFilterInput | null > | null,
  not?: ModelChallengeUserFilterInput | null,
};

export type ModelUserChatRoomFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  chatRoomId?: ModelIDInput | null,
  and?: Array< ModelUserChatRoomFilterInput | null > | null,
  or?: Array< ModelUserChatRoomFilterInput | null > | null,
  not?: ModelUserChatRoomFilterInput | null,
};

export type ModelSubscriptionChallengeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  started?: ModelSubscriptionStringInput | null,
  userCount?: ModelSubscriptionIntInput | null,
  finished?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionChallengeFilterInput | null > | null,
  or?: Array< ModelSubscriptionChallengeFilterInput | null > | null,
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

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionChallengeTypeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  active?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionChallengeTypeFilterInput | null > | null,
  or?: Array< ModelSubscriptionChallengeTypeFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  biography?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  notifications?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  text?: ModelSubscriptionStringInput | null,
  chatroomID?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
};

export type ModelSubscriptionChatRoomFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionChatRoomFilterInput | null > | null,
  or?: Array< ModelSubscriptionChatRoomFilterInput | null > | null,
};

export type ModelSubscriptionCheckinFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  timeStamp?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  chatroomID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCheckinFilterInput | null > | null,
  or?: Array< ModelSubscriptionCheckinFilterInput | null > | null,
};

export type ModelSubscriptionChallengeUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  challengeId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionChallengeUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionChallengeUserFilterInput | null > | null,
};

export type ModelSubscriptionUserChatRoomFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  chatRoomId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserChatRoomFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserChatRoomFilterInput | null > | null,
};

export type CreateChallengeMutationVariables = {
  input: CreateChallengeInput,
  condition?: ModelChallengeConditionInput | null,
};

export type CreateChallengeMutation = {
  createChallenge?:  {
    __typename: "Challenge",
    id: string,
    ChallengeType:  {
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
    },
    Users?:  {
      __typename: "ModelChallengeUserConnection",
      items:  Array< {
        __typename: "ChallengeUser",
        id: string,
        challengeId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    started?: string | null,
    ChatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      chatRoomLastMessageId?: string | null,
    } | null,
    userCount?: number | null,
    finished?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    challengeChallengeTypeId: string,
    challengeChatRoomId?: string | null,
  } | null,
};

export type UpdateChallengeMutationVariables = {
  input: UpdateChallengeInput,
  condition?: ModelChallengeConditionInput | null,
};

export type UpdateChallengeMutation = {
  updateChallenge?:  {
    __typename: "Challenge",
    id: string,
    ChallengeType:  {
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
    },
    Users?:  {
      __typename: "ModelChallengeUserConnection",
      items:  Array< {
        __typename: "ChallengeUser",
        id: string,
        challengeId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    started?: string | null,
    ChatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      chatRoomLastMessageId?: string | null,
    } | null,
    userCount?: number | null,
    finished?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    challengeChallengeTypeId: string,
    challengeChatRoomId?: string | null,
  } | null,
};

export type DeleteChallengeMutationVariables = {
  input: DeleteChallengeInput,
  condition?: ModelChallengeConditionInput | null,
};

export type DeleteChallengeMutation = {
  deleteChallenge?:  {
    __typename: "Challenge",
    id: string,
    ChallengeType:  {
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
    },
    Users?:  {
      __typename: "ModelChallengeUserConnection",
      items:  Array< {
        __typename: "ChallengeUser",
        id: string,
        challengeId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    started?: string | null,
    ChatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      chatRoomLastMessageId?: string | null,
    } | null,
    userCount?: number | null,
    finished?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    challengeChallengeTypeId: string,
    challengeChatRoomId?: string | null,
  } | null,
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

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    image?: string | null,
    biography?: string | null,
    email?: string | null,
    notifications?: boolean | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ChatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Checkins?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    challenges?:  {
      __typename: "ModelChallengeUserConnection",
      items:  Array< {
        __typename: "ChallengeUser",
        id: string,
        challengeId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    image?: string | null,
    biography?: string | null,
    email?: string | null,
    notifications?: boolean | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ChatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Checkins?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    challenges?:  {
      __typename: "ModelChallengeUserConnection",
      items:  Array< {
        __typename: "ChallengeUser",
        id: string,
        challengeId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    image?: string | null,
    biography?: string | null,
    email?: string | null,
    notifications?: boolean | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ChatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Checkins?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    challenges?:  {
      __typename: "ModelChallengeUserConnection",
      items:  Array< {
        __typename: "ChallengeUser",
        id: string,
        challengeId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    text?: string | null,
    chatroomID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    text?: string | null,
    chatroomID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    text?: string | null,
    chatroomID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateChatRoomMutationVariables = {
  input: CreateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type CreateChatRoomMutation = {
  createChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Checkins?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      text?: string | null,
      chatroomID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type UpdateChatRoomMutationVariables = {
  input: UpdateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomMutation = {
  updateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Checkins?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      text?: string | null,
      chatroomID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type DeleteChatRoomMutationVariables = {
  input: DeleteChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type DeleteChatRoomMutation = {
  deleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Checkins?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      text?: string | null,
      chatroomID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type CreateCheckinMutationVariables = {
  input: CreateCheckinInput,
  condition?: ModelCheckinConditionInput | null,
};

export type CreateCheckinMutation = {
  createCheckin?:  {
    __typename: "Checkin",
    id: string,
    timeStamp?: string | null,
    userID: string,
    chatroomID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCheckinMutationVariables = {
  input: UpdateCheckinInput,
  condition?: ModelCheckinConditionInput | null,
};

export type UpdateCheckinMutation = {
  updateCheckin?:  {
    __typename: "Checkin",
    id: string,
    timeStamp?: string | null,
    userID: string,
    chatroomID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCheckinMutationVariables = {
  input: DeleteCheckinInput,
  condition?: ModelCheckinConditionInput | null,
};

export type DeleteCheckinMutation = {
  deleteCheckin?:  {
    __typename: "Checkin",
    id: string,
    timeStamp?: string | null,
    userID: string,
    chatroomID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateChallengeUserMutationVariables = {
  input: CreateChallengeUserInput,
  condition?: ModelChallengeUserConditionInput | null,
};

export type CreateChallengeUserMutation = {
  createChallengeUser?:  {
    __typename: "ChallengeUser",
    id: string,
    challengeId: string,
    userId: string,
    challenge:  {
      __typename: "Challenge",
      id: string,
      ChallengeType:  {
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
      },
      Users?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      started?: string | null,
      ChatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        chatRoomLastMessageId?: string | null,
      } | null,
      userCount?: number | null,
      finished?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      challengeChallengeTypeId: string,
      challengeChatRoomId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      image?: string | null,
      biography?: string | null,
      email?: string | null,
      notifications?: boolean | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateChallengeUserMutationVariables = {
  input: UpdateChallengeUserInput,
  condition?: ModelChallengeUserConditionInput | null,
};

export type UpdateChallengeUserMutation = {
  updateChallengeUser?:  {
    __typename: "ChallengeUser",
    id: string,
    challengeId: string,
    userId: string,
    challenge:  {
      __typename: "Challenge",
      id: string,
      ChallengeType:  {
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
      },
      Users?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      started?: string | null,
      ChatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        chatRoomLastMessageId?: string | null,
      } | null,
      userCount?: number | null,
      finished?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      challengeChallengeTypeId: string,
      challengeChatRoomId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      image?: string | null,
      biography?: string | null,
      email?: string | null,
      notifications?: boolean | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteChallengeUserMutationVariables = {
  input: DeleteChallengeUserInput,
  condition?: ModelChallengeUserConditionInput | null,
};

export type DeleteChallengeUserMutation = {
  deleteChallengeUser?:  {
    __typename: "ChallengeUser",
    id: string,
    challengeId: string,
    userId: string,
    challenge:  {
      __typename: "Challenge",
      id: string,
      ChallengeType:  {
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
      },
      Users?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      started?: string | null,
      ChatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        chatRoomLastMessageId?: string | null,
      } | null,
      userCount?: number | null,
      finished?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      challengeChallengeTypeId: string,
      challengeChatRoomId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      image?: string | null,
      biography?: string | null,
      email?: string | null,
      notifications?: boolean | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserChatRoomMutationVariables = {
  input: CreateUserChatRoomInput,
  condition?: ModelUserChatRoomConditionInput | null,
};

export type CreateUserChatRoomMutation = {
  createUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    userId: string,
    chatRoomId: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      image?: string | null,
      biography?: string | null,
      email?: string | null,
      notifications?: boolean | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      chatRoomLastMessageId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserChatRoomMutationVariables = {
  input: UpdateUserChatRoomInput,
  condition?: ModelUserChatRoomConditionInput | null,
};

export type UpdateUserChatRoomMutation = {
  updateUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    userId: string,
    chatRoomId: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      image?: string | null,
      biography?: string | null,
      email?: string | null,
      notifications?: boolean | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      chatRoomLastMessageId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserChatRoomMutationVariables = {
  input: DeleteUserChatRoomInput,
  condition?: ModelUserChatRoomConditionInput | null,
};

export type DeleteUserChatRoomMutation = {
  deleteUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    userId: string,
    chatRoomId: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      image?: string | null,
      biography?: string | null,
      email?: string | null,
      notifications?: boolean | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      chatRoomLastMessageId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetChallengeQueryVariables = {
  id: string,
};

export type GetChallengeQuery = {
  getChallenge?:  {
    __typename: "Challenge",
    id: string,
    ChallengeType:  {
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
    },
    Users?:  {
      __typename: "ModelChallengeUserConnection",
      items:  Array< {
        __typename: "ChallengeUser",
        id: string,
        challengeId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    started?: string | null,
    ChatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      chatRoomLastMessageId?: string | null,
    } | null,
    userCount?: number | null,
    finished?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    challengeChallengeTypeId: string,
    challengeChatRoomId?: string | null,
  } | null,
};

export type ListChallengesQueryVariables = {
  filter?: ModelChallengeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChallengesQuery = {
  listChallenges?:  {
    __typename: "ModelChallengeConnection",
    items:  Array< {
      __typename: "Challenge",
      id: string,
      ChallengeType:  {
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
      },
      Users?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      started?: string | null,
      ChatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        chatRoomLastMessageId?: string | null,
      } | null,
      userCount?: number | null,
      finished?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      challengeChallengeTypeId: string,
      challengeChatRoomId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncChallengesQueryVariables = {
  filter?: ModelChallengeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncChallengesQuery = {
  syncChallenges?:  {
    __typename: "ModelChallengeConnection",
    items:  Array< {
      __typename: "Challenge",
      id: string,
      ChallengeType:  {
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
      },
      Users?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      started?: string | null,
      ChatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        chatRoomLastMessageId?: string | null,
      } | null,
      userCount?: number | null,
      finished?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      challengeChallengeTypeId: string,
      challengeChatRoomId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    image?: string | null,
    biography?: string | null,
    email?: string | null,
    notifications?: boolean | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ChatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Checkins?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    challenges?:  {
      __typename: "ModelChallengeUserConnection",
      items:  Array< {
        __typename: "ChallengeUser",
        id: string,
        challengeId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      image?: string | null,
      biography?: string | null,
      email?: string | null,
      notifications?: boolean | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
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

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      image?: string | null,
      biography?: string | null,
      email?: string | null,
      notifications?: boolean | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
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

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    text?: string | null,
    chatroomID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      text?: string | null,
      chatroomID: string,
      userID: string,
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

export type SyncMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMessagesQuery = {
  syncMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      text?: string | null,
      chatroomID: string,
      userID: string,
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

export type MessagesByChatroomIDQueryVariables = {
  chatroomID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByChatroomIDQuery = {
  messagesByChatroomID?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      text?: string | null,
      chatroomID: string,
      userID: string,
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

export type MessagesByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByUserIDQuery = {
  messagesByUserID?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      text?: string | null,
      chatroomID: string,
      userID: string,
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

export type GetChatRoomQueryVariables = {
  id: string,
};

export type GetChatRoomQuery = {
  getChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Checkins?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      text?: string | null,
      chatroomID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type ListChatRoomsQueryVariables = {
  filter?: ModelChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomsQuery = {
  listChatRooms?:  {
    __typename: "ModelChatRoomConnection",
    items:  Array< {
      __typename: "ChatRoom",
      id: string,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      chatRoomLastMessageId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncChatRoomsQueryVariables = {
  filter?: ModelChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncChatRoomsQuery = {
  syncChatRooms?:  {
    __typename: "ModelChatRoomConnection",
    items:  Array< {
      __typename: "ChatRoom",
      id: string,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      chatRoomLastMessageId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCheckinQueryVariables = {
  id: string,
};

export type GetCheckinQuery = {
  getCheckin?:  {
    __typename: "Checkin",
    id: string,
    timeStamp?: string | null,
    userID: string,
    chatroomID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCheckinsQueryVariables = {
  filter?: ModelCheckinFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCheckinsQuery = {
  listCheckins?:  {
    __typename: "ModelCheckinConnection",
    items:  Array< {
      __typename: "Checkin",
      id: string,
      timeStamp?: string | null,
      userID: string,
      chatroomID: string,
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

export type SyncCheckinsQueryVariables = {
  filter?: ModelCheckinFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCheckinsQuery = {
  syncCheckins?:  {
    __typename: "ModelCheckinConnection",
    items:  Array< {
      __typename: "Checkin",
      id: string,
      timeStamp?: string | null,
      userID: string,
      chatroomID: string,
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

export type CheckinsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCheckinFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckinsByUserIDQuery = {
  checkinsByUserID?:  {
    __typename: "ModelCheckinConnection",
    items:  Array< {
      __typename: "Checkin",
      id: string,
      timeStamp?: string | null,
      userID: string,
      chatroomID: string,
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

export type CheckinsByChatroomIDQueryVariables = {
  chatroomID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCheckinFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CheckinsByChatroomIDQuery = {
  checkinsByChatroomID?:  {
    __typename: "ModelCheckinConnection",
    items:  Array< {
      __typename: "Checkin",
      id: string,
      timeStamp?: string | null,
      userID: string,
      chatroomID: string,
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

export type GetChallengeUserQueryVariables = {
  id: string,
};

export type GetChallengeUserQuery = {
  getChallengeUser?:  {
    __typename: "ChallengeUser",
    id: string,
    challengeId: string,
    userId: string,
    challenge:  {
      __typename: "Challenge",
      id: string,
      ChallengeType:  {
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
      },
      Users?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      started?: string | null,
      ChatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        chatRoomLastMessageId?: string | null,
      } | null,
      userCount?: number | null,
      finished?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      challengeChallengeTypeId: string,
      challengeChatRoomId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      image?: string | null,
      biography?: string | null,
      email?: string | null,
      notifications?: boolean | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListChallengeUsersQueryVariables = {
  filter?: ModelChallengeUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChallengeUsersQuery = {
  listChallengeUsers?:  {
    __typename: "ModelChallengeUserConnection",
    items:  Array< {
      __typename: "ChallengeUser",
      id: string,
      challengeId: string,
      userId: string,
      challenge:  {
        __typename: "Challenge",
        id: string,
        started?: string | null,
        userCount?: number | null,
        finished?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        challengeChallengeTypeId: string,
        challengeChatRoomId?: string | null,
      },
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        image?: string | null,
        biography?: string | null,
        email?: string | null,
        notifications?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
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

export type SyncChallengeUsersQueryVariables = {
  filter?: ModelChallengeUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncChallengeUsersQuery = {
  syncChallengeUsers?:  {
    __typename: "ModelChallengeUserConnection",
    items:  Array< {
      __typename: "ChallengeUser",
      id: string,
      challengeId: string,
      userId: string,
      challenge:  {
        __typename: "Challenge",
        id: string,
        started?: string | null,
        userCount?: number | null,
        finished?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        challengeChallengeTypeId: string,
        challengeChatRoomId?: string | null,
      },
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        image?: string | null,
        biography?: string | null,
        email?: string | null,
        notifications?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
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

export type ChallengeUsersByChallengeIdQueryVariables = {
  challengeId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChallengeUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ChallengeUsersByChallengeIdQuery = {
  challengeUsersByChallengeId?:  {
    __typename: "ModelChallengeUserConnection",
    items:  Array< {
      __typename: "ChallengeUser",
      id: string,
      challengeId: string,
      userId: string,
      challenge:  {
        __typename: "Challenge",
        id: string,
        started?: string | null,
        userCount?: number | null,
        finished?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        challengeChallengeTypeId: string,
        challengeChatRoomId?: string | null,
      },
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        image?: string | null,
        biography?: string | null,
        email?: string | null,
        notifications?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
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

export type ChallengeUsersByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChallengeUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ChallengeUsersByUserIdQuery = {
  challengeUsersByUserId?:  {
    __typename: "ModelChallengeUserConnection",
    items:  Array< {
      __typename: "ChallengeUser",
      id: string,
      challengeId: string,
      userId: string,
      challenge:  {
        __typename: "Challenge",
        id: string,
        started?: string | null,
        userCount?: number | null,
        finished?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        challengeChallengeTypeId: string,
        challengeChatRoomId?: string | null,
      },
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        image?: string | null,
        biography?: string | null,
        email?: string | null,
        notifications?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
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

export type GetUserChatRoomQueryVariables = {
  id: string,
};

export type GetUserChatRoomQuery = {
  getUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    userId: string,
    chatRoomId: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      image?: string | null,
      biography?: string | null,
      email?: string | null,
      notifications?: boolean | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      chatRoomLastMessageId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUserChatRoomsQueryVariables = {
  filter?: ModelUserChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserChatRoomsQuery = {
  listUserChatRooms?:  {
    __typename: "ModelUserChatRoomConnection",
    items:  Array< {
      __typename: "UserChatRoom",
      id: string,
      userId: string,
      chatRoomId: string,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        image?: string | null,
        biography?: string | null,
        email?: string | null,
        notifications?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      chatRoom:  {
        __typename: "ChatRoom",
        id: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        chatRoomLastMessageId?: string | null,
      },
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

export type SyncUserChatRoomsQueryVariables = {
  filter?: ModelUserChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserChatRoomsQuery = {
  syncUserChatRooms?:  {
    __typename: "ModelUserChatRoomConnection",
    items:  Array< {
      __typename: "UserChatRoom",
      id: string,
      userId: string,
      chatRoomId: string,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        image?: string | null,
        biography?: string | null,
        email?: string | null,
        notifications?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      chatRoom:  {
        __typename: "ChatRoom",
        id: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        chatRoomLastMessageId?: string | null,
      },
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

export type UserChatRoomsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserChatRoomsByUserIdQuery = {
  userChatRoomsByUserId?:  {
    __typename: "ModelUserChatRoomConnection",
    items:  Array< {
      __typename: "UserChatRoom",
      id: string,
      userId: string,
      chatRoomId: string,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        image?: string | null,
        biography?: string | null,
        email?: string | null,
        notifications?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      chatRoom:  {
        __typename: "ChatRoom",
        id: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        chatRoomLastMessageId?: string | null,
      },
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

export type UserChatRoomsByChatRoomIdQueryVariables = {
  chatRoomId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserChatRoomsByChatRoomIdQuery = {
  userChatRoomsByChatRoomId?:  {
    __typename: "ModelUserChatRoomConnection",
    items:  Array< {
      __typename: "UserChatRoom",
      id: string,
      userId: string,
      chatRoomId: string,
      user:  {
        __typename: "User",
        id: string,
        name?: string | null,
        image?: string | null,
        biography?: string | null,
        email?: string | null,
        notifications?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      chatRoom:  {
        __typename: "ChatRoom",
        id: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        chatRoomLastMessageId?: string | null,
      },
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

export type OnCreateChallengeSubscriptionVariables = {
  filter?: ModelSubscriptionChallengeFilterInput | null,
};

export type OnCreateChallengeSubscription = {
  onCreateChallenge?:  {
    __typename: "Challenge",
    id: string,
    ChallengeType:  {
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
    },
    Users?:  {
      __typename: "ModelChallengeUserConnection",
      items:  Array< {
        __typename: "ChallengeUser",
        id: string,
        challengeId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    started?: string | null,
    ChatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      chatRoomLastMessageId?: string | null,
    } | null,
    userCount?: number | null,
    finished?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    challengeChallengeTypeId: string,
    challengeChatRoomId?: string | null,
  } | null,
};

export type OnUpdateChallengeSubscriptionVariables = {
  filter?: ModelSubscriptionChallengeFilterInput | null,
};

export type OnUpdateChallengeSubscription = {
  onUpdateChallenge?:  {
    __typename: "Challenge",
    id: string,
    ChallengeType:  {
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
    },
    Users?:  {
      __typename: "ModelChallengeUserConnection",
      items:  Array< {
        __typename: "ChallengeUser",
        id: string,
        challengeId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    started?: string | null,
    ChatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      chatRoomLastMessageId?: string | null,
    } | null,
    userCount?: number | null,
    finished?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    challengeChallengeTypeId: string,
    challengeChatRoomId?: string | null,
  } | null,
};

export type OnDeleteChallengeSubscriptionVariables = {
  filter?: ModelSubscriptionChallengeFilterInput | null,
};

export type OnDeleteChallengeSubscription = {
  onDeleteChallenge?:  {
    __typename: "Challenge",
    id: string,
    ChallengeType:  {
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
    },
    Users?:  {
      __typename: "ModelChallengeUserConnection",
      items:  Array< {
        __typename: "ChallengeUser",
        id: string,
        challengeId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    started?: string | null,
    ChatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      chatRoomLastMessageId?: string | null,
    } | null,
    userCount?: number | null,
    finished?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    challengeChallengeTypeId: string,
    challengeChatRoomId?: string | null,
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

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    image?: string | null,
    biography?: string | null,
    email?: string | null,
    notifications?: boolean | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ChatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Checkins?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    challenges?:  {
      __typename: "ModelChallengeUserConnection",
      items:  Array< {
        __typename: "ChallengeUser",
        id: string,
        challengeId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    image?: string | null,
    biography?: string | null,
    email?: string | null,
    notifications?: boolean | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ChatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Checkins?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    challenges?:  {
      __typename: "ModelChallengeUserConnection",
      items:  Array< {
        __typename: "ChallengeUser",
        id: string,
        challengeId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    image?: string | null,
    biography?: string | null,
    email?: string | null,
    notifications?: boolean | null,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ChatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Checkins?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    challenges?:  {
      __typename: "ModelChallengeUserConnection",
      items:  Array< {
        __typename: "ChallengeUser",
        id: string,
        challengeId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    text?: string | null,
    chatroomID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    text?: string | null,
    chatroomID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    text?: string | null,
    chatroomID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null,
};

export type OnCreateChatRoomSubscription = {
  onCreateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Checkins?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      text?: string | null,
      chatroomID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type OnUpdateChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null,
};

export type OnUpdateChatRoomSubscription = {
  onUpdateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Checkins?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      text?: string | null,
      chatroomID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type OnDeleteChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null,
};

export type OnDeleteChatRoomSubscription = {
  onDeleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    Messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Checkins?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      text?: string | null,
      chatroomID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type OnCreateCheckinSubscriptionVariables = {
  filter?: ModelSubscriptionCheckinFilterInput | null,
};

export type OnCreateCheckinSubscription = {
  onCreateCheckin?:  {
    __typename: "Checkin",
    id: string,
    timeStamp?: string | null,
    userID: string,
    chatroomID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCheckinSubscriptionVariables = {
  filter?: ModelSubscriptionCheckinFilterInput | null,
};

export type OnUpdateCheckinSubscription = {
  onUpdateCheckin?:  {
    __typename: "Checkin",
    id: string,
    timeStamp?: string | null,
    userID: string,
    chatroomID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCheckinSubscriptionVariables = {
  filter?: ModelSubscriptionCheckinFilterInput | null,
};

export type OnDeleteCheckinSubscription = {
  onDeleteCheckin?:  {
    __typename: "Checkin",
    id: string,
    timeStamp?: string | null,
    userID: string,
    chatroomID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateChallengeUserSubscriptionVariables = {
  filter?: ModelSubscriptionChallengeUserFilterInput | null,
};

export type OnCreateChallengeUserSubscription = {
  onCreateChallengeUser?:  {
    __typename: "ChallengeUser",
    id: string,
    challengeId: string,
    userId: string,
    challenge:  {
      __typename: "Challenge",
      id: string,
      ChallengeType:  {
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
      },
      Users?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      started?: string | null,
      ChatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        chatRoomLastMessageId?: string | null,
      } | null,
      userCount?: number | null,
      finished?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      challengeChallengeTypeId: string,
      challengeChatRoomId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      image?: string | null,
      biography?: string | null,
      email?: string | null,
      notifications?: boolean | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateChallengeUserSubscriptionVariables = {
  filter?: ModelSubscriptionChallengeUserFilterInput | null,
};

export type OnUpdateChallengeUserSubscription = {
  onUpdateChallengeUser?:  {
    __typename: "ChallengeUser",
    id: string,
    challengeId: string,
    userId: string,
    challenge:  {
      __typename: "Challenge",
      id: string,
      ChallengeType:  {
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
      },
      Users?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      started?: string | null,
      ChatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        chatRoomLastMessageId?: string | null,
      } | null,
      userCount?: number | null,
      finished?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      challengeChallengeTypeId: string,
      challengeChatRoomId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      image?: string | null,
      biography?: string | null,
      email?: string | null,
      notifications?: boolean | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteChallengeUserSubscriptionVariables = {
  filter?: ModelSubscriptionChallengeUserFilterInput | null,
};

export type OnDeleteChallengeUserSubscription = {
  onDeleteChallengeUser?:  {
    __typename: "ChallengeUser",
    id: string,
    challengeId: string,
    userId: string,
    challenge:  {
      __typename: "Challenge",
      id: string,
      ChallengeType:  {
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
      },
      Users?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      started?: string | null,
      ChatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        chatRoomLastMessageId?: string | null,
      } | null,
      userCount?: number | null,
      finished?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      challengeChallengeTypeId: string,
      challengeChatRoomId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      image?: string | null,
      biography?: string | null,
      email?: string | null,
      notifications?: boolean | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionUserChatRoomFilterInput | null,
};

export type OnCreateUserChatRoomSubscription = {
  onCreateUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    userId: string,
    chatRoomId: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      image?: string | null,
      biography?: string | null,
      email?: string | null,
      notifications?: boolean | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      chatRoomLastMessageId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionUserChatRoomFilterInput | null,
};

export type OnUpdateUserChatRoomSubscription = {
  onUpdateUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    userId: string,
    chatRoomId: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      image?: string | null,
      biography?: string | null,
      email?: string | null,
      notifications?: boolean | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      chatRoomLastMessageId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionUserChatRoomFilterInput | null,
};

export type OnDeleteUserChatRoomSubscription = {
  onDeleteUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    userId: string,
    chatRoomId: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      image?: string | null,
      biography?: string | null,
      email?: string | null,
      notifications?: boolean | null,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      Messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      chatRoomLastMessageId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
