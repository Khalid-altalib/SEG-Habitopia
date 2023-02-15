import React from "react";
import { StyleProp, TextStyle } from "react-native";
import { Box, Text } from "native-base";

type Props = {
  onGoing: boolean;
};

const ChallengeOnGoingText = (props: Props) => {
  const { onGoing } = props;
  return onGoing ? (
    <Box backgroundColor="red.500" paddingY={1} paddingX={2} borderRadius={4}>
      <Text bold>On-going</Text>
    </Box>
  ) : null;
};

export default ChallengeOnGoingText;
