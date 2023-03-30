// Import necessary modules and types
import Text from "@components/Text";
import { Box } from "native-base";
import React from "react";
import { TextType } from "types";

type Props = {
  hoursLeft: number; // Hours left for the check-in
};

function CheckInTime(props: Props) {
  const { hoursLeft } = props;

  // Render a Box component with a Text child to display the hours left until the challenge ends.
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
