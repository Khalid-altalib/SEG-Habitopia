import React from "react";
import CheckInSlider from "../../checkin/CheckInSlider";
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
