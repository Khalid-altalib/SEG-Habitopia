import CatchUpSlider from "@features/challenges/catchup/CatchUpSlider/CatchUpSlider";
import { View } from "native-base";
import React from "react";
import CatchUpWidgetLayout from "./CatchUpWidgetLayout";

type Props = {};

const CatchUpWidget = (props: Props) => {
  return (
    <View testID="catchUpWidget">
      <CatchUpWidgetLayout>
        <CatchUpSlider />
      </CatchUpWidgetLayout>
    </View>
  );
};

export default CatchUpWidget;
