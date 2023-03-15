import { HStack } from "native-base";
import React from "react";
import CatchUpBox from "./CatchUpBox";

type Props = {};

const CatchUpSlider = (props: Props) => {
  return (
    <HStack marginLeft={25} marginTop={25} height={150}>
      <CatchUpBox />
    </HStack>
  );
};

export default CatchUpSlider;
