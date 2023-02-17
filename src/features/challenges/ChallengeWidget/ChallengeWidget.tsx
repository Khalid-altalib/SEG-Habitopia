import { Button } from "native-base";
import React from "react";
import RegularLayout from "../../../components/RegularLayout/RegularLayout";
import ChallengeBoxes from "../ChallengeBoxes/ChallengeBoxes";
import ChallengeLayout from "../ChallengeLayout/ChallengeLayout";
import ChallengeNavigationButton from "../ChallengeNavigationButton/ChallengeNavigationButton";

type Props = {};

function ChallengeWidget({}: Props) {
  return (
    <ChallengeLayout>
      <ChallengeBoxes boxCount={3} />
      <ChallengeNavigationButton />
    </ChallengeLayout>
  );
}

export default ChallengeWidget;
