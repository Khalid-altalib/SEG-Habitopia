import React from "react";
import { FlatList } from "react-native";
import ChatItem from "../../features/chat/ChatItem";
import { useAppSelector } from "../../app/hooks";

type Props = {};

const ChatList = (props: Props) => {
  const { chats } = useAppSelector((state) => state.chats);

  return (
    /*
        <FlatList data={chats} renderItem({item} => <ChatItem/>)/>
    */

    <FlatList
      data={chats}
      renderItem={(item) => (
        <ChatItem
          id={item.item.id}
          name={item.item.name}
          image={item.item.image}
          text={item.item.text}
          time={item.item.time}
        />
      )}
    />
  );
};

export default ChatList;
