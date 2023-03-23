import { Image, ZStack, useColorModeValue } from "native-base";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import CheckInTime from "./CheckInTime";
import Text from "@components/Text";
import { ChatParams, CheckInSnippetItem, TextType } from "types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  sendCheckIn,
  setCheckedInSnippetItemStatus,
} from "@features/chat/chatSlice";
import { useDispatch } from "@app/hooks";
import { Toast } from "react-native-toast-message/lib/src/Toast";

type Props = {
  checkInSnippetItem: CheckInSnippetItem;
};

const CheckInBox = (props: Props) => {
  const { checkInSnippetItem } = props;
  const { challenge, endDate, chatId } = checkInSnippetItem;

  const dispatch = useDispatch();

  const handlePress = async () => {
    dispatch(setCheckedInSnippetItemStatus(chatId));
    await dispatch(sendCheckIn(chatId));
    Toast.show({
      type: "success",
      text1: "Successfully checked in!",
    });
  };

  const timeDifference = new Date(endDate).getTime() - new Date().getTime();
  const timeDifferenceHours = Math.round(timeDifference / (1000 * 60 * 60));

  return (
    <TouchableOpacity style={{ marginRight: 25 }} onPress={handlePress}>
      <ZStack size="full" style={{ aspectRatio: 1 }}>
        <Image
          source={{ uri: "https://picsum.photos/2000" }}
          alt={challenge.name}
          size="full"
          rounded="lg"
          position="absolute"
          style={{
            borderColor: useColorModeValue("#00000011", "#ffffff11"),
            borderWidth: 2,
          }}
        />
        <Text
          type={TextType.Regular}
          color="white"
          style={{
            textShadowColor: "black",
            textShadowRadius: 4,
            padding: 12.25,
          }}
        >
          {challenge.name}
        </Text>
        <CheckInTime hoursLeft={timeDifferenceHours} />
      </ZStack>
    </TouchableOpacity>
  );
};

export default CheckInBox;
