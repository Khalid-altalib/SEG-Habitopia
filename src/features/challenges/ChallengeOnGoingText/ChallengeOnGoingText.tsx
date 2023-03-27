import React from "react";
import { Box } from "native-base";
import Text from "@components/Text";
import { TextType } from "types";

type Props = {
  onGoing: boolean;
};

const ChallengeOnGoingText = (props: Props) => {
  const { onGoing } = props;
  return onGoing ? (
    <Box backgroundColor="red.500" paddingY={1} paddingX={2} borderRadius={4}>
      <Text type={TextType.Regular} color="white">
        On-going
      </Text>
    </Box>
  ) : null;
};

export default ChallengeOnGoingText;
