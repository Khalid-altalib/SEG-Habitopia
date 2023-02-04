import { is } from "immer/dist/internal";
import React from "react";
import { Text, View, StyleSheet } from "react-native";

type message = {
  text: string;
  createdAt: string;
  userId: string;
};

const Message = (message: message) => {
  function isMessage() {
    return message.userId === "u1";
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

// const styles = StyleSheet.create({

// })

export default Message;
