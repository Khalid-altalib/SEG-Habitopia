// Importing necessary dependencies and components
import React from "react";
import CheckInSlider from "../../checkin/CheckInSlider/CheckInSlider";
import CheckInWidgetLayout from "./CheckInWidgetLayout";

type Props = {};

const CheckInWidget = (props: Props) => {
  // Return a render of the check-in widget
  return (
    <CheckInWidgetLayout>
      <CheckInSlider />
    </CheckInWidgetLayout>
  );
};

export default CheckInWidget;
