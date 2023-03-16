import { Image, ZStack, useColorModeValue } from "native-base";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import CheckInTime from "./CheckInTime";
import Text from "@components/Text";
import { CheckInSnippetItem, TextType } from "types";

type Props = {
  checkInSnippetItem: CheckInSnippetItem;
};

const CheckInBox = (props: Props) => {
  const { checkInSnippetItem } = props;
  const { challenge, checkedIn, endDate } = checkInSnippetItem;

  let timeLeft = endDate;

  return (
    <TouchableOpacity style={{ marginRight: 25 }}>
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
        <CheckInTime timeLeft={"3h left!"} checkedIn={checkedIn} />
      </ZStack>
    </TouchableOpacity>
  );
};

export default CheckInBox;
