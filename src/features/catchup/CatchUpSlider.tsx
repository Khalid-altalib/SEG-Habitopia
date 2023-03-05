import { HStack } from "native-base";
import React from "react";
import CatchUpBox from "./CatchUpBox";

type Props = {};

const CatchUpSlider = (props: Props) => {
  return (
    <HStack mt={5} justifyContent={"space-between"}>
      <CatchUpBox />
    </HStack>
  );
};

export default CatchUpSlider;
