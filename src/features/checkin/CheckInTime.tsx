import Text from "@components/Text";
import { Box } from "native-base";
import React from "react";
import { TextType } from "types";

type Props = {
  hoursLeft: number;
  checkedIn: boolean;
};

function CheckInTime(props: Props) {
  const { hoursLeft, checkedIn } = props;
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
        {checkedIn ? "Done!" : `${hoursLeft}h left!`}
      </Text>
    </Box>
  );
}

export default CheckInTime;
