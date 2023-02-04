import React from 'react'
import { FlatList } from 'react-native'
import styles from "../../constants/Styles";
import ChatItem from '../../features/chat/ChatItem';
import chat from '../../../assets/data/chat.json'

type Props = {}

const ChatList = (props: Props) => {
  return (
    /*
        <FlatList data={chats} renderItem({item} => <ChatItem/>)/>
    */

    <FlatList data={chat} renderItem={(item => <ChatItem name={item.item.user.name} 
      image={item.item.user.image}
      text={item.item.lastMessage.text}
      time={item.item.lastMessage.createdAt}
      />)}/>
  )
}

export default ChatList