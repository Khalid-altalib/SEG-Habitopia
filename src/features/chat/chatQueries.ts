import { DataStore } from "aws-amplify";
import { Chat } from "../../../types";
import { getUserFromDatabase, getUserIdFromThunk } from "../../app/util";
import { ChatRoom, Message } from "../../models";
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
  const chatMessages = await DataStore.query(Message, (message) =>
    message.chatroomID.eq(chatId)
  );
  let messages: MessageType[] = [];
  for await (const chatMessage of chatMessages) {
    messages.push({ ...chatMessage } as MessageType);
  }
  return messages.reverse();
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

export const addChatSubscription = (chatID: string) => {
  const filter = (message: Message) => message.chatroomID === chatID;
  const subscription = DataStore.observe(Message).subscribe((message) => {
    if (message.element.chatroomID === chatID) {
      console.log(message);
    }
  });
  return subscription;
};
