import { Image, ZStack, useColorModeValue } from "native-base";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import CheckInTime from "./CheckInTime";
import Text from "@components/Text";
import { TextType } from "types";

type Props = {
  checkIn: {
    name: string;
    timeLeft: string;
  };
};

const CheckInBox = (props: Props) => {
  const { checkIn } = props;

  return (
    <TouchableOpacity style={{ marginRight: 25 }}>
      <ZStack size="full" style={{ aspectRatio: 1 }}>
        <Image
          source={{ uri: "https://picsum.photos/2000" }}
          alt={checkIn.name}
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
          {checkIn.name}
        </Text>
        <CheckInTime timeLeft={checkIn.timeLeft} />
      </ZStack>
    </TouchableOpacity>
  );
};

export default CheckInBox;
