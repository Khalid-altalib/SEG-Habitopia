import CatchUpSlider from "@features/catchup/CatchUpSlider";
import { View } from "native-base";
import React from "react";
import CatchUpWidgetLayout from "./CatchUpWidgetLayout";

type Props = {};

const CatchUpWidget = (props: Props) => {
  return (
    <View>
      <CatchUpWidgetLayout>
        <CatchUpSlider />
      </CatchUpWidgetLayout>
    </View>
  );
};

export default CatchUpWidget;
