import { HStack } from "native-base";
import React from "react";
import CatchUpBox from "../CatchUpBox/CatchUpBox";

type Props = {};

const CatchUpSlider = (props: Props) => {
  return (
    <HStack mt={5} justifyContent={"space-between"} testID={"catchUpSlider"}>
      <CatchUpBox isUserLiked={false} />
    </HStack>
  );
};

export default CatchUpSlider;
