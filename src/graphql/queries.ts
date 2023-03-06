/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLeaderboard = /* GraphQL */ `
  query GetLeaderboard($id: ID!) {
    getLeaderboard(id: $id) {
      id
      numberOfCheckins
      User {
        id
        name
        image
        biography
        email
        notifications
        Messages {
          nextToken
        }
        ChatRooms {
          nextToken
        }
        Checkins {
          nextToken
        }
        challenges {
          nextToken
        }
        validatedCheckIns {
          nextToken
        }
        createdAt
        updatedAt
      }
      ChallengeType {
        id
        name
        description
        active
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      leaderboardUserId
      leaderboardChallengeTypeId
    }
  }
`;
export const listLeaderboards = /* GraphQL */ `
  query ListLeaderboards(
    $filter: ModelLeaderboardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLeaderboards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        numberOfCheckins
        User {
          id
          name
          image
          biography
          email
          notifications
          createdAt
          updatedAt
        }
        ChallengeType {
          id
          name
          description
          active
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        leaderboardUserId
        leaderboardChallengeTypeId
      }
      nextToken
    }
  }
`;
export const getChallenge = /* GraphQL */ `
  query GetChallenge($id: ID!) {
    getChallenge(id: $id) {
      id
      ChallengeType {
        id
        name
        description
        active
        createdAt
        updatedAt
      }
      Users {
        items {
          id
          challengeId
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      status
      started
      ChatRoom {
        id
        name
        Messages {
          nextToken
        }
        users {
          nextToken
        }
        Checkins {
          nextToken
        }
        LastMessage {
          id
          text
          chatroomID
          userID
          messageType
          createdAt
          updatedAt
          messageGetCheckinId
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
      }
      userCount
      createdAt
      updatedAt
      challengeChallengeTypeId
      challengeChatRoomId
    }
  }
`;
export const listChallenges = /* GraphQL */ `
  query ListChallenges(
    $filter: ModelChallengeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChallenges(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ChallengeType {
          id
          name
          description
          active
          createdAt
          updatedAt
        }
        Users {
          nextToken
        }
        status
        started
        ChatRoom {
          id
          name
          createdAt
          updatedAt
          chatRoomLastMessageId
        }
        userCount
        createdAt
        updatedAt
        challengeChallengeTypeId
        challengeChatRoomId
      }
      nextToken
    }
  }
`;
export const challengesByStatus = /* GraphQL */ `
  query ChallengesByStatus(
    $status: ChallengeStatusEnum!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelChallengeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    challengesByStatus(
      status: $status
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        ChallengeType {
          id
          name
          description
          active
          createdAt
          updatedAt
        }
        Users {
          nextToken
        }
        status
        started
        ChatRoom {
          id
          name
          createdAt
          updatedAt
          chatRoomLastMessageId
        }
        userCount
        createdAt
        updatedAt
        challengeChallengeTypeId
        challengeChatRoomId
      }
      nextToken
    }
  }
`;
export const getChallengeType = /* GraphQL */ `
  query GetChallengeType($id: ID!) {
    getChallengeType(id: $id) {
      id
      name
      description
      active
      createdAt
      updatedAt
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
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      image
      biography
      email
      notifications
      Messages {
        items {
          id
          timeStamp
          userID
          chatroomID
          validationCount
          isValidated
          createdAt
          updatedAt
          checkinChallengeTypeId
        }
        nextToken
      }
      ChatRooms {
        items {
          id
          userId
          chatRoomId
          createdAt
          updatedAt
        }
        nextToken
      }
      Checkins {
        items {
          id
          timeStamp
          userID
          chatroomID
          validationCount
          isValidated
          createdAt
          updatedAt
          checkinChallengeTypeId
        }
        nextToken
      }
      challenges {
        items {
          id
          challengeId
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      validatedCheckIns {
        items {
          id
          userId
          checkinId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        biography
        email
        notifications
        Messages {
          nextToken
        }
        ChatRooms {
          nextToken
        }
        Checkins {
          nextToken
        }
        challenges {
          nextToken
        }
        validatedCheckIns {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      text
      chatroomID
      userID
      messageType
      getCheckin {
        id
        timeStamp
        userID
        chatroomID
        validationCount
        isValidated
        validatedBy {
          nextToken
        }
        ChallengeType {
          id
          name
          description
          active
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        checkinChallengeTypeId
      }
      createdAt
      updatedAt
      messageGetCheckinId
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        chatroomID
        userID
        messageType
        getCheckin {
          id
          timeStamp
          userID
          chatroomID
          validationCount
          isValidated
          createdAt
          updatedAt
          checkinChallengeTypeId
        }
        createdAt
        updatedAt
        messageGetCheckinId
      }
      nextToken
    }
  }
`;
export const messagesByChatroomID = /* GraphQL */ `
  query MessagesByChatroomID(
    $chatroomID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChatroomID(
      chatroomID: $chatroomID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        text
        chatroomID
        userID
        messageType
        getCheckin {
          id
          timeStamp
          userID
          chatroomID
          validationCount
          isValidated
          createdAt
          updatedAt
          checkinChallengeTypeId
        }
        createdAt
        updatedAt
        messageGetCheckinId
      }
      nextToken
    }
  }
`;
export const messagesByUserID = /* GraphQL */ `
  query MessagesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        text
        chatroomID
        userID
        messageType
        getCheckin {
          id
          timeStamp
          userID
          chatroomID
          validationCount
          isValidated
          createdAt
          updatedAt
          checkinChallengeTypeId
        }
        createdAt
        updatedAt
        messageGetCheckinId
      }
      nextToken
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
      id
      name
      Messages {
        items {
          id
          timeStamp
          userID
          chatroomID
          validationCount
          isValidated
          createdAt
          updatedAt
          checkinChallengeTypeId
        }
        nextToken
      }
      users {
        items {
          id
          userId
          chatRoomId
          createdAt
          updatedAt
        }
        nextToken
      }
      Checkins {
        items {
          id
          timeStamp
          userID
          chatroomID
          validationCount
          isValidated
          createdAt
          updatedAt
          checkinChallengeTypeId
        }
        nextToken
      }
      LastMessage {
        id
        text
        chatroomID
        userID
        messageType
        getCheckin {
          id
          timeStamp
          userID
          chatroomID
          validationCount
          isValidated
          createdAt
          updatedAt
          checkinChallengeTypeId
        }
        createdAt
        updatedAt
        messageGetCheckinId
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
    }
  }
`;
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        Messages {
          nextToken
        }
        users {
          nextToken
        }
        Checkins {
          nextToken
        }
        LastMessage {
          id
          text
          chatroomID
          userID
          messageType
          createdAt
          updatedAt
          messageGetCheckinId
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
      }
      nextToken
    }
  }
`;
export const getCheckin = /* GraphQL */ `
  query GetCheckin($id: ID!) {
    getCheckin(id: $id) {
      id
      timeStamp
      userID
      chatroomID
      validationCount
      isValidated
      validatedBy {
        items {
          id
          userId
          checkinId
          createdAt
          updatedAt
        }
        nextToken
      }
      ChallengeType {
        id
        name
        description
        active
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      checkinChallengeTypeId
    }
  }
`;
export const listCheckins = /* GraphQL */ `
  query ListCheckins(
    $filter: ModelCheckinFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCheckins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        timeStamp
        userID
        chatroomID
        validationCount
        isValidated
        validatedBy {
          nextToken
        }
        ChallengeType {
          id
          name
          description
          active
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        checkinChallengeTypeId
      }
      nextToken
    }
  }
`;
export const checkinsByUserID = /* GraphQL */ `
  query CheckinsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCheckinFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkinsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        timeStamp
        userID
        chatroomID
        validationCount
        isValidated
        validatedBy {
          nextToken
        }
        ChallengeType {
          id
          name
          description
          active
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        checkinChallengeTypeId
      }
      nextToken
    }
  }
`;
export const checkinsByChatroomID = /* GraphQL */ `
  query CheckinsByChatroomID(
    $chatroomID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCheckinFilterInput
    $limit: Int
    $nextToken: String
  ) {
    checkinsByChatroomID(
      chatroomID: $chatroomID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        timeStamp
        userID
        chatroomID
        validationCount
        isValidated
        validatedBy {
          nextToken
        }
        ChallengeType {
          id
          name
          description
          active
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        checkinChallengeTypeId
      }
      nextToken
    }
  }
`;
export const getChallengeUser = /* GraphQL */ `
  query GetChallengeUser($id: ID!) {
    getChallengeUser(id: $id) {
      id
      challengeId
      userId
      challenge {
        id
        ChallengeType {
          id
          name
          description
          active
          createdAt
          updatedAt
        }
        Users {
          nextToken
        }
        status
        started
        ChatRoom {
          id
          name
          createdAt
          updatedAt
          chatRoomLastMessageId
        }
        userCount
        createdAt
        updatedAt
        challengeChallengeTypeId
        challengeChatRoomId
      }
      user {
        id
        name
        image
        biography
        email
        notifications
        Messages {
          nextToken
        }
        ChatRooms {
          nextToken
        }
        Checkins {
          nextToken
        }
        challenges {
          nextToken
        }
        validatedCheckIns {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listChallengeUsers = /* GraphQL */ `
  query ListChallengeUsers(
    $filter: ModelChallengeUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChallengeUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        challengeId
        userId
        challenge {
          id
          status
          started
          userCount
          createdAt
          updatedAt
          challengeChallengeTypeId
          challengeChatRoomId
        }
        user {
          id
          name
          image
          biography
          email
          notifications
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const challengeUsersByChallengeId = /* GraphQL */ `
  query ChallengeUsersByChallengeId(
    $challengeId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChallengeUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    challengeUsersByChallengeId(
      challengeId: $challengeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        challengeId
        userId
        challenge {
          id
          status
          started
          userCount
          createdAt
          updatedAt
          challengeChallengeTypeId
          challengeChatRoomId
        }
        user {
          id
          name
          image
          biography
          email
          notifications
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const challengeUsersByUserId = /* GraphQL */ `
  query ChallengeUsersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChallengeUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    challengeUsersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        challengeId
        userId
        challenge {
          id
          status
          started
          userCount
          createdAt
          updatedAt
          challengeChallengeTypeId
          challengeChatRoomId
        }
        user {
          id
          name
          image
          biography
          email
          notifications
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserChatRoom = /* GraphQL */ `
  query GetUserChatRoom($id: ID!) {
    getUserChatRoom(id: $id) {
      id
      userId
      chatRoomId
      user {
        id
        name
        image
        biography
        email
        notifications
        Messages {
          nextToken
        }
        ChatRooms {
          nextToken
        }
        Checkins {
          nextToken
        }
        challenges {
          nextToken
        }
        validatedCheckIns {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        name
        Messages {
          nextToken
        }
        users {
          nextToken
        }
        Checkins {
          nextToken
        }
        LastMessage {
          id
          text
          chatroomID
          userID
          messageType
          createdAt
          updatedAt
          messageGetCheckinId
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUserChatRooms = /* GraphQL */ `
  query ListUserChatRooms(
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        chatRoomId
        user {
          id
          name
          image
          biography
          email
          notifications
          createdAt
          updatedAt
        }
        chatRoom {
          id
          name
          createdAt
          updatedAt
          chatRoomLastMessageId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const userChatRoomsByUserId = /* GraphQL */ `
  query UserChatRoomsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userChatRoomsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        chatRoomId
        user {
          id
          name
          image
          biography
          email
          notifications
          createdAt
          updatedAt
        }
        chatRoom {
          id
          name
          createdAt
          updatedAt
          chatRoomLastMessageId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const userChatRoomsByChatRoomId = /* GraphQL */ `
  query UserChatRoomsByChatRoomId(
    $chatRoomId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userChatRoomsByChatRoomId(
      chatRoomId: $chatRoomId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        chatRoomId
        user {
          id
          name
          image
          biography
          email
          notifications
          createdAt
          updatedAt
        }
        chatRoom {
          id
          name
          createdAt
          updatedAt
          chatRoomLastMessageId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserValidatedCheckIn = /* GraphQL */ `
  query GetUserValidatedCheckIn($id: ID!) {
    getUserValidatedCheckIn(id: $id) {
      id
      userId
      checkinId
      user {
        id
        name
        image
        biography
        email
        notifications
        Messages {
          nextToken
        }
        ChatRooms {
          nextToken
        }
        Checkins {
          nextToken
        }
        challenges {
          nextToken
        }
        validatedCheckIns {
          nextToken
        }
        createdAt
        updatedAt
      }
      checkin {
        id
        timeStamp
        userID
        chatroomID
        validationCount
        isValidated
        validatedBy {
          nextToken
        }
        ChallengeType {
          id
          name
          description
          active
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        checkinChallengeTypeId
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUserValidatedCheckIns = /* GraphQL */ `
  query ListUserValidatedCheckIns(
    $filter: ModelUserValidatedCheckInFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserValidatedCheckIns(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        checkinId
        user {
          id
          name
          image
          biography
          email
          notifications
          createdAt
          updatedAt
        }
        checkin {
          id
          timeStamp
          userID
          chatroomID
          validationCount
          isValidated
          createdAt
          updatedAt
          checkinChallengeTypeId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const userValidatedCheckInsByUserId = /* GraphQL */ `
  query UserValidatedCheckInsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserValidatedCheckInFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userValidatedCheckInsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        checkinId
        user {
          id
          name
          image
          biography
          email
          notifications
          createdAt
          updatedAt
        }
        checkin {
          id
          timeStamp
          userID
          chatroomID
          validationCount
          isValidated
          createdAt
          updatedAt
          checkinChallengeTypeId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const userValidatedCheckInsByCheckinId = /* GraphQL */ `
  query UserValidatedCheckInsByCheckinId(
    $checkinId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserValidatedCheckInFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userValidatedCheckInsByCheckinId(
      checkinId: $checkinId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        checkinId
        user {
          id
          name
          image
          biography
          email
          notifications
          createdAt
          updatedAt
        }
        checkin {
          id
          timeStamp
          userID
          chatroomID
          validationCount
          isValidated
          createdAt
          updatedAt
          checkinChallengeTypeId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
