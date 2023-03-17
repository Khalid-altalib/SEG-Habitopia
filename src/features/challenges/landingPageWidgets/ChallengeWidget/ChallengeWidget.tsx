import React from "react";
import ChallengeBoxes from "../../ChallengeBoxes/ChallengeBoxes";
import ChallengeNavigationButton from "../../ChallengeNavigationButton/ChallengeNavigationButton";
import ChallengeWidgetLayout from "./ChallengeWidgetLayout";

type Props = {};

function ChallengeWidget({}: Props) {
  return (
    <ChallengeWidgetLayout>
      <ChallengeBoxes boxCount={3} />
      <ChallengeNavigationButton />
    </ChallengeWidgetLayout>
  );
}

export default ChallengeWidget;
