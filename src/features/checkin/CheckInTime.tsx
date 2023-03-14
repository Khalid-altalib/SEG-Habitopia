import { Box, Text } from "native-base";
import React from "react";

type Props = {
  timeLeft: string;
};

function CheckInTime(props: Props) {
  const { timeLeft } = props;
  return (
    <Box position="absolute" bottom={0} padding={2}>
      <Text
        style={{
          textShadowColor: "black",
          textShadowRadius: 4,
        }}
        color="white"
      >
        {timeLeft}h left!
      </Text>
    </Box>
  );
}

export default CheckInTime;
