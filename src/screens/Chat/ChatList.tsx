import React from 'react'
import { FlatList } from 'react-native'
import styles from "../../constants/Styles";
import ChatItem from '../../features/chat/ChatItem';

let arr = [1,2]

type Props = {}

const ChatList = (props: Props) => {
  return (
    /*
        <FlatList data={chats} renderItem({item} => <ChatItem/>)/>
    */

    <FlatList data={arr} renderItem={(arr => <ChatItem/>)}/>
  )
}

export default ChatList