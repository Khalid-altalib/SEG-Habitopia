// Import necessary modules and types
import React from "react";
import { Box } from "native-base";
import Text from "@components/Text";
import { TextType } from "types";

type Props = {
  onGoing: boolean; // Indicates whether the challenge is ongoing
};

const ChallengeOnGoingText = (props: Props) => {
  const { onGoing } = props;
  return onGoing ? ( // Render the following if onGoing is true, otherwise return null
    <Box backgroundColor="red.500" paddingY={1} paddingX={2} borderRadius={4}>
      <Text type={TextType.Regular} color="white">
        On-going
      </Text>
    </Box>
  ) : null;
};

export default ChallengeOnGoingText;
