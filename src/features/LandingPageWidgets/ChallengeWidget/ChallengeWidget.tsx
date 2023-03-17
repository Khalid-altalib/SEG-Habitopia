import React from "react";
import ChallengeBoxes from "../../challenges/ChallengeBoxes/ChallengeBoxes";
import ChallengeNavigationButton from "../../challenges/ChallengeNavigationButton/ChallengeNavigationButton";
import ChallengeWidgetLayout from "./ChallengeWidgetLayout";

type Props = {};

function ChallengeWidget({}: Props) {
  return (
    <>
      <ChallengeWidgetLayout>
        <ChallengeBoxes boxCount={3} />
      </ChallengeWidgetLayout>
      <ChallengeNavigationButton />
    </>
  );
}

export default ChallengeWidget;
