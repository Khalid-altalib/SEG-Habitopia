import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Pressable, Text, Image, StyleSheet } from "react-native";
import { Chat, ChatParams, RootParams } from "../../../types";

const ChatItem = (chat: Chat) => {
  const navigation = useNavigation<NavigationProp<RootParams>>();

  return (
    <Pressable
      onPress={() => navigation.navigate("Chat", {screen: 'Individual Chat'})}
      style={chatstyles.chatContainer}
    >
      <Image source={{ uri: chat.image }} style={chatstyles.image} />
      <View style={chatstyles.container}>
        <View style={chatstyles.row}>
          <Text style={chatstyles.name} numberOfLines={1}>
            {chat.name}
          </Text>
          <Text>{chat.time}</Text>
        </View>
        <View>
          <Text numberOfLines={2} style={chatstyles.lastMessage}>
            {chat.text}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const chatstyles = StyleSheet.create({
  chatContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    height: 60,
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },

  container: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  row: {
    flexDirection: "row",
    marginBottom: 5,
  },

  name: {
    flex: 1,
  },

  lastMessage: {},
});

export default ChatItem;
