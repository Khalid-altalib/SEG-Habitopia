/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
          text
          chatroomID
          userID
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
          text
          chatroomID
          userID
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
          text
          chatroomID
          userID
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      Messages {
        items {
          id
          text
          chatroomID
          userID
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
      Messages {
        items {
          id
          text
          chatroomID
          userID
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
      Messages {
        items {
          id
          text
          chatroomID
          userID
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
