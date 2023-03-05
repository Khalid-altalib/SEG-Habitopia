import { Pressable, View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Message } from "types";
import { useSelector } from "@app/hooks";
import { useDispatch } from "react-redux";

const CheckInMessage = (message: Message) => {
  const [validate, setValidate] = useState(false);
  const { user } = useSelector((store) => store.auth);
  function isMessage() {
    return message.userID === user?.userId;
  }
  const dispatch = useDispatch();

  const validateCheckIn = () => {
    if (!isMessage() && !validate) {
    }
  };

  return (
    <Pressable onPress={validateCheckIn}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: message.isValidated ? "#33FF71" : "#FF3633",
          },
        ]}
      >
        <Text>{message.userName}</Text>
        <Text>{message.text}</Text>
        <Text style={styles.time}>{message.createdAt}</Text>
        {isMessage() ? (
          <Text style={styles.count}>
            You have {message.validationCount} validations
          </Text>
        ) : (
          <Text>Tap to validate</Text>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 20,
  },

  time: {
    color: "black",
    alignSelf: "flex-end",
  },

  count: {
    color: "black",
    alignSelf: "flex-start",
  },
});

export default CheckInMessage;
