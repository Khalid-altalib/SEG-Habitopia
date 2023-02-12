import React, { useEffect } from "react";
import { ImageBackground, StyleSheet, FlatList, Text } from "react-native";
import data from "../../../assets/data/messages.json";
import Message from "../../features/chat/Message";
import InputBox from "../../features/chat/InputBox";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { ChatParams } from "../../../types";
import { useAppSelector } from "../../app/hooks";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Props = {};

const ChatScreen = (props: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<ChatParams>>();
  const route = useRoute<RouteProp<ChatParams, "IndividualChat">>();
  const { chats } = useAppSelector((store) => store.chats);
  const { id } = route.params;
  useEffect(() => {
    const chat = chats.filter((chat) => chat.id == id)[0];
    navigation.setOptions({ title: chat.name, headerShown: true });
  }, [route.params.id]);
  return (
    <ImageBackground
      source={{ uri: "https://placeholder.com" }}
      style={styles.bg}
    >
      <FlatList
        data={data}
        renderItem={(item) => (
          <Message
            text={item.item.text}
            createdAt={item.item.createdAt}
            userId={item.item.user.id}
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
