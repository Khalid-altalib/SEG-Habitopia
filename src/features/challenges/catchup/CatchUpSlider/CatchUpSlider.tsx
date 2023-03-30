// Import HStack from the Native Base library
import { HStack } from "native-base";

// Import React from the React library
import React from "react";

// Import the CatchUpBox component from the CatchUpBox file
import CatchUpBox from "../CatchUpBox/CatchUpBox";

type Props = {};

const CatchUpSlider = (props: Props) => {
  // Render an HStack with a CatchUpBox component inside
  // The CatchUpBox component is initialized with the isUserLiked prop set to false
  return (
    <HStack mt={5} justifyContent={"space-between"} testID={"catchUpSlider"}>
      <CatchUpBox isUserLiked={false} />
    </HStack>
  );
};

export default CatchUpSlider;
