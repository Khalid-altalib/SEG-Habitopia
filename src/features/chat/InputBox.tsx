import { Button, TextInput, View, StyleSheet } from "react-native";
import React from "react";
import { useDispatch } from "@app/hooks";
import { Controller, useForm } from "react-hook-form";
import { sendMessage } from "./chatSlice";
import { Checkin } from '../../models/index.js';
import { DataStore } from '@aws-amplify/datastore';

const handleCheckIn = async () => {
  try{
  await DataStore.save( // random data
      new Checkin({ // get time now as a string
          timeStamp: new Date().getTime().toString(),
          userID: "b5c0baaf-9cfc-4f75-8f4c-61a39eea57d2", // PLACEHOLDER FOR CURRENT USER
          chatroomID: "a36d9934-b05a-4765-af1d-79619d468eb3" // PLACEHOLDER FOR CURRENT CHATROOM
      })
  );
  } catch (error) {
      console.log("Error saving check in", error);
      }

}

type InputBoxProps = {
  chatRoomID: string;
};

type message = {
  message: string;
};

const InputBox = (props: InputBoxProps) => {
  const dispatch = useDispatch();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      message: "",
    },
  });

  const onSubmit = async (data: message) => {
    const chatRoomID = props.chatRoomID;
    const message = data.message;
    dispatch(sendMessage({ message, chatRoomID }));
    reset();
  };
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            onChangeText={onChange}
            style={styles.input}
            placeholder="type your message"
            value={value}
          />
        )}
        name="message"
      />

      <Button title="send" onPress={handleSubmit(onSubmit)}></Button>
      <Button title="check in"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    paddingHorizontal: 10,
    alignItems: "center",
  },

  input: {
    flex: 1,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 15,
    paddingHorizontal: 10,
    overflow: "scroll",
  },
});

export default InputBox;
