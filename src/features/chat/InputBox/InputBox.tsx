import { Button, View, StyleSheet } from "react-native";
import React from "react";
import { useDispatch } from "@app/hooks";
import { Controller, useForm } from "react-hook-form";
import { sendCheckIn, sendMessage } from "../chatSlice";
import {
  HStack,
  IconButton,
  Input,
  theme,
  useColorModeValue,
} from "native-base";
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
    if (message.trim().length > 0) {
      dispatch(sendMessage({ message, chatRoomID }));
      reset();
    }
  };

  const makeCheckIn = () => {
    dispatch(sendCheckIn(props.chatRoomID));
  };
  return (
    <HStack
      style={styles.container}
      space={25 / 2}
      borderTopColor={useColorModeValue(
        theme.colors.gray[300],
        theme.colors.blueGray[900]
      )}
      backgroundColor={useColorModeValue(
        theme.colors.white,
        theme.colors.blueGray[700]
      )}
    >
      <IconButton
        icon={
          <FontAwesome
            name="flag-checkered"
            size={24}
            color={useColorModeValue(
              theme.colors.coolGray[500],
              theme.colors.blueGray[700]
            )}
          />
        }
        variant="solid"
        bgColor={useColorModeValue("coolGray.100", "blueGray.500")}
        _pressed={{
          bgColor: useColorModeValue("coolGray.200", "blueGray.600"),
        }}
        colorScheme="coolGray"
        rounded="full"
        onPress={makeCheckIn}
      />
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            placeholder="Chat"
            value={value}
            returnKeyType="send"
            onSubmitEditing={handleSubmit(onSubmit)}
            style={[
              styles.input,
              {
                backgroundColor: useColorModeValue(
                  theme.colors.coolGray[100],
                  theme.colors.blueGray[500]
                ),
              },
            ]}
            color={useColorModeValue(
              theme.colors.coolGray[500],
              theme.colors.white
            )}
            placeholderTextColor={useColorModeValue(
              theme.colors.coolGray[400],
              theme.colors.blueGray[700]
            )}
            flex={1}
            height="full"
            borderRadius={20}
            paddingX={15}
            paddingY={10}
            borderWidth={0}
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
    borderTopWidth: 1,
  },
  input: {
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    overflow: "scroll",
    height: "100%",
  },
});

export default InputBox;
