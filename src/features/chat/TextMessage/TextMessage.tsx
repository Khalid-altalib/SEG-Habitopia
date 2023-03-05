import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Message } from "../../../../types";
import { useSelector } from "@app/hooks";

const TextMessage = (message: Message) => {
  const { user } = useSelector((store) => store.auth);
  function isMessage() {
    return message.userID === user?.userId;
  }

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMessage() ? "#DCF8C5" : "white",
          alignSelf: isMessage() ? "flex-end" : "flex-start",
        },
      ]}
    >
      <Text>{message.userName}</Text>
      <Text>{message.text}</Text>
      <Text style={styles.time}>{message.createdAt}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },

  time: {
    color: "gray",
    alignSelf: "flex-end",
  },
});

export default TextMessage;
