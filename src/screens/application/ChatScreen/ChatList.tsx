// React
import React from "react";

// React Native
import { FlatList } from "react-native";

// Habitopia
import { useSelector } from "@app/hooks";
import ChatItem from "@features/chat/ChatItem";

type Props = {};

const ChatList = (props: Props) => {
  const { chats } = useSelector((state) => state.chats);

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
