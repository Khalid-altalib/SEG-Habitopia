// React
import React, { useEffect } from "react";

// React Native
import { ImageBackground, StyleSheet, FlatList } from "react-native";

// React Navigation
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
<<<<<<< HEAD:src/screens/Chat/ChatScreen.tsx
import { Chat, ChatParams } from "../../../types";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
=======
>>>>>>> aa5dbfec91653e51bdaac120103ec8fd26e28616:src/screens/application/ChatScreen/ChatScreen.tsx
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { fetchMessages } from "../../features/chat/chatSlice";

// Habitopia
import data from "@assets/data/messages.json";
import { useSelector } from "@app/hooks";
import Message from "@features/chat/Message";
import InputBox from "@features/chat/InputBox";
import { ChatParams } from "types";

type Props = {};

const ChatScreen = (props: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<ChatParams>>();
  const route = useRoute<RouteProp<ChatParams, "IndividualChat">>();
  const { chats } = useSelector((store) => store.chats);
  const { id } = route.params;
  const dispatch = useAppDispatch();
  let chat = chats.filter((chat) => chat.id == id)[0];

  useEffect(() => {
    navigation.setOptions({ title: chat.name, headerShown: true });
    dispatch(fetchMessages(chat.id));
  }, [route.params.id]);

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
        inverted
      />

      <InputBox />
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
