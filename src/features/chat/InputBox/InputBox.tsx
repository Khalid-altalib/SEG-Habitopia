import { Button, TextInput, View, StyleSheet } from "react-native";
import React from "react";
import { useDispatch } from "@app/hooks";
import { Controller, useForm } from "react-hook-form";
import { sendCheckIn, sendMessage } from "../chatSlice";
import { HStack, IconButton, theme } from "native-base";
import { FontAwesome } from "@expo/vector-icons";

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

  const makeCheckIn = () => {
    dispatch(sendCheckIn(props.chatRoomID));
  };
  return (
    <HStack style={styles.container} space={25 / 2}>
      <IconButton
        icon={
          <FontAwesome
            name="flag-checkered"
            size={24}
            color={theme.colors.coolGray[500]}
          />
        }
        variant="solid"
        bgColor="coolGray.100"
        _pressed={{ bgColor: "coolGray.200" }}
        colorScheme="coolGray"
        rounded="full"
        onPress={makeCheckIn}
      />
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            onChangeText={onChange}
            style={styles.input}
            placeholder="Chat"
            value={value}
            returnKeyType="send"
            onSubmitEditing={handleSubmit(onSubmit)}
          />
        )}
        name="message"
      />
    </HStack>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    backgroundColor: "white",
    borderTopColor: theme.colors.gray[300],
    borderTopWidth: 1,
  },
  input: {
    flex: 1,
    backgroundColor: theme.colors.coolGray[100],
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    overflow: "scroll",
    height: "100%",
  },
});

export default InputBox;
