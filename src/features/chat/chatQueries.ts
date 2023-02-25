import { DataStore } from "aws-amplify";
import { Chat } from "../../../types";
import { getUserFromDatabase } from "../../app/util";
import { ChatRoom } from "../../models";

export const fetchUserChats = async(thunkAPI: any) => {
    const userChatRooms = (await getUserFromDatabase(thunkAPI)).ChatRooms
    let chats: Chat[] = [];
    for await(const userChat of userChatRooms){
      const chat = (await DataStore.query(ChatRoom, (chatRoom) => chatRoom.id.eq(userChat.chatRoomId)))[0]
      const lastMessage = (await chat.LastMessage)
      chats.push(
        {
            id: chat.id,
            name: "Chatroom",
            text: lastMessage?.text || "",
            time: lastMessage?.createdAt || ""
        } as Chat
      )
    }
    return chats
}