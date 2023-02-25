import React from "react";
import ChallengeBoxes from "@features/challenges/ChallengeBoxes/ChallengeBoxes";
import ChallengeLayout from "@features/challenges/ChallengeLayout/ChallengeLayout";

type Props = {};

function ChallengesScreen(props: Props) {
  return (
    <ChallengeLayout>
      <ChallengeBoxes />
    </ChallengeLayout>
  );
}

export default ChallengesScreen;
