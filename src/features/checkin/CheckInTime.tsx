import Text from "@components/Text";
import { Box } from "native-base";
import React from "react";
import { TextType } from "types";

type Props = {
  timeLeft: string;
  checkedIn: boolean;
};

function CheckInTime(props: Props) {
  const { timeLeft, checkedIn } = props;
  return (
    <Box position="absolute" bottom={0}>
      <Text
        type={TextType.Regular}
        color="white"
        style={{
          textShadowColor: "black",
          textShadowRadius: 4,
          padding: 12.25,
        }}
      >
        {checkedIn ? "Done!" : timeLeft}
      </Text>
    </Box>
  );
}

export default CheckInTime;
