// Import the necessary modules/components
import CatchUpSlider from "@features/challenges/catchup/CatchUpSlider/CatchUpSlider";
import React from "react";
import CatchUpWidgetLayout from "./CatchUpWidgetLayout";

type Props = {};

const CatchUpWidget = (props: Props) => {
  // Render the CatchUpWidgetLayout component with CatchUpSlider component nested inside
  return (
    <CatchUpWidgetLayout>
      <CatchUpSlider />
    </CatchUpWidgetLayout>
  );
};

export default CatchUpWidget;
