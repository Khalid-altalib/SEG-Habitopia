import { Box, Text } from "native-base";
import React from "react";

type Props = {
  timeLeft: string;
};

function CheckInTime(props: Props) {
  const { timeLeft } = props;
  return (
    <Box mt={20} ml={-3}>
      <Text color={"red.600"}>{timeLeft}h left!</Text>
    </Box>
  );
}

export default CheckInTime;
