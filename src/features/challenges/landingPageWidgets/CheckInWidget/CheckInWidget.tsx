import { View } from "native-base";
import React from "react";
import CheckInSlider from "../../checkin/CheckInSlider/CheckInSlider";
import CheckInWidgetLayout from "./CheckInWidgetLayout";

type Props = {};

const CheckInWidget = (props: Props) => {
  return (
    <CheckInWidgetLayout>
      <CheckInSlider />
    </CheckInWidgetLayout>
  );
};

export default CheckInWidget;
