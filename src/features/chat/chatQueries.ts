import { DataStore, SortDirection } from "aws-amplify";
import { Chat, ChatDetails, CheckInSnippetItem } from "../../../types";
import {
  getUserFromDatabase,
  getUserFromDatabasebyID,
  getUserIdFromThunk,
} from "../../app/util";
import {
  ChatRoom,
  Message,
  Challenge,
  User,
  MessageEnum,
  Checkin,
  UserValidatedCheckIn,
  ChallengeType,
  ChallengeStatusEnum,
  ChallengeUser,
} from "../../models";
import { Message as MessageType } from "../../../types";
import moment from "moment";
import {
  ALREADY_VALIDATED_ERROR,
  CHECK_IN_MESSAGE,
  COULD_NOT_VALIDATE,
  MESSAGE_PAGINATION_LIMIT,
  VALIDATION_COUNT,
  VALIDATION_MESSAGE_TEXT,
} from "@features/constants";

export const fetchUserChats = async (thunkAPI: any) => {
  const userChatRooms = (await getUserFromDatabase(thunkAPI)).ChatRooms;
  let chats: Chat[] = [];
  for await (const userChat of userChatRooms) {
    const chat = (
      await DataStore.query(ChatRoom, (chatRoom) =>
        chatRoom.id.eq(userChat.chatRoomId || "")
      )
    )[0];
    const lastMessage = await chat.LastMessage;
    const time = new Date().toISOString();
    chats.push({
      id: chat.id,
      name: chat.name,
      text: lastMessage?.text || "Welcome to the chat!",
      time: lastMessage?.createdAt || time,
      unreadMessages: 0,
    } as Chat);
  }
  chats.sort((a: Chat, b: Chat) => {
    if (a.time && b.time) {
      return b.time?.localeCompare(a.time);
    } else {
      return 0;
    }
  });
  return chats;
};

export const fetchChatMessages = async (chatId: string, pageNumber: number) => {
  const numberOfMessageInChat = (
    await DataStore.query(Message, (message) => message.chatroomID.eq(chatId))
  ).length;
  if (numberOfMessageInChat === 1 && pageNumber != 0) {
    throw new Error("No more messages found!");
  }
  const chatMessages = await DataStore.query(
    Message,
    (message) => message.chatroomID.eq(chatId),
    {
      sort: (message) => message.createdAt(SortDirection.DESCENDING),
      page: pageNumber,
      limit: MESSAGE_PAGINATION_LIMIT,
    }
  );
  if (chatMessages.length === 0) {
    throw new Error("No more messages found!");
  }
  let messages: MessageType[] = [];
  for await (const chatMessage of chatMessages) {
    const messageChat = { ...chatMessage };
    const user = (
      await DataStore.query(User, (user) => user.id.eq(messageChat.userID))
    )[0];
    if (messageChat.messageType === MessageEnum.CHECKIN) {
      const checkInDetails = (
        await DataStore.query(Checkin, (checkin) =>
          checkin.id.eq(messageChat.messageGetCheckinId || "")
        )
      )[0];
      messages.push({
        ...messageChat,
        userName: user.name,
        isValidated: checkInDetails.isValidated,
        validationCount: checkInDetails.validationCount,
      } as MessageType);
    } else {
      messages.push({ ...messageChat, userName: user.name } as MessageType);
    }
  }
  return messages;
};

export const sendChatMessage = async (
  message: string,
  chatroomID: string,
  thunkAPI: any
) => {
  const userID = getUserIdFromThunk(thunkAPI);
  const userFromDatabase = await getUserFromDatabase(thunkAPI);
  const newMessage = await DataStore.save(
    new Message({
      chatroomID: chatroomID,
      userID: userID,
      text: message,
      messageType: MessageEnum.TEXT,
    })
  );

  await updateLastMessageInChat(newMessage.id, chatroomID);
  const time = new Date().toISOString();
  return {
    ...newMessage,
    userName: userFromDatabase.name,
    createdAt: time,
  } as MessageType;
};

const updateLastMessageInChat = async (
  messageID: string,
  chatroomID: string
) => {
  const chatRoom = (
    await DataStore.query(ChatRoom, (chatRoom) => chatRoom.id.eq(chatroomID))
  )[0];
  await DataStore.save(
    ChatRoom.copyOf(chatRoom, (updated) => {
      updated.chatRoomLastMessageId = messageID;
    })
  );
};

export const getChatDetails = async (chatId: string) => {
  const challegeDetail = (
    await DataStore.query(Challenge, (challenge) =>
      challenge.challengeChatRoomId.eq(chatId)
    )
  )[0];

  const challengeTypeDetails = (
    await DataStore.query(ChallengeType, (challengeType) =>
      challengeType.id.eq(challegeDetail.challengeChallengeTypeId)
    )
  )[0];

  const users: { userId: string; name: string }[] = [];
  for await (const participant of challegeDetail.Users) {
    const user = (
      await DataStore.query(User, (user) =>
        user.id.eq(participant.userId || "")
      )
    )[0];
    users.push({
      userId: user.id,
      name: user.name || "",
    });
  }
  const chatDetails = {
    challengeName: challengeTypeDetails.name,
    description: challengeTypeDetails.description,
    statistics: {
      num: challegeDetail.userCount,
      status: challegeDetail.status,
    },
    participants: users,
  } as ChatDetails;
  return chatDetails;
};

export const sendChatCheckIn = async (chatID: string, thunkAPI: any) => {
  const challengeStatus = (
    await DataStore.query(Challenge, (challenge) =>
      challenge.challengeChatRoomId.eq(chatID)
    )
  )[0].status;
  switch (challengeStatus) {
    case ChallengeStatusEnum.COMPLETED:
      throw new Error("Challenge has ended!");
    case ChallengeStatusEnum.INACTIVE:
      throw new Error("Challenge has not started!");
    default:
      break;
  }
  const userID = getUserIdFromThunk(thunkAPI);

  const lastCheckIn = await getLastCheckIn(chatID, thunkAPI);

  if (lastCheckIn) {
    const timeElapsed = Math.floor(
      (new Date().getTime() - new Date(lastCheckIn.createdAt || "").getTime()) /
        86400000
    );
    if (timeElapsed < 1) {
      throw new Error(
        `Already checked in for the day ${moment(
          lastCheckIn.createdAt
        ).fromNow()}!`
      );
    } else {
      return createCheckIn(chatID, userID, thunkAPI);
    }
  } else {
    return createCheckIn(chatID, userID, thunkAPI);
  }
};

const createCheckIn = async (chatID: string, userID: string, thunkAPI: any) => {
  const challengeTypeId = (
    await DataStore.query(Challenge, (challenge) =>
      challenge.challengeChatRoomId.eq(chatID)
    )
  )[0].challengeChallengeTypeId;
  const challengeType = (
    await DataStore.query(ChallengeType, (challengeType) =>
      challengeType.id.eq(challengeTypeId)
    )
  )[0];
  const userFromDatabase = await getUserFromDatabase(thunkAPI);
  const checkIn = await DataStore.save(
    new Checkin({
      chatroomID: chatID,
      userID: userID,
      validationCount: 0,
      isValidated: false,
      checkinChallengeTypeId: challengeTypeId,
      ChallengeType: challengeType,
    })
  );

  const checkInMessage = await DataStore.save(
    new Message({
      chatroomID: chatID,
      userID: userID,
      messageType: MessageEnum.CHECKIN,
      getCheckin: checkIn,
      text: CHECK_IN_MESSAGE,
    })
  );

  await updateLastMessageInChat(checkInMessage.id, chatID);
  const time = new Date().toISOString();
  return {
    ...checkInMessage,
    userName: userFromDatabase.name,
    messageType: MessageEnum.CHECKIN,
    validationCount: 0,
    isValidated: false,
    createdAt: time,
  } as MessageType;
};

const getLastCheckIn = async (chatID: string, thunkAPI: any) => {
  const userID = await getUserIdFromThunk(thunkAPI);
  const lastCheckInByUser = (
    await DataStore.query(
      Checkin,
      (checkIn) =>
        checkIn.and((checkIn) => [
          checkIn.userID.eq(userID),
          checkIn.chatroomID.eq(chatID),
        ]),
      {
        sort: (checkIn) => checkIn.createdAt(SortDirection.DESCENDING),
      }
    )
  )[0];
  return lastCheckInByUser;
};

export const incrementCheckInValidation = async (
  messageId: string,
  thunkAPI: any
) => {
  const checkInId = (
    await DataStore.query(Message, (message) => message.id.eq(messageId))
  )[0].messageGetCheckinId;

  const checkIn = (
    await DataStore.query(Checkin, (checkIn) => checkIn.id.eq(checkInId || ""))
  )[0];

  const user = await getUserFromDatabase(thunkAPI);

  if (checkIn) {
    const validatedBy = await checkIn.validatedBy.toArray();
    const canValidate = validatedBy.filter(
      (validateUser) => validateUser.userId === user.id
    );
    if (canValidate.length >= 1) {
      throw new Error(ALREADY_VALIDATED_ERROR);
    } else {
      await DataStore.save(
        new UserValidatedCheckIn({
          checkin: checkIn,
          user: user,
        })
      );
      const newCheckIn = await DataStore.save(
        Checkin.copyOf(checkIn, (updated) => {
          updated.validationCount = validatedBy.length + 1;
        })
      );
      if (newCheckIn.validationCount === VALIDATION_COUNT) {
        const validatedCheckIn = await DataStore.save(
          Checkin.copyOf(checkIn, (updated) => {
            updated.isValidated = true;
          })
        );
        const checkInUser = await getUserFromDatabasebyID(
          validatedCheckIn.userID
        );
        const time = new Date().toISOString();
        const message = await VALIDATION_MESSAGE_TEXT(
          ...[checkInUser.name || "", validatedCheckIn.createdAt || ""]
        );
        const validationMessage = await DataStore.save(
          new Message({
            chatroomID: validatedCheckIn.chatroomID,
            userID: user.id,
            messageType: MessageEnum.VALIDATION,
            text: message,
          })
        );
        updateLastMessageInChat(
          validationMessage.id,
          validationMessage.chatroomID
        );
        return validatedCheckIn;
      } else {
        return newCheckIn;
      }
    }
  } else {
    throw new Error(COULD_NOT_VALIDATE);
  }
};

export const getCheckInById = async (checkInId: string) => {
  const checkIn = (
    await DataStore.query(Checkin, (checkin) => checkin.id.eq(checkInId))
  )[0];
  return checkIn;
};

export const getMessageByCheckInId = async (checkInId: string) => {
  const message = (
    await DataStore.query(Message, (message) =>
      message.messageGetCheckinId.eq(checkInId)
    )
  )[0];
  return message;
};

export const getMessageById = async (id: string) => {
  const message = (
    await DataStore.query(Message, (message) => message.id.eq(id))
  )[0];
  return message;
};

export const getCheckInSnippets = async (thunkAPI: any) => {
  const user = await getUserFromDatabase(thunkAPI);
  const userChallenges = await DataStore.query(ChallengeUser, (challenge) =>
    challenge.userId.eq(user.id)
  );
  const date = new Date().getTime();
  const checkIns: CheckInSnippetItem[] = [];
  for await (const userChallenge of userChallenges) {
    const challenge = (
      await DataStore.query(Challenge, (challenge) =>
        challenge.id.eq(userChallenge.challengeId || "")
      )
    )[0];
    const challengeTypeDetails = (
      await DataStore.query(ChallengeType, (challengeType) =>
        challengeType.id.eq(challenge.challengeChallengeTypeId)
      )
    )[0];
    const lastCheckIn = await getLastCheckIn(
      challenge.challengeChatRoomId || "",
      thunkAPI
    );
    const isActive =
      challenge.status === ChallengeStatusEnum.ACTIVE ? true : false;
    if (lastCheckIn) {
      const timeElapsed = Math.floor(
        (date - new Date(lastCheckIn.createdAt || "").getTime()) / 86400000
      );
      if (timeElapsed > 1) {
        checkIns.push({
          challenge: {
            id: challenge.id,
            name: challengeTypeDetails.id,
            active: isActive,
            description: challengeTypeDetails.description,
          },
          checkedIn: false,
        });
      }
    } else {
      checkIns.push({
        challenge: {
          id: challenge.id,
          name: challengeTypeDetails.id,
          active: isActive,
          description: challengeTypeDetails.description,
        },
        checkedIn: false,
      });
    }
  }
};
