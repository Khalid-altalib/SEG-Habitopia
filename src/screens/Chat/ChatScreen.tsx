import React from "react";
import { ImageBackground, StyleSheet, FlatList, Text } from "react-native";
import data from "../../../assets/data/messages.json";
import Message from "../../features/chat/Message";
import InputBox from "../../features/chat/InputBox";
import { RouteProp, useRoute } from "@react-navigation/native";
import { ChatParams, ChatRouteProps, RootParams } from "../../../types";

type Props = {};

const ChatScreen = (props: Props) => {
  const route = useRoute<RouteProp<RootParams, 'Chat'>>();
  console.log(route);
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
