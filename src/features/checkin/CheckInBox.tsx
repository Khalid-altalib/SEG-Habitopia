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
      <ZStack padding={5} width={150}>
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          alt="Alternate Text"
          size="xl"
          rounded="xl"
        />
        <Heading fontSize="md" shadow={1} ml={2} mt={1}>
          {checkIn.name}
        </Heading>
        <CheckInTime timeLeft={checkIn.timeLeft} />
      </ZStack>
    </TouchableOpacity>
  );
};

export default CheckInBox;
