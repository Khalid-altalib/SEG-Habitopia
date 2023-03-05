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
          startedAt
        }
        ChatRooms {
          nextToken
          startedAt
        }
        Checkins {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      leaderboardUserId
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
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        leaderboardUserId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLeaderboards = /* GraphQL */ `
  query SyncLeaderboards(
    $filter: ModelLeaderboardFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLeaderboards(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        leaderboardUserId
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      Users {
        items {
          id
          challengeId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      started
      ChatRoom {
        id
        Messages {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        Checkins {
          nextToken
          startedAt
        }
        LastMessage {
          id
          text
          chatroomID
          userID
          messageType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          messageGetCheckinId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomLastMessageId
      }
      userCount
      finished
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        Users {
          nextToken
          startedAt
        }
        started
        ChatRoom {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomLastMessageId
        }
        userCount
        finished
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        challengeChallengeTypeId
        challengeChatRoomId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncChallenges = /* GraphQL */ `
  query SyncChallenges(
    $filter: ModelChallengeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChallenges(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
          _version
          _deleted
          _lastChangedAt
        }
        Users {
          nextToken
          startedAt
        }
        started
        ChatRoom {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomLastMessageId
        }
        userCount
        finished
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        challengeChallengeTypeId
        challengeChatRoomId
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      ChatRooms {
        items {
          id
          userId
          chatRoomId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      challenges {
        items {
          id
          challengeId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
        ChatRooms {
          nextToken
          startedAt
        }
        Checkins {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
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
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        image
        biography
        email
        notifications
        Messages {
          nextToken
          startedAt
        }
        ChatRooms {
          nextToken
          startedAt
        }
        Checkins {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        messageGetCheckinId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMessages = /* GraphQL */ `
  query SyncMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        messageGetCheckinId
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        messageGetCheckinId
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        messageGetCheckinId
      }
      nextToken
      startedAt
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
      id
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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          userId
          chatRoomId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        messageGetCheckinId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        Messages {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        Checkins {
          nextToken
          startedAt
        }
        LastMessage {
          id
          text
          chatroomID
          userID
          messageType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          messageGetCheckinId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomLastMessageId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncChatRooms = /* GraphQL */ `
  query SyncChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChatRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Messages {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        Checkins {
          nextToken
          startedAt
        }
        LastMessage {
          id
          text
          chatroomID
          userID
          messageType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          messageGetCheckinId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomLastMessageId
      }
      nextToken
      startedAt
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
export const syncCheckins = /* GraphQL */ `
  query SyncCheckins(
    $filter: ModelCheckinFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCheckins(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        timeStamp
        userID
        chatroomID
        validationCount
        isValidated
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
          _version
          _deleted
          _lastChangedAt
        }
        Users {
          nextToken
          startedAt
        }
        started
        ChatRoom {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomLastMessageId
        }
        userCount
        finished
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          startedAt
        }
        ChatRooms {
          nextToken
          startedAt
        }
        Checkins {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          started
          userCount
          finished
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
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
export const syncChallengeUsers = /* GraphQL */ `
  query SyncChallengeUsers(
    $filter: ModelChallengeUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChallengeUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        challengeId
        userId
        challenge {
          id
          started
          userCount
          finished
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
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
          started
          userCount
          finished
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
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
          started
          userCount
          finished
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
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
          startedAt
        }
        ChatRooms {
          nextToken
          startedAt
        }
        Checkins {
          nextToken
          startedAt
        }
        challenges {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      chatRoom {
        id
        Messages {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        Checkins {
          nextToken
          startedAt
        }
        LastMessage {
          id
          text
          chatroomID
          userID
          messageType
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          messageGetCheckinId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomLastMessageId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        chatRoom {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomLastMessageId
        }
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
export const syncUserChatRooms = /* GraphQL */ `
  query SyncUserChatRooms(
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserChatRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
          _version
          _deleted
          _lastChangedAt
        }
        chatRoom {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomLastMessageId
        }
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
          _version
          _deleted
          _lastChangedAt
        }
        chatRoom {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomLastMessageId
        }
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
          _version
          _deleted
          _lastChangedAt
        }
        chatRoom {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomLastMessageId
        }
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
