/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateLeaderboardInput = {
  id?: string | null,
  numberOfCheckins: number,
  leaderboardUserId: string,
  leaderboardChallengeTypeId?: string | null,
};

export type ModelLeaderboardConditionInput = {
  numberOfCheckins?: ModelIntInput | null,
  and?: Array< ModelLeaderboardConditionInput | null > | null,
  or?: Array< ModelLeaderboardConditionInput | null > | null,
  not?: ModelLeaderboardConditionInput | null,
  leaderboardUserId?: ModelIDInput | null,
  leaderboardChallengeTypeId?: ModelIDInput | null,
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

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Leaderboard = {
  __typename: "Leaderboard",
  id: string,
  numberOfCheckins: number,
  User: User,
  ChallengeType?: ChallengeType | null,
  createdAt: string,
  updatedAt: string,
  leaderboardUserId: string,
  leaderboardChallengeTypeId?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  name?: string | null,
  image?: string | null,
  biography?: string | null,
  email?: string | null,
  notifications?: boolean | null,
  Messages?: ModelCheckinConnection | null,
  ChatRooms?: ModelUserChatRoomConnection | null,
  Checkins?: ModelCheckinConnection | null,
  challenges?: ModelChallengeUserConnection | null,
  validatedCheckIns?: ModelUserValidatedCheckInConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCheckinConnection = {
  __typename: "ModelCheckinConnection",
  items:  Array<Checkin | null >,
  nextToken?: string | null,
};

export type Checkin = {
  __typename: "Checkin",
  id: string,
  timeStamp?: string | null,
  userID: string,
  chatroomID: string,
  validationCount?: number | null,
  isValidated?: boolean | null,
  validatedBy?: ModelUserValidatedCheckInConnection | null,
  ChallengeType?: ChallengeType | null,
  createdAt: string,
  updatedAt: string,
  checkinChallengeTypeId?: string | null,
};

export type ModelUserValidatedCheckInConnection = {
  __typename: "ModelUserValidatedCheckInConnection",
  items:  Array<UserValidatedCheckIn | null >,
  nextToken?: string | null,
};

export type UserValidatedCheckIn = {
  __typename: "UserValidatedCheckIn",
  id: string,
  userId: string,
  checkinId: string,
  user: User,
  checkin: Checkin,
  createdAt: string,
  updatedAt: string,
};

export type ChallengeType = {
  __typename: "ChallengeType",
  id: string,
  name: string,
  description: string,
  active: boolean,
  createdAt: string,
  updatedAt: string,
};

export type ModelUserChatRoomConnection = {
  __typename: "ModelUserChatRoomConnection",
  items:  Array<UserChatRoom | null >,
  nextToken?: string | null,
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
};

export type ChatRoom = {
  __typename: "ChatRoom",
  id: string,
  name: string,
  Messages?: ModelCheckinConnection | null,
  users?: ModelUserChatRoomConnection | null,
  Checkins?: ModelCheckinConnection | null,
  LastMessage?: Message | null,
  createdAt: string,
  updatedAt: string,
  chatRoomLastMessageId?: string | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  text?: string | null,
  chatroomID: string,
  userID: string,
  messageType?: MessageEnum | null,
  getCheckin?: Checkin | null,
  createdAt: string,
  updatedAt: string,
  messageGetCheckinId?: string | null,
};

export enum MessageEnum {
  TEXT = "TEXT",
  CHECKIN = "CHECKIN",
  VALIDATION = "VALIDATION",
}


export type ModelChallengeUserConnection = {
  __typename: "ModelChallengeUserConnection",
  items:  Array<ChallengeUser | null >,
  nextToken?: string | null,
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
};

export type Challenge = {
  __typename: "Challenge",
  id: string,
  ChallengeType: ChallengeType,
  Users?: ModelChallengeUserConnection | null,
  status?: ChallengeStatusEnum | null,
  started?: string | null,
  ChatRoom?: ChatRoom | null,
  userCount?: number | null,
  createdAt: string,
  updatedAt: string,
  challengeChallengeTypeId: string,
  challengeChatRoomId?: string | null,
};

export enum ChallengeStatusEnum {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  COMPLETED = "COMPLETED",
}


export type UpdateLeaderboardInput = {
  id: string,
  numberOfCheckins?: number | null,
  leaderboardUserId?: string | null,
  leaderboardChallengeTypeId?: string | null,
};

export type DeleteLeaderboardInput = {
  id: string,
};

export type CreateChallengeInput = {
  id?: string | null,
  status?: ChallengeStatusEnum | null,
  started?: string | null,
  userCount?: number | null,
  challengeChallengeTypeId: string,
  challengeChatRoomId?: string | null,
};

export type ModelChallengeConditionInput = {
  status?: ModelChallengeStatusEnumInput | null,
  started?: ModelStringInput | null,
  userCount?: ModelIntInput | null,
  and?: Array< ModelChallengeConditionInput | null > | null,
  or?: Array< ModelChallengeConditionInput | null > | null,
  not?: ModelChallengeConditionInput | null,
  challengeChallengeTypeId?: ModelIDInput | null,
  challengeChatRoomId?: ModelIDInput | null,
};

export type ModelChallengeStatusEnumInput = {
  eq?: ChallengeStatusEnum | null,
  ne?: ChallengeStatusEnum | null,
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

export type UpdateChallengeInput = {
  id: string,
  status?: ChallengeStatusEnum | null,
  started?: string | null,
  userCount?: number | null,
  challengeChallengeTypeId?: string | null,
  challengeChatRoomId?: string | null,
};

export type DeleteChallengeInput = {
  id: string,
};

export type CreateChallengeTypeInput = {
  id?: string | null,
  name: string,
  description: string,
  active: boolean,
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
};

export type DeleteChallengeTypeInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  name?: string | null,
  image?: string | null,
  biography?: string | null,
  email?: string | null,
  notifications?: boolean | null,
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
};

export type DeleteUserInput = {
  id: string,
};

export type CreateMessageInput = {
  id?: string | null,
  text?: string | null,
  chatroomID: string,
  userID: string,
  messageType?: MessageEnum | null,
  messageGetCheckinId?: string | null,
};

export type ModelMessageConditionInput = {
  text?: ModelStringInput | null,
  chatroomID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  messageType?: ModelMessageEnumInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
  messageGetCheckinId?: ModelIDInput | null,
};

export type ModelMessageEnumInput = {
  eq?: MessageEnum | null,
  ne?: MessageEnum | null,
};

export type UpdateMessageInput = {
  id: string,
  text?: string | null,
  chatroomID?: string | null,
  userID?: string | null,
  messageType?: MessageEnum | null,
  messageGetCheckinId?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type CreateChatRoomInput = {
  id?: string | null,
  name: string,
  chatRoomLastMessageId?: string | null,
};

export type ModelChatRoomConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelChatRoomConditionInput | null > | null,
  or?: Array< ModelChatRoomConditionInput | null > | null,
  not?: ModelChatRoomConditionInput | null,
  chatRoomLastMessageId?: ModelIDInput | null,
};

export type UpdateChatRoomInput = {
  id: string,
  name?: string | null,
  chatRoomLastMessageId?: string | null,
};

export type DeleteChatRoomInput = {
  id: string,
};

export type CreateCheckinInput = {
  id?: string | null,
  timeStamp?: string | null,
  userID: string,
  chatroomID: string,
  validationCount?: number | null,
  isValidated?: boolean | null,
  checkinChallengeTypeId?: string | null,
};

export type ModelCheckinConditionInput = {
  timeStamp?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  chatroomID?: ModelIDInput | null,
  validationCount?: ModelIntInput | null,
  isValidated?: ModelBooleanInput | null,
  and?: Array< ModelCheckinConditionInput | null > | null,
  or?: Array< ModelCheckinConditionInput | null > | null,
  not?: ModelCheckinConditionInput | null,
  checkinChallengeTypeId?: ModelIDInput | null,
};

export type UpdateCheckinInput = {
  id: string,
  timeStamp?: string | null,
  userID?: string | null,
  chatroomID?: string | null,
  validationCount?: number | null,
  isValidated?: boolean | null,
  checkinChallengeTypeId?: string | null,
};

export type DeleteCheckinInput = {
  id: string,
};

export type CreateChallengeUserInput = {
  id?: string | null,
  challengeId: string,
  userId: string,
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
};

export type DeleteChallengeUserInput = {
  id: string,
};

export type CreateUserChatRoomInput = {
  id?: string | null,
  userId: string,
  chatRoomId: string,
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
};

export type DeleteUserChatRoomInput = {
  id: string,
};

export type CreateUserValidatedCheckInInput = {
  id?: string | null,
  userId: string,
  checkinId: string,
};

export type ModelUserValidatedCheckInConditionInput = {
  userId?: ModelIDInput | null,
  checkinId?: ModelIDInput | null,
  and?: Array< ModelUserValidatedCheckInConditionInput | null > | null,
  or?: Array< ModelUserValidatedCheckInConditionInput | null > | null,
  not?: ModelUserValidatedCheckInConditionInput | null,
};

export type UpdateUserValidatedCheckInInput = {
  id: string,
  userId?: string | null,
  checkinId?: string | null,
};

export type DeleteUserValidatedCheckInInput = {
  id: string,
};

export type ModelLeaderboardFilterInput = {
  id?: ModelIDInput | null,
  numberOfCheckins?: ModelIntInput | null,
  and?: Array< ModelLeaderboardFilterInput | null > | null,
  or?: Array< ModelLeaderboardFilterInput | null > | null,
  not?: ModelLeaderboardFilterInput | null,
  leaderboardUserId?: ModelIDInput | null,
  leaderboardChallengeTypeId?: ModelIDInput | null,
};

export type ModelLeaderboardConnection = {
  __typename: "ModelLeaderboardConnection",
  items:  Array<Leaderboard | null >,
  nextToken?: string | null,
};

export type ModelChallengeFilterInput = {
  id?: ModelIDInput | null,
  status?: ModelChallengeStatusEnumInput | null,
  started?: ModelStringInput | null,
  userCount?: ModelIntInput | null,
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
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


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
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  chatroomID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  messageType?: ModelMessageEnumInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
  messageGetCheckinId?: ModelIDInput | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type ModelChatRoomFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelChatRoomFilterInput | null > | null,
  or?: Array< ModelChatRoomFilterInput | null > | null,
  not?: ModelChatRoomFilterInput | null,
  chatRoomLastMessageId?: ModelIDInput | null,
};

export type ModelChatRoomConnection = {
  __typename: "ModelChatRoomConnection",
  items:  Array<ChatRoom | null >,
  nextToken?: string | null,
};

export type ModelCheckinFilterInput = {
  id?: ModelIDInput | null,
  timeStamp?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  chatroomID?: ModelIDInput | null,
  validationCount?: ModelIntInput | null,
  isValidated?: ModelBooleanInput | null,
  and?: Array< ModelCheckinFilterInput | null > | null,
  or?: Array< ModelCheckinFilterInput | null > | null,
  not?: ModelCheckinFilterInput | null,
  checkinChallengeTypeId?: ModelIDInput | null,
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

export type ModelUserValidatedCheckInFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  checkinId?: ModelIDInput | null,
  and?: Array< ModelUserValidatedCheckInFilterInput | null > | null,
  or?: Array< ModelUserValidatedCheckInFilterInput | null > | null,
  not?: ModelUserValidatedCheckInFilterInput | null,
};

export type ModelSubscriptionLeaderboardFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  numberOfCheckins?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionLeaderboardFilterInput | null > | null,
  or?: Array< ModelSubscriptionLeaderboardFilterInput | null > | null,
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

export type ModelSubscriptionChallengeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  started?: ModelSubscriptionStringInput | null,
  userCount?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionChallengeFilterInput | null > | null,
  or?: Array< ModelSubscriptionChallengeFilterInput | null > | null,
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
  messageType?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
};

export type ModelSubscriptionChatRoomFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionChatRoomFilterInput | null > | null,
  or?: Array< ModelSubscriptionChatRoomFilterInput | null > | null,
};

export type ModelSubscriptionCheckinFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  timeStamp?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  chatroomID?: ModelSubscriptionIDInput | null,
  validationCount?: ModelSubscriptionIntInput | null,
  isValidated?: ModelSubscriptionBooleanInput | null,
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

export type ModelSubscriptionUserValidatedCheckInFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  checkinId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserValidatedCheckInFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserValidatedCheckInFilterInput | null > | null,
};

export type CreateLeaderboardMutationVariables = {
  input: CreateLeaderboardInput,
  condition?: ModelLeaderboardConditionInput | null,
};

export type CreateLeaderboardMutation = {
  createLeaderboard?:  {
    __typename: "Leaderboard",
    id: string,
    numberOfCheckins: number,
    User:  {
      __typename: "User",
      id: string,
      name?: string | null,
      image?: string | null,
      biography?: string | null,
      email?: string | null,
      notifications?: boolean | null,
      Messages?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      validatedCheckIns?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    ChallengeType?:  {
      __typename: "ChallengeType",
      id: string,
      name: string,
      description: string,
      active: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    leaderboardUserId: string,
    leaderboardChallengeTypeId?: string | null,
  } | null,
};

export type UpdateLeaderboardMutationVariables = {
  input: UpdateLeaderboardInput,
  condition?: ModelLeaderboardConditionInput | null,
};

export type UpdateLeaderboardMutation = {
  updateLeaderboard?:  {
    __typename: "Leaderboard",
    id: string,
    numberOfCheckins: number,
    User:  {
      __typename: "User",
      id: string,
      name?: string | null,
      image?: string | null,
      biography?: string | null,
      email?: string | null,
      notifications?: boolean | null,
      Messages?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      validatedCheckIns?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    ChallengeType?:  {
      __typename: "ChallengeType",
      id: string,
      name: string,
      description: string,
      active: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    leaderboardUserId: string,
    leaderboardChallengeTypeId?: string | null,
  } | null,
};

export type DeleteLeaderboardMutationVariables = {
  input: DeleteLeaderboardInput,
  condition?: ModelLeaderboardConditionInput | null,
};

export type DeleteLeaderboardMutation = {
  deleteLeaderboard?:  {
    __typename: "Leaderboard",
    id: string,
    numberOfCheckins: number,
    User:  {
      __typename: "User",
      id: string,
      name?: string | null,
      image?: string | null,
      biography?: string | null,
      email?: string | null,
      notifications?: boolean | null,
      Messages?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      validatedCheckIns?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    ChallengeType?:  {
      __typename: "ChallengeType",
      id: string,
      name: string,
      description: string,
      active: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    leaderboardUserId: string,
    leaderboardChallengeTypeId?: string | null,
  } | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: ChallengeStatusEnum | null,
    started?: string | null,
    ChatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      Messages?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        messageType?: MessageEnum | null,
        createdAt: string,
        updatedAt: string,
        messageGetCheckinId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    } | null,
    userCount?: number | null,
    createdAt: string,
    updatedAt: string,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: ChallengeStatusEnum | null,
    started?: string | null,
    ChatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      Messages?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        messageType?: MessageEnum | null,
        createdAt: string,
        updatedAt: string,
        messageGetCheckinId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    } | null,
    userCount?: number | null,
    createdAt: string,
    updatedAt: string,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: ChallengeStatusEnum | null,
    started?: string | null,
    ChatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      Messages?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        messageType?: MessageEnum | null,
        createdAt: string,
        updatedAt: string,
        messageGetCheckinId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    } | null,
    userCount?: number | null,
    createdAt: string,
    updatedAt: string,
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
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null >,
      nextToken?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    Checkins?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null >,
      nextToken?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    validatedCheckIns?:  {
      __typename: "ModelUserValidatedCheckInConnection",
      items:  Array< {
        __typename: "UserValidatedCheckIn",
        id: string,
        userId: string,
        checkinId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null >,
      nextToken?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    Checkins?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null >,
      nextToken?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    validatedCheckIns?:  {
      __typename: "ModelUserValidatedCheckInConnection",
      items:  Array< {
        __typename: "UserValidatedCheckIn",
        id: string,
        userId: string,
        checkinId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null >,
      nextToken?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    Checkins?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null >,
      nextToken?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    validatedCheckIns?:  {
      __typename: "ModelUserValidatedCheckInConnection",
      items:  Array< {
        __typename: "UserValidatedCheckIn",
        id: string,
        userId: string,
        checkinId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    messageType?: MessageEnum | null,
    getCheckin?:  {
      __typename: "Checkin",
      id: string,
      timeStamp?: string | null,
      userID: string,
      chatroomID: string,
      validationCount?: number | null,
      isValidated?: boolean | null,
      validatedBy?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      ChallengeType?:  {
        __typename: "ChallengeType",
        id: string,
        name: string,
        description: string,
        active: boolean,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      checkinChallengeTypeId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    messageGetCheckinId?: string | null,
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
    messageType?: MessageEnum | null,
    getCheckin?:  {
      __typename: "Checkin",
      id: string,
      timeStamp?: string | null,
      userID: string,
      chatroomID: string,
      validationCount?: number | null,
      isValidated?: boolean | null,
      validatedBy?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      ChallengeType?:  {
        __typename: "ChallengeType",
        id: string,
        name: string,
        description: string,
        active: boolean,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      checkinChallengeTypeId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    messageGetCheckinId?: string | null,
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
    messageType?: MessageEnum | null,
    getCheckin?:  {
      __typename: "Checkin",
      id: string,
      timeStamp?: string | null,
      userID: string,
      chatroomID: string,
      validationCount?: number | null,
      isValidated?: boolean | null,
      validatedBy?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      ChallengeType?:  {
        __typename: "ChallengeType",
        id: string,
        name: string,
        description: string,
        active: boolean,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      checkinChallengeTypeId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    messageGetCheckinId?: string | null,
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
    name: string,
    Messages?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null >,
      nextToken?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    Checkins?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      text?: string | null,
      chatroomID: string,
      userID: string,
      messageType?: MessageEnum | null,
      getCheckin?:  {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      messageGetCheckinId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    name: string,
    Messages?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null >,
      nextToken?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    Checkins?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      text?: string | null,
      chatroomID: string,
      userID: string,
      messageType?: MessageEnum | null,
      getCheckin?:  {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      messageGetCheckinId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    name: string,
    Messages?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null >,
      nextToken?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    Checkins?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      text?: string | null,
      chatroomID: string,
      userID: string,
      messageType?: MessageEnum | null,
      getCheckin?:  {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      messageGetCheckinId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    validationCount?: number | null,
    isValidated?: boolean | null,
    validatedBy?:  {
      __typename: "ModelUserValidatedCheckInConnection",
      items:  Array< {
        __typename: "UserValidatedCheckIn",
        id: string,
        userId: string,
        checkinId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    ChallengeType?:  {
      __typename: "ChallengeType",
      id: string,
      name: string,
      description: string,
      active: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    checkinChallengeTypeId?: string | null,
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
    validationCount?: number | null,
    isValidated?: boolean | null,
    validatedBy?:  {
      __typename: "ModelUserValidatedCheckInConnection",
      items:  Array< {
        __typename: "UserValidatedCheckIn",
        id: string,
        userId: string,
        checkinId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    ChallengeType?:  {
      __typename: "ChallengeType",
      id: string,
      name: string,
      description: string,
      active: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    checkinChallengeTypeId?: string | null,
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
    validationCount?: number | null,
    isValidated?: boolean | null,
    validatedBy?:  {
      __typename: "ModelUserValidatedCheckInConnection",
      items:  Array< {
        __typename: "UserValidatedCheckIn",
        id: string,
        userId: string,
        checkinId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    ChallengeType?:  {
      __typename: "ChallengeType",
      id: string,
      name: string,
      description: string,
      active: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    checkinChallengeTypeId?: string | null,
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
      },
      Users?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      status?: ChallengeStatusEnum | null,
      started?: string | null,
      ChatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        chatRoomLastMessageId?: string | null,
      } | null,
      userCount?: number | null,
      createdAt: string,
      updatedAt: string,
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
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      validatedCheckIns?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
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
      },
      Users?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      status?: ChallengeStatusEnum | null,
      started?: string | null,
      ChatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        chatRoomLastMessageId?: string | null,
      } | null,
      userCount?: number | null,
      createdAt: string,
      updatedAt: string,
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
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      validatedCheckIns?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
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
      },
      Users?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      status?: ChallengeStatusEnum | null,
      started?: string | null,
      ChatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        chatRoomLastMessageId?: string | null,
      } | null,
      userCount?: number | null,
      createdAt: string,
      updatedAt: string,
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
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      validatedCheckIns?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
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
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      validatedCheckIns?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      Messages?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        messageType?: MessageEnum | null,
        createdAt: string,
        updatedAt: string,
        messageGetCheckinId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
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
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      validatedCheckIns?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      Messages?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        messageType?: MessageEnum | null,
        createdAt: string,
        updatedAt: string,
        messageGetCheckinId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
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
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      validatedCheckIns?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      Messages?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        messageType?: MessageEnum | null,
        createdAt: string,
        updatedAt: string,
        messageGetCheckinId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserValidatedCheckInMutationVariables = {
  input: CreateUserValidatedCheckInInput,
  condition?: ModelUserValidatedCheckInConditionInput | null,
};

export type CreateUserValidatedCheckInMutation = {
  createUserValidatedCheckIn?:  {
    __typename: "UserValidatedCheckIn",
    id: string,
    userId: string,
    checkinId: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      image?: string | null,
      biography?: string | null,
      email?: string | null,
      notifications?: boolean | null,
      Messages?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      validatedCheckIns?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    checkin:  {
      __typename: "Checkin",
      id: string,
      timeStamp?: string | null,
      userID: string,
      chatroomID: string,
      validationCount?: number | null,
      isValidated?: boolean | null,
      validatedBy?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      ChallengeType?:  {
        __typename: "ChallengeType",
        id: string,
        name: string,
        description: string,
        active: boolean,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      checkinChallengeTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserValidatedCheckInMutationVariables = {
  input: UpdateUserValidatedCheckInInput,
  condition?: ModelUserValidatedCheckInConditionInput | null,
};

export type UpdateUserValidatedCheckInMutation = {
  updateUserValidatedCheckIn?:  {
    __typename: "UserValidatedCheckIn",
    id: string,
    userId: string,
    checkinId: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      image?: string | null,
      biography?: string | null,
      email?: string | null,
      notifications?: boolean | null,
      Messages?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      validatedCheckIns?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    checkin:  {
      __typename: "Checkin",
      id: string,
      timeStamp?: string | null,
      userID: string,
      chatroomID: string,
      validationCount?: number | null,
      isValidated?: boolean | null,
      validatedBy?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      ChallengeType?:  {
        __typename: "ChallengeType",
        id: string,
        name: string,
        description: string,
        active: boolean,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      checkinChallengeTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserValidatedCheckInMutationVariables = {
  input: DeleteUserValidatedCheckInInput,
  condition?: ModelUserValidatedCheckInConditionInput | null,
};

export type DeleteUserValidatedCheckInMutation = {
  deleteUserValidatedCheckIn?:  {
    __typename: "UserValidatedCheckIn",
    id: string,
    userId: string,
    checkinId: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      image?: string | null,
      biography?: string | null,
      email?: string | null,
      notifications?: boolean | null,
      Messages?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      validatedCheckIns?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    checkin:  {
      __typename: "Checkin",
      id: string,
      timeStamp?: string | null,
      userID: string,
      chatroomID: string,
      validationCount?: number | null,
      isValidated?: boolean | null,
      validatedBy?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      ChallengeType?:  {
        __typename: "ChallengeType",
        id: string,
        name: string,
        description: string,
        active: boolean,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      checkinChallengeTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetLeaderboardQueryVariables = {
  id: string,
};

export type GetLeaderboardQuery = {
  getLeaderboard?:  {
    __typename: "Leaderboard",
    id: string,
    numberOfCheckins: number,
    User:  {
      __typename: "User",
      id: string,
      name?: string | null,
      image?: string | null,
      biography?: string | null,
      email?: string | null,
      notifications?: boolean | null,
      Messages?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      validatedCheckIns?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    ChallengeType?:  {
      __typename: "ChallengeType",
      id: string,
      name: string,
      description: string,
      active: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    leaderboardUserId: string,
    leaderboardChallengeTypeId?: string | null,
  } | null,
};

export type ListLeaderboardsQueryVariables = {
  filter?: ModelLeaderboardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLeaderboardsQuery = {
  listLeaderboards?:  {
    __typename: "ModelLeaderboardConnection",
    items:  Array< {
      __typename: "Leaderboard",
      id: string,
      numberOfCheckins: number,
      User:  {
        __typename: "User",
        id: string,
        name?: string | null,
        image?: string | null,
        biography?: string | null,
        email?: string | null,
        notifications?: boolean | null,
        createdAt: string,
        updatedAt: string,
      },
      ChallengeType?:  {
        __typename: "ChallengeType",
        id: string,
        name: string,
        description: string,
        active: boolean,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      leaderboardUserId: string,
      leaderboardChallengeTypeId?: string | null,
    } | null >,
    nextToken?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: ChallengeStatusEnum | null,
    started?: string | null,
    ChatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      Messages?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        messageType?: MessageEnum | null,
        createdAt: string,
        updatedAt: string,
        messageGetCheckinId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    } | null,
    userCount?: number | null,
    createdAt: string,
    updatedAt: string,
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
      },
      Users?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      status?: ChallengeStatusEnum | null,
      started?: string | null,
      ChatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        chatRoomLastMessageId?: string | null,
      } | null,
      userCount?: number | null,
      createdAt: string,
      updatedAt: string,
      challengeChallengeTypeId: string,
      challengeChatRoomId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ChallengesByStatusQueryVariables = {
  status: ChallengeStatusEnum,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChallengeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ChallengesByStatusQuery = {
  challengesByStatus?:  {
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
      },
      Users?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      status?: ChallengeStatusEnum | null,
      started?: string | null,
      ChatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        chatRoomLastMessageId?: string | null,
      } | null,
      userCount?: number | null,
      createdAt: string,
      updatedAt: string,
      challengeChallengeTypeId: string,
      challengeChatRoomId?: string | null,
    } | null >,
    nextToken?: string | null,
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
    } | null >,
    nextToken?: string | null,
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
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null >,
      nextToken?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    Checkins?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null >,
      nextToken?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    validatedCheckIns?:  {
      __typename: "ModelUserValidatedCheckInConnection",
      items:  Array< {
        __typename: "UserValidatedCheckIn",
        id: string,
        userId: string,
        checkinId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      validatedCheckIns?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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
    messageType?: MessageEnum | null,
    getCheckin?:  {
      __typename: "Checkin",
      id: string,
      timeStamp?: string | null,
      userID: string,
      chatroomID: string,
      validationCount?: number | null,
      isValidated?: boolean | null,
      validatedBy?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      ChallengeType?:  {
        __typename: "ChallengeType",
        id: string,
        name: string,
        description: string,
        active: boolean,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      checkinChallengeTypeId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    messageGetCheckinId?: string | null,
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
      messageType?: MessageEnum | null,
      getCheckin?:  {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      messageGetCheckinId?: string | null,
    } | null >,
    nextToken?: string | null,
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
      messageType?: MessageEnum | null,
      getCheckin?:  {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      messageGetCheckinId?: string | null,
    } | null >,
    nextToken?: string | null,
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
      messageType?: MessageEnum | null,
      getCheckin?:  {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      messageGetCheckinId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChatRoomQueryVariables = {
  id: string,
};

export type GetChatRoomQuery = {
  getChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    name: string,
    Messages?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null >,
      nextToken?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    Checkins?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      text?: string | null,
      chatroomID: string,
      userID: string,
      messageType?: MessageEnum | null,
      getCheckin?:  {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      messageGetCheckinId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      name: string,
      Messages?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        messageType?: MessageEnum | null,
        createdAt: string,
        updatedAt: string,
        messageGetCheckinId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    } | null >,
    nextToken?: string | null,
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
    validationCount?: number | null,
    isValidated?: boolean | null,
    validatedBy?:  {
      __typename: "ModelUserValidatedCheckInConnection",
      items:  Array< {
        __typename: "UserValidatedCheckIn",
        id: string,
        userId: string,
        checkinId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    ChallengeType?:  {
      __typename: "ChallengeType",
      id: string,
      name: string,
      description: string,
      active: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    checkinChallengeTypeId?: string | null,
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
      validationCount?: number | null,
      isValidated?: boolean | null,
      validatedBy?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      ChallengeType?:  {
        __typename: "ChallengeType",
        id: string,
        name: string,
        description: string,
        active: boolean,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      checkinChallengeTypeId?: string | null,
    } | null >,
    nextToken?: string | null,
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
      validationCount?: number | null,
      isValidated?: boolean | null,
      validatedBy?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      ChallengeType?:  {
        __typename: "ChallengeType",
        id: string,
        name: string,
        description: string,
        active: boolean,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      checkinChallengeTypeId?: string | null,
    } | null >,
    nextToken?: string | null,
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
      validationCount?: number | null,
      isValidated?: boolean | null,
      validatedBy?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      ChallengeType?:  {
        __typename: "ChallengeType",
        id: string,
        name: string,
        description: string,
        active: boolean,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      checkinChallengeTypeId?: string | null,
    } | null >,
    nextToken?: string | null,
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
      },
      Users?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      status?: ChallengeStatusEnum | null,
      started?: string | null,
      ChatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        chatRoomLastMessageId?: string | null,
      } | null,
      userCount?: number | null,
      createdAt: string,
      updatedAt: string,
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
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      validatedCheckIns?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
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
        status?: ChallengeStatusEnum | null,
        started?: string | null,
        userCount?: number | null,
        createdAt: string,
        updatedAt: string,
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
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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
        status?: ChallengeStatusEnum | null,
        started?: string | null,
        userCount?: number | null,
        createdAt: string,
        updatedAt: string,
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
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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
        status?: ChallengeStatusEnum | null,
        started?: string | null,
        userCount?: number | null,
        createdAt: string,
        updatedAt: string,
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
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      validatedCheckIns?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      Messages?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        messageType?: MessageEnum | null,
        createdAt: string,
        updatedAt: string,
        messageGetCheckinId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
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
      },
      chatRoom:  {
        __typename: "ChatRoom",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        chatRoomLastMessageId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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
      },
      chatRoom:  {
        __typename: "ChatRoom",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        chatRoomLastMessageId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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
      },
      chatRoom:  {
        __typename: "ChatRoom",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        chatRoomLastMessageId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserValidatedCheckInQueryVariables = {
  id: string,
};

export type GetUserValidatedCheckInQuery = {
  getUserValidatedCheckIn?:  {
    __typename: "UserValidatedCheckIn",
    id: string,
    userId: string,
    checkinId: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      image?: string | null,
      biography?: string | null,
      email?: string | null,
      notifications?: boolean | null,
      Messages?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      validatedCheckIns?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    checkin:  {
      __typename: "Checkin",
      id: string,
      timeStamp?: string | null,
      userID: string,
      chatroomID: string,
      validationCount?: number | null,
      isValidated?: boolean | null,
      validatedBy?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      ChallengeType?:  {
        __typename: "ChallengeType",
        id: string,
        name: string,
        description: string,
        active: boolean,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      checkinChallengeTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserValidatedCheckInsQueryVariables = {
  filter?: ModelUserValidatedCheckInFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserValidatedCheckInsQuery = {
  listUserValidatedCheckIns?:  {
    __typename: "ModelUserValidatedCheckInConnection",
    items:  Array< {
      __typename: "UserValidatedCheckIn",
      id: string,
      userId: string,
      checkinId: string,
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
      },
      checkin:  {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserValidatedCheckInsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserValidatedCheckInFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserValidatedCheckInsByUserIdQuery = {
  userValidatedCheckInsByUserId?:  {
    __typename: "ModelUserValidatedCheckInConnection",
    items:  Array< {
      __typename: "UserValidatedCheckIn",
      id: string,
      userId: string,
      checkinId: string,
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
      },
      checkin:  {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserValidatedCheckInsByCheckinIdQueryVariables = {
  checkinId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserValidatedCheckInFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserValidatedCheckInsByCheckinIdQuery = {
  userValidatedCheckInsByCheckinId?:  {
    __typename: "ModelUserValidatedCheckInConnection",
    items:  Array< {
      __typename: "UserValidatedCheckIn",
      id: string,
      userId: string,
      checkinId: string,
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
      },
      checkin:  {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateLeaderboardSubscriptionVariables = {
  filter?: ModelSubscriptionLeaderboardFilterInput | null,
};

export type OnCreateLeaderboardSubscription = {
  onCreateLeaderboard?:  {
    __typename: "Leaderboard",
    id: string,
    numberOfCheckins: number,
    User:  {
      __typename: "User",
      id: string,
      name?: string | null,
      image?: string | null,
      biography?: string | null,
      email?: string | null,
      notifications?: boolean | null,
      Messages?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      validatedCheckIns?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    ChallengeType?:  {
      __typename: "ChallengeType",
      id: string,
      name: string,
      description: string,
      active: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    leaderboardUserId: string,
    leaderboardChallengeTypeId?: string | null,
  } | null,
};

export type OnUpdateLeaderboardSubscriptionVariables = {
  filter?: ModelSubscriptionLeaderboardFilterInput | null,
};

export type OnUpdateLeaderboardSubscription = {
  onUpdateLeaderboard?:  {
    __typename: "Leaderboard",
    id: string,
    numberOfCheckins: number,
    User:  {
      __typename: "User",
      id: string,
      name?: string | null,
      image?: string | null,
      biography?: string | null,
      email?: string | null,
      notifications?: boolean | null,
      Messages?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      validatedCheckIns?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    ChallengeType?:  {
      __typename: "ChallengeType",
      id: string,
      name: string,
      description: string,
      active: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    leaderboardUserId: string,
    leaderboardChallengeTypeId?: string | null,
  } | null,
};

export type OnDeleteLeaderboardSubscriptionVariables = {
  filter?: ModelSubscriptionLeaderboardFilterInput | null,
};

export type OnDeleteLeaderboardSubscription = {
  onDeleteLeaderboard?:  {
    __typename: "Leaderboard",
    id: string,
    numberOfCheckins: number,
    User:  {
      __typename: "User",
      id: string,
      name?: string | null,
      image?: string | null,
      biography?: string | null,
      email?: string | null,
      notifications?: boolean | null,
      Messages?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      validatedCheckIns?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    ChallengeType?:  {
      __typename: "ChallengeType",
      id: string,
      name: string,
      description: string,
      active: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    leaderboardUserId: string,
    leaderboardChallengeTypeId?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: ChallengeStatusEnum | null,
    started?: string | null,
    ChatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      Messages?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        messageType?: MessageEnum | null,
        createdAt: string,
        updatedAt: string,
        messageGetCheckinId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    } | null,
    userCount?: number | null,
    createdAt: string,
    updatedAt: string,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: ChallengeStatusEnum | null,
    started?: string | null,
    ChatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      Messages?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        messageType?: MessageEnum | null,
        createdAt: string,
        updatedAt: string,
        messageGetCheckinId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    } | null,
    userCount?: number | null,
    createdAt: string,
    updatedAt: string,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: ChallengeStatusEnum | null,
    started?: string | null,
    ChatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      Messages?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        messageType?: MessageEnum | null,
        createdAt: string,
        updatedAt: string,
        messageGetCheckinId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    } | null,
    userCount?: number | null,
    createdAt: string,
    updatedAt: string,
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
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null >,
      nextToken?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    Checkins?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null >,
      nextToken?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    validatedCheckIns?:  {
      __typename: "ModelUserValidatedCheckInConnection",
      items:  Array< {
        __typename: "UserValidatedCheckIn",
        id: string,
        userId: string,
        checkinId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null >,
      nextToken?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    Checkins?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null >,
      nextToken?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    validatedCheckIns?:  {
      __typename: "ModelUserValidatedCheckInConnection",
      items:  Array< {
        __typename: "UserValidatedCheckIn",
        id: string,
        userId: string,
        checkinId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null >,
      nextToken?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    Checkins?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null >,
      nextToken?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    validatedCheckIns?:  {
      __typename: "ModelUserValidatedCheckInConnection",
      items:  Array< {
        __typename: "UserValidatedCheckIn",
        id: string,
        userId: string,
        checkinId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    messageType?: MessageEnum | null,
    getCheckin?:  {
      __typename: "Checkin",
      id: string,
      timeStamp?: string | null,
      userID: string,
      chatroomID: string,
      validationCount?: number | null,
      isValidated?: boolean | null,
      validatedBy?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      ChallengeType?:  {
        __typename: "ChallengeType",
        id: string,
        name: string,
        description: string,
        active: boolean,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      checkinChallengeTypeId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    messageGetCheckinId?: string | null,
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
    messageType?: MessageEnum | null,
    getCheckin?:  {
      __typename: "Checkin",
      id: string,
      timeStamp?: string | null,
      userID: string,
      chatroomID: string,
      validationCount?: number | null,
      isValidated?: boolean | null,
      validatedBy?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      ChallengeType?:  {
        __typename: "ChallengeType",
        id: string,
        name: string,
        description: string,
        active: boolean,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      checkinChallengeTypeId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    messageGetCheckinId?: string | null,
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
    messageType?: MessageEnum | null,
    getCheckin?:  {
      __typename: "Checkin",
      id: string,
      timeStamp?: string | null,
      userID: string,
      chatroomID: string,
      validationCount?: number | null,
      isValidated?: boolean | null,
      validatedBy?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      ChallengeType?:  {
        __typename: "ChallengeType",
        id: string,
        name: string,
        description: string,
        active: boolean,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      checkinChallengeTypeId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    messageGetCheckinId?: string | null,
  } | null,
};

export type OnCreateChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null,
};

export type OnCreateChatRoomSubscription = {
  onCreateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    name: string,
    Messages?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null >,
      nextToken?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    Checkins?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      text?: string | null,
      chatroomID: string,
      userID: string,
      messageType?: MessageEnum | null,
      getCheckin?:  {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      messageGetCheckinId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    name: string,
    Messages?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null >,
      nextToken?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    Checkins?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      text?: string | null,
      chatroomID: string,
      userID: string,
      messageType?: MessageEnum | null,
      getCheckin?:  {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      messageGetCheckinId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    name: string,
    Messages?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null >,
      nextToken?: string | null,
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
      } | null >,
      nextToken?: string | null,
    } | null,
    Checkins?:  {
      __typename: "ModelCheckinConnection",
      items:  Array< {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      text?: string | null,
      chatroomID: string,
      userID: string,
      messageType?: MessageEnum | null,
      getCheckin?:  {
        __typename: "Checkin",
        id: string,
        timeStamp?: string | null,
        userID: string,
        chatroomID: string,
        validationCount?: number | null,
        isValidated?: boolean | null,
        createdAt: string,
        updatedAt: string,
        checkinChallengeTypeId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      messageGetCheckinId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    validationCount?: number | null,
    isValidated?: boolean | null,
    validatedBy?:  {
      __typename: "ModelUserValidatedCheckInConnection",
      items:  Array< {
        __typename: "UserValidatedCheckIn",
        id: string,
        userId: string,
        checkinId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    ChallengeType?:  {
      __typename: "ChallengeType",
      id: string,
      name: string,
      description: string,
      active: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    checkinChallengeTypeId?: string | null,
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
    validationCount?: number | null,
    isValidated?: boolean | null,
    validatedBy?:  {
      __typename: "ModelUserValidatedCheckInConnection",
      items:  Array< {
        __typename: "UserValidatedCheckIn",
        id: string,
        userId: string,
        checkinId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    ChallengeType?:  {
      __typename: "ChallengeType",
      id: string,
      name: string,
      description: string,
      active: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    checkinChallengeTypeId?: string | null,
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
    validationCount?: number | null,
    isValidated?: boolean | null,
    validatedBy?:  {
      __typename: "ModelUserValidatedCheckInConnection",
      items:  Array< {
        __typename: "UserValidatedCheckIn",
        id: string,
        userId: string,
        checkinId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    ChallengeType?:  {
      __typename: "ChallengeType",
      id: string,
      name: string,
      description: string,
      active: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    checkinChallengeTypeId?: string | null,
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
      },
      Users?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      status?: ChallengeStatusEnum | null,
      started?: string | null,
      ChatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        chatRoomLastMessageId?: string | null,
      } | null,
      userCount?: number | null,
      createdAt: string,
      updatedAt: string,
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
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      validatedCheckIns?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
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
      },
      Users?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      status?: ChallengeStatusEnum | null,
      started?: string | null,
      ChatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        chatRoomLastMessageId?: string | null,
      } | null,
      userCount?: number | null,
      createdAt: string,
      updatedAt: string,
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
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      validatedCheckIns?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
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
      },
      Users?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      status?: ChallengeStatusEnum | null,
      started?: string | null,
      ChatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        chatRoomLastMessageId?: string | null,
      } | null,
      userCount?: number | null,
      createdAt: string,
      updatedAt: string,
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
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      validatedCheckIns?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
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
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      validatedCheckIns?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      Messages?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        messageType?: MessageEnum | null,
        createdAt: string,
        updatedAt: string,
        messageGetCheckinId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
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
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      validatedCheckIns?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      Messages?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        messageType?: MessageEnum | null,
        createdAt: string,
        updatedAt: string,
        messageGetCheckinId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
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
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      validatedCheckIns?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name: string,
      Messages?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        text?: string | null,
        chatroomID: string,
        userID: string,
        messageType?: MessageEnum | null,
        createdAt: string,
        updatedAt: string,
        messageGetCheckinId?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserValidatedCheckInSubscriptionVariables = {
  filter?: ModelSubscriptionUserValidatedCheckInFilterInput | null,
};

export type OnCreateUserValidatedCheckInSubscription = {
  onCreateUserValidatedCheckIn?:  {
    __typename: "UserValidatedCheckIn",
    id: string,
    userId: string,
    checkinId: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      image?: string | null,
      biography?: string | null,
      email?: string | null,
      notifications?: boolean | null,
      Messages?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      validatedCheckIns?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    checkin:  {
      __typename: "Checkin",
      id: string,
      timeStamp?: string | null,
      userID: string,
      chatroomID: string,
      validationCount?: number | null,
      isValidated?: boolean | null,
      validatedBy?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      ChallengeType?:  {
        __typename: "ChallengeType",
        id: string,
        name: string,
        description: string,
        active: boolean,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      checkinChallengeTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserValidatedCheckInSubscriptionVariables = {
  filter?: ModelSubscriptionUserValidatedCheckInFilterInput | null,
};

export type OnUpdateUserValidatedCheckInSubscription = {
  onUpdateUserValidatedCheckIn?:  {
    __typename: "UserValidatedCheckIn",
    id: string,
    userId: string,
    checkinId: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      image?: string | null,
      biography?: string | null,
      email?: string | null,
      notifications?: boolean | null,
      Messages?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      validatedCheckIns?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    checkin:  {
      __typename: "Checkin",
      id: string,
      timeStamp?: string | null,
      userID: string,
      chatroomID: string,
      validationCount?: number | null,
      isValidated?: boolean | null,
      validatedBy?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      ChallengeType?:  {
        __typename: "ChallengeType",
        id: string,
        name: string,
        description: string,
        active: boolean,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      checkinChallengeTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserValidatedCheckInSubscriptionVariables = {
  filter?: ModelSubscriptionUserValidatedCheckInFilterInput | null,
};

export type OnDeleteUserValidatedCheckInSubscription = {
  onDeleteUserValidatedCheckIn?:  {
    __typename: "UserValidatedCheckIn",
    id: string,
    userId: string,
    checkinId: string,
    user:  {
      __typename: "User",
      id: string,
      name?: string | null,
      image?: string | null,
      biography?: string | null,
      email?: string | null,
      notifications?: boolean | null,
      Messages?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      Checkins?:  {
        __typename: "ModelCheckinConnection",
        nextToken?: string | null,
      } | null,
      challenges?:  {
        __typename: "ModelChallengeUserConnection",
        nextToken?: string | null,
      } | null,
      validatedCheckIns?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    checkin:  {
      __typename: "Checkin",
      id: string,
      timeStamp?: string | null,
      userID: string,
      chatroomID: string,
      validationCount?: number | null,
      isValidated?: boolean | null,
      validatedBy?:  {
        __typename: "ModelUserValidatedCheckInConnection",
        nextToken?: string | null,
      } | null,
      ChallengeType?:  {
        __typename: "ChallengeType",
        id: string,
        name: string,
        description: string,
        active: boolean,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      checkinChallengeTypeId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
