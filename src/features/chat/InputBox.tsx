import { Button, TextInput, View, StyleSheet } from "react-native";
import React from "react";
import { useDispatch } from "@app/hooks";
import { Controller, useForm } from "react-hook-form";
import { sendMessage, checkIn } from "./chatSlice";
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

  const onCheckIn = async () => {
    console.log("check in");
    const chatRoomID = props.chatRoomID;
    dispatch(checkIn(chatRoomID));
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
      <Button title="check in" onPress={onCheckIn}></Button>
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
