import { Amplify, DataStore, Predicates, SortDirection } from "aws-amplify";
import { Chat, ChatDetails } from "../../../types";
import { getUserFromDatabase, getUserIdFromThunk } from "../../app/util";
import {
  ChatRoom,
  Message,
  Challenge,
  User,
  ChallengeType,
  MessageEnum,
  Checkin,
} from "../../models";
import { Message as MessageType } from "../../../types";

export const fetchUserChats = async (thunkAPI: any) => {
  const userChatRooms = (await getUserFromDatabase(thunkAPI)).ChatRooms;
  let chats: Chat[] = [];
  for await (const userChat of userChatRooms) {
    const chat = (
      await DataStore.query(ChatRoom, (chatRoom) =>
        chatRoom.id.eq(userChat.chatRoomId)
      )
    )[0];
    const lastMessage = await chat.LastMessage;
    chats.push({
      id: chat.id,
      name: "Chatroom",
      text: lastMessage?.text || "",
      time: lastMessage?.createdAt || "",
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

export const fetchChatMessages = async (chatId: string) => {
  const chatMessages = await DataStore.query(
    Message,
    (message) => message.chatroomID.eq(chatId),
    { sort: (message) => message.createdAt(SortDirection.DESCENDING) }
  );
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
  const userFromDatabase = getUserFromDatabase(thunkAPI);
  const newMessage = await DataStore.save(
    new Message({
      chatroomID: chatroomID,
      userID: userID,
      text: message,
      messageType: MessageEnum.TEXT,
    })
  );
  await updateLastMessageInChat(newMessage.id, chatroomID);
  return {
    ...newMessage,
    userName: (await userFromDatabase).name,
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
      started: challegeDetail.started || "Yet to start",
      ending: challegeDetail.finished || "Yet to end",
    },
    participants: users,
  } as ChatDetails;
  return chatDetails;
};

export const sendChatCheckIn = async (chatID: string, thunkAPI: any) => {
  const userID = getUserIdFromThunk(thunkAPI);

  const lastCheckIn = await getLastCheckIn(chatID, thunkAPI);

  if (lastCheckIn) {
    const timeElapsed = Math.floor(
      (new Date().getTime() - new Date(lastCheckIn.createdAt || "").getTime()) /
        86400000
    );
    if (timeElapsed < 1) {
      throw new Error(
        `Already Checked in for the day at ${lastCheckIn.createdAt}! You have ${lastCheckIn.validationCount} validations!`
      );
    } else {
      return createCheckIn(chatID, userID, thunkAPI);
    }
  } else {
    return createCheckIn(chatID, userID, thunkAPI);
  }
};

const createCheckIn = async (chatID: string, userID: string, thunkAPI: any) => {
  const userFromDatabase = await getUserFromDatabase(thunkAPI);
  const checkIn = await DataStore.save(
    new Checkin({
      chatroomID: chatID,
      userID: userID,
      validationCount: 0,
      isValidated: false,
    })
  );

  const checkInMessage = await DataStore.save(
    new Message({
      chatroomID: chatID,
      userID: userID,
      messageType: MessageEnum.CHECKIN,
      getCheckin: checkIn,
      text: "This is a check in",
    })
  );

  return {
    ...checkInMessage,
    userName: userFromDatabase.name,
    messageType: MessageEnum.CHECKIN,
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

export const incrementCheckInValidation = async (messageId: string) => {
  const checkIn = await (
    await DataStore.query(Message, (message) => message.id.eq(messageId))
  )[0].getCheckin;

  if (checkIn) {
    const newCheckIn = await DataStore.save(
      Checkin.copyOf(checkIn, (updated) => {
        updated.validationCount += 1;
      })
    );
    if (checkIn.validationCount === 3) {
      const validatedCheckIn = await DataStore.save(
        Checkin.copyOf(checkIn, (updated) => {
          updated.isValidated = true;
        })
      );
      return validatedCheckIn;
    }
    return newCheckIn;
  } else {
    throw new Error("Could not validate!");
  }
};
