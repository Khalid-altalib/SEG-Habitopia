import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Pressable, Text, Image, StyleSheet } from "react-native";
import { Chat, ChatParams } from "../../../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import moment from "moment";

const ChatItem = (chat: Chat) => {
  const navigation = useNavigation<NativeStackNavigationProp<ChatParams>>();

  return (
    <Pressable
      onPress={() => {
        navigation.push("IndividualChat", { id: chat.id });
      }}
      style={chatstyles.chatContainer}
    >
      <Image source={{ uri: chat.image }} style={chatstyles.image} />
      <View style={chatstyles.container}>
        <View style={chatstyles.row}>
          <Text style={chatstyles.name} numberOfLines={1}>
            {chat.name}
          </Text>
          <Text>{moment(chat.time).fromNow()}</Text>
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
