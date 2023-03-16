import { Button, TextInput, View, StyleSheet } from "react-native";
import React from "react";
import { useDispatch } from "@app/hooks";
import { Controller, useForm } from "react-hook-form";
import { sendCheckIn, sendMessage } from "../chatSlice";

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
    if (message.trim().length > 0) {
      dispatch(sendMessage({ message, chatRoomID }));
      reset();
    }
  };

  const makeCheckIn = () => {
    dispatch(sendCheckIn(props.chatRoomID));
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
            multiline={true}
            maxLength={200}
          />
        )}
        name="message"
      />

      <Button title="send" onPress={handleSubmit(onSubmit)}></Button>
      <Button title="check in" onPress={makeCheckIn}></Button>
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
