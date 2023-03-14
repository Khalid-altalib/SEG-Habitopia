import { Image, ZStack, Heading } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import CheckInTime from "./CheckInTime";

type Props = {
  checkIn: {
    name: string;
    timeLeft: string;
  };
};

const CheckInBox = (props: Props) => {
  const { checkIn } = props;
  return (
    <TouchableOpacity>
      <ZStack size="full" style={{ aspectRatio: 5 / 6 }}>
        <Image
          source={{ uri: "https://picsum.photos/2000" }}
          alt={checkIn.name}
          size="full"
          rounded="lg"
          position="absolute"
        />
        <Heading
          fontSize="md"
          style={{ textShadowColor: "black", textShadowRadius: 4 }}
          padding={2}
        >
          {checkIn.name}
        </Heading>
        <CheckInTime timeLeft={checkIn.timeLeft} />
      </ZStack>
    </TouchableOpacity>
  );
};

export default CheckInBox;
