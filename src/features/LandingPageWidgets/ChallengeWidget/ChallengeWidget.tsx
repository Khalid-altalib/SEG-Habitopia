import { useSelector } from "@app/hooks";
import StatusContainer from "@components/StatusContainer/StatusContainer";
import React from "react";
import ChallengeBox from "@features/challenges/ChallengeBox/ChallengeBox";
import ChallengeNavigationButton from "../../challenges/ChallengeNavigationButton/ChallengeNavigationButton";
import ChallengeWidgetLayout from "./ChallengeWidgetLayout";

type Props = {};

const CHALLENGES_SNIPPET_LENGTH = 3;

function ChallengeWidget({}: Props) {
  const { challenges, fetchChallenges: requestStatus } = useSelector(
    (state) => state.challenges
  );

  const { loading, error } = requestStatus;

  const shuffledChallenges = challenges.sort(() => 0.5 - Math.random());

  const previewedChallenges = shuffledChallenges.slice(0, 3);

  return (
    <>
      <ChallengeWidgetLayout>
        <StatusContainer loading={loading} error={error} data={challenges}>
          {previewedChallenges.map((challenge) => (
            <ChallengeBox challenge={challenge} />
          ))}
        </StatusContainer>
      </ChallengeWidgetLayout>
      <ChallengeNavigationButton />
    </>
  );
}

export default ChallengeWidget;
