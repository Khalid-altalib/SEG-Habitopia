import React, { useEffect } from "react";
import { ImageBackground, StyleSheet, FlatList, Text } from "react-native";
import Message from "../../../features/chat/Message";
import InputBox from "../../../features/chat/InputBox";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { ChatParams } from "../../../../types";
import { useDispatch, useSelector } from "../../../app/hooks";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { fetchMessages } from "../../../features/chat/chatSlice";

type Props = {};

const ChatScreen = (props: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<ChatParams>>();
  const route = useRoute<RouteProp<ChatParams, "IndividualChat">>();
  const { chats } = useSelector((store) => store.chats);
  const { id } = route.params;
  const dispatch = useDispatch();
  let chat = chats.filter((chat) => chat.id == id)[0];

  useEffect(() => {
    navigation.setOptions({ title: chat.name, headerShown: true });
  }, [route.params.id]);

  useEffect(() => {
    dispatch(fetchMessages(chat.id));
  }, [chat.messages]);

  return (
    <ImageBackground
      source={{ uri: "https://placeholder.com" }}
      style={styles.bg}
    >
      <FlatList
        data={chat.messages}
        renderItem={({ item }) => (
          <Message
            text={item.text}
            createdAt={item.createdAt}
            userID={item.userID}
          ></Message>
        )}
        style={styles.flatList}
        inverted={true}
      />

      <InputBox chatRoomID={chat.id} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },

  flatList: {
    padding: 10,
  },
});

export default ChatScreen;
