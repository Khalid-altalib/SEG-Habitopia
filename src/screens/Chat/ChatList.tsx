import React, { useEffect } from "react";
import { FlatList } from "react-native";
import ChatItem from "../../features/chat/ChatItem";
import { useDispatch, useSelector } from "../../app/hooks";
import { fetchChats } from "../../features/chat/chatSlice";

type Props = {};

const ChatList = (props: Props) => {
  const { chats, fetchChats: requestStatus } = useSelector(
    (state) => state.chats
  );

  const { error, loading } = requestStatus;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChats());
  }, []);

  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => (
        <ChatItem
          id={item.id}
          name={item.name}
          image={item.image}
          text={item.text}
          time={item.time}
        />
      )}
    />
  );
};

export default ChatList;
