import { API, DataStore, graphqlOperation } from "aws-amplify";
import { Chat } from "../../../types";
import { getUserFromDatabase, getUserIdFromThunk } from "../../app/util";
import { ChatRoom, Message } from "../../models";
import { Message as MessageType } from "../../../types";
import { GraphQLSubscription } from "@aws-amplify/api";
import {
  OnCreateMessageSubscription,
  OnCreateMessageSubscriptionVariables,
} from "src/API";
import { onCreateMessage } from "../../graphql/subscriptions";

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
  const variables: OnCreateMessageSubscriptionVariables = {
    filter: {
      // Only receive Todo messages where the "type" field is "Personal"
      chatroomID: { eq: chatID },
    },
  };
  const subscription = API.graphql<
    GraphQLSubscription<OnCreateMessageSubscription>
  >(graphqlOperation(onCreateMessage)).subscribe({
    next: ({ provider, value }) => console.log({ provider, value }),
    error: (error) => console.warn(error),
  });
  return subscription;
};
