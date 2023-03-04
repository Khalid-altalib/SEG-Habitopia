import { Amplify, DataStore, Predicates, SortDirection } from "aws-amplify";
import { Chat, ChatDetails, CheckIn } from "../../../types";
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
    messages.push({ ...chatMessage } as MessageType);
  }
  console.log(messages);
  return messages;
};

export const sendChatMessage = async (
  message: string,
  chatroomID: string,
  thunkAPI: any
) => {
  const userID = getUserIdFromThunk(thunkAPI);
  const newMessage = await DataStore.save(
    new Message({
      chatroomID: chatroomID,
      userID: userID,
      text: message,
      messageType: MessageEnum.TEXT,
    })
  );
  await updateLastMessageInChat(newMessage.id, chatroomID);
  return { ...newMessage } as MessageType;
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
    console.log("test");
    const timeElapsed = Math.floor(
      (new Date().getTime() - new Date(lastCheckIn.createdAt).getTime()) /
        86400000
    );
    console.log(timeElapsed);
    if (timeElapsed < 1) {
      throw new Error(
        `Already Checked in for the day at ${lastCheckIn.createdAt}! You have ${lastCheckIn.validationCount} validations!`
      );
    }
  }

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

  return { ...checkInMessage } as CheckIn;
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
  console.log(lastCheckInByUser);
  return lastCheckInByUser;
};
