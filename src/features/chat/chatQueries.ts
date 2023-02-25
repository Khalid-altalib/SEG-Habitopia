import { DataStore } from "aws-amplify";
import { Chat } from "../../../types";
import { getUserFromDatabase } from "../../app/util";
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
  return messages;
};
