// Import necessary modules and types
import { Image, ZStack, useColorModeValue } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import Text from "@components/Text";
import { CheckInSnippetItem, TextType } from "types";
import {
  sendCheckIn,
  setCheckedInSnippetItemStatus,
} from "@features/chat/chatSlice";
import { useDispatch } from "@app/hooks";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import CheckInTime from "../CheckInTime";

type Props = {
  checkInSnippetItem: CheckInSnippetItem; // The CheckInSnippetItem object to display
};

const CheckInBox = (props: Props) => {
  const { checkInSnippetItem } = props;
  const { challenge, endDate, chatId } = checkInSnippetItem;
  const dispatch = useDispatch();

  const handlePress = async () => {
    dispatch(setCheckedInSnippetItemStatus(chatId)); // Update the status of the CheckInSnippetItem to "checked in"
    await dispatch(sendCheckIn(chatId)); // Send a check-in message to the chat
    Toast.show({
      // Show a success message
      type: "success",
      text1: "Successfully checked in!",
    });
  };

  // Calculate the time difference between the endDate and the current time, in hours
  const timeDifference = new Date(endDate).getTime() - new Date().getTime();
  const timeDifferenceHours = Math.round(timeDifference / (1000 * 60 * 60));

  // Render the CheckInBox component
  return (
    <TouchableOpacity
      style={{ marginRight: 25 }}
      onPress={handlePress}
      testID={"checkInBox"}
    >
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
