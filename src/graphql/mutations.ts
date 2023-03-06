/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLeaderboard = /* GraphQL */ `
  mutation CreateLeaderboard(
    $input: CreateLeaderboardInput!
    $condition: ModelLeaderboardConditionInput
  ) {
    createLeaderboard(input: $input, condition: $condition) {
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
export const updateLeaderboard = /* GraphQL */ `
  mutation UpdateLeaderboard(
    $input: UpdateLeaderboardInput!
    $condition: ModelLeaderboardConditionInput
  ) {
    updateLeaderboard(input: $input, condition: $condition) {
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
export const deleteLeaderboard = /* GraphQL */ `
  mutation DeleteLeaderboard(
    $input: DeleteLeaderboardInput!
    $condition: ModelLeaderboardConditionInput
  ) {
    deleteLeaderboard(input: $input, condition: $condition) {
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
export const createChallenge = /* GraphQL */ `
  mutation CreateChallenge(
    $input: CreateChallengeInput!
    $condition: ModelChallengeConditionInput
  ) {
    createChallenge(input: $input, condition: $condition) {
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
export const updateChallenge = /* GraphQL */ `
  mutation UpdateChallenge(
    $input: UpdateChallengeInput!
    $condition: ModelChallengeConditionInput
  ) {
    updateChallenge(input: $input, condition: $condition) {
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
export const deleteChallenge = /* GraphQL */ `
  mutation DeleteChallenge(
    $input: DeleteChallengeInput!
    $condition: ModelChallengeConditionInput
  ) {
    deleteChallenge(input: $input, condition: $condition) {
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
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
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
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
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
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
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
export const createCheckin = /* GraphQL */ `
  mutation CreateCheckin(
    $input: CreateCheckinInput!
    $condition: ModelCheckinConditionInput
  ) {
    createCheckin(input: $input, condition: $condition) {
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
export const updateCheckin = /* GraphQL */ `
  mutation UpdateCheckin(
    $input: UpdateCheckinInput!
    $condition: ModelCheckinConditionInput
  ) {
    updateCheckin(input: $input, condition: $condition) {
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
export const deleteCheckin = /* GraphQL */ `
  mutation DeleteCheckin(
    $input: DeleteCheckinInput!
    $condition: ModelCheckinConditionInput
  ) {
    deleteCheckin(input: $input, condition: $condition) {
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
export const createChallengeUser = /* GraphQL */ `
  mutation CreateChallengeUser(
    $input: CreateChallengeUserInput!
    $condition: ModelChallengeUserConditionInput
  ) {
    createChallengeUser(input: $input, condition: $condition) {
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
export const updateChallengeUser = /* GraphQL */ `
  mutation UpdateChallengeUser(
    $input: UpdateChallengeUserInput!
    $condition: ModelChallengeUserConditionInput
  ) {
    updateChallengeUser(input: $input, condition: $condition) {
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
export const deleteChallengeUser = /* GraphQL */ `
  mutation DeleteChallengeUser(
    $input: DeleteChallengeUserInput!
    $condition: ModelChallengeUserConditionInput
  ) {
    deleteChallengeUser(input: $input, condition: $condition) {
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
export const createUserChatRoom = /* GraphQL */ `
  mutation CreateUserChatRoom(
    $input: CreateUserChatRoomInput!
    $condition: ModelUserChatRoomConditionInput
  ) {
    createUserChatRoom(input: $input, condition: $condition) {
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
export const updateUserChatRoom = /* GraphQL */ `
  mutation UpdateUserChatRoom(
    $input: UpdateUserChatRoomInput!
    $condition: ModelUserChatRoomConditionInput
  ) {
    updateUserChatRoom(input: $input, condition: $condition) {
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
export const deleteUserChatRoom = /* GraphQL */ `
  mutation DeleteUserChatRoom(
    $input: DeleteUserChatRoomInput!
    $condition: ModelUserChatRoomConditionInput
  ) {
    deleteUserChatRoom(input: $input, condition: $condition) {
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
export const createUserValidatedCheckIn = /* GraphQL */ `
  mutation CreateUserValidatedCheckIn(
    $input: CreateUserValidatedCheckInInput!
    $condition: ModelUserValidatedCheckInConditionInput
  ) {
    createUserValidatedCheckIn(input: $input, condition: $condition) {
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
export const updateUserValidatedCheckIn = /* GraphQL */ `
  mutation UpdateUserValidatedCheckIn(
    $input: UpdateUserValidatedCheckInInput!
    $condition: ModelUserValidatedCheckInConditionInput
  ) {
    updateUserValidatedCheckIn(input: $input, condition: $condition) {
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
export const deleteUserValidatedCheckIn = /* GraphQL */ `
  mutation DeleteUserValidatedCheckIn(
    $input: DeleteUserValidatedCheckInInput!
    $condition: ModelUserValidatedCheckInConditionInput
  ) {
    deleteUserValidatedCheckIn(input: $input, condition: $condition) {
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
