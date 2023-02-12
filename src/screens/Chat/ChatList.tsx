import React from "react";
import { FlatList } from "react-native";
import ChatItem from "../../features/chat/ChatItem";
import { useAppSelector } from "../../app/hooks";

type Props = {};

const ChatList = (props: Props) => {
  const { chats } = useAppSelector((state) => state.chats);

  return (
    <FlatList
      data={chats}
      renderItem={({item}) => (
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
