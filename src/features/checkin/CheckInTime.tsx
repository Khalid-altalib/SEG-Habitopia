import Text from "@components/Text";
import { Box } from "native-base";
import React from "react";
import { TextType } from "types";

type Props = {
  hoursLeft: number;
};

function CheckInTime(props: Props) {
  const { hoursLeft } = props;
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
        {`${hoursLeft}h left!`}
      </Text>
    </Box>
  );
}

export default CheckInTime;
