/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLeaderboard = /* GraphQL */ `
  subscription OnCreateLeaderboard(
    $filter: ModelSubscriptionLeaderboardFilterInput
  ) {
    onCreateLeaderboard(filter: $filter) {
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
export const onUpdateLeaderboard = /* GraphQL */ `
  subscription OnUpdateLeaderboard(
    $filter: ModelSubscriptionLeaderboardFilterInput
  ) {
    onUpdateLeaderboard(filter: $filter) {
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
export const onDeleteLeaderboard = /* GraphQL */ `
  subscription OnDeleteLeaderboard(
    $filter: ModelSubscriptionLeaderboardFilterInput
  ) {
    onDeleteLeaderboard(filter: $filter) {
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
export const onCreateChallenge = /* GraphQL */ `
  subscription OnCreateChallenge(
    $filter: ModelSubscriptionChallengeFilterInput
  ) {
    onCreateChallenge(filter: $filter) {
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
export const onUpdateChallenge = /* GraphQL */ `
  subscription OnUpdateChallenge(
    $filter: ModelSubscriptionChallengeFilterInput
  ) {
    onUpdateChallenge(filter: $filter) {
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
export const onDeleteChallenge = /* GraphQL */ `
  subscription OnDeleteChallenge(
    $filter: ModelSubscriptionChallengeFilterInput
  ) {
    onDeleteChallenge(filter: $filter) {
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
export const onCreateChallengeType = /* GraphQL */ `
  subscription OnCreateChallengeType(
    $filter: ModelSubscriptionChallengeTypeFilterInput
  ) {
    onCreateChallengeType(filter: $filter) {
      id
      name
      description
      active
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateChallengeType = /* GraphQL */ `
  subscription OnUpdateChallengeType(
    $filter: ModelSubscriptionChallengeTypeFilterInput
  ) {
    onUpdateChallengeType(filter: $filter) {
      id
      name
      description
      active
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteChallengeType = /* GraphQL */ `
  subscription OnDeleteChallengeType(
    $filter: ModelSubscriptionChallengeTypeFilterInput
  ) {
    onDeleteChallengeType(filter: $filter) {
      id
      name
      description
      active
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
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
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onCreateChatRoom(filter: $filter) {
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
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onUpdateChatRoom(filter: $filter) {
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
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onDeleteChatRoom(filter: $filter) {
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
export const onCreateCheckin = /* GraphQL */ `
  subscription OnCreateCheckin($filter: ModelSubscriptionCheckinFilterInput) {
    onCreateCheckin(filter: $filter) {
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
export const onUpdateCheckin = /* GraphQL */ `
  subscription OnUpdateCheckin($filter: ModelSubscriptionCheckinFilterInput) {
    onUpdateCheckin(filter: $filter) {
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
export const onDeleteCheckin = /* GraphQL */ `
  subscription OnDeleteCheckin($filter: ModelSubscriptionCheckinFilterInput) {
    onDeleteCheckin(filter: $filter) {
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
export const onCreateChallengeUser = /* GraphQL */ `
  subscription OnCreateChallengeUser(
    $filter: ModelSubscriptionChallengeUserFilterInput
  ) {
    onCreateChallengeUser(filter: $filter) {
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
export const onUpdateChallengeUser = /* GraphQL */ `
  subscription OnUpdateChallengeUser(
    $filter: ModelSubscriptionChallengeUserFilterInput
  ) {
    onUpdateChallengeUser(filter: $filter) {
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
export const onDeleteChallengeUser = /* GraphQL */ `
  subscription OnDeleteChallengeUser(
    $filter: ModelSubscriptionChallengeUserFilterInput
  ) {
    onDeleteChallengeUser(filter: $filter) {
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
export const onCreateUserChatRoom = /* GraphQL */ `
  subscription OnCreateUserChatRoom(
    $filter: ModelSubscriptionUserChatRoomFilterInput
  ) {
    onCreateUserChatRoom(filter: $filter) {
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
export const onUpdateUserChatRoom = /* GraphQL */ `
  subscription OnUpdateUserChatRoom(
    $filter: ModelSubscriptionUserChatRoomFilterInput
  ) {
    onUpdateUserChatRoom(filter: $filter) {
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
export const onDeleteUserChatRoom = /* GraphQL */ `
  subscription OnDeleteUserChatRoom(
    $filter: ModelSubscriptionUserChatRoomFilterInput
  ) {
    onDeleteUserChatRoom(filter: $filter) {
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
export const onCreateUserValidatedCheckIn = /* GraphQL */ `
  subscription OnCreateUserValidatedCheckIn(
    $filter: ModelSubscriptionUserValidatedCheckInFilterInput
  ) {
    onCreateUserValidatedCheckIn(filter: $filter) {
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
export const onUpdateUserValidatedCheckIn = /* GraphQL */ `
  subscription OnUpdateUserValidatedCheckIn(
    $filter: ModelSubscriptionUserValidatedCheckInFilterInput
  ) {
    onUpdateUserValidatedCheckIn(filter: $filter) {
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
export const onDeleteUserValidatedCheckIn = /* GraphQL */ `
  subscription OnDeleteUserValidatedCheckIn(
    $filter: ModelSubscriptionUserValidatedCheckInFilterInput
  ) {
    onDeleteUserValidatedCheckIn(filter: $filter) {
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
