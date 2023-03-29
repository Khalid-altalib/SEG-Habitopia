import { useDispatch, useSelector } from "@app/hooks";
import StatusContainer from "@components/StatusContainer/StatusContainer";
import React, { useEffect } from "react";
import ChallengeBox from "@features/challenges/ChallengeBox/ChallengeBox";
import ChallengeNavigationButton from "../../ChallengeNavigationButton/ChallengeNavigationButton";
import ChallengeWidgetLayout from "./ChallengeWidgetLayout";
import { fetchChallenges } from "@features/challenges/challengesSlice";
import { View, VStack } from "native-base";

type Props = {};

const CHALLENGES_SNIPPET_LENGTH = 3;

function ChallengeWidget({}: Props) {
  const { challenges, fetchChallenges: requestStatus } = useSelector(
    (state) => state.challenges
  );

  const { loading, error } = requestStatus;

  let shuffledChallenges = [...challenges].sort(() => 0.5 - Math.random());

  shuffledChallenges = shuffledChallenges.slice(0, 3);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChallenges());
  }, []);

  return (
    <>
      <ChallengeWidgetLayout>
        <StatusContainer loading={loading} error={error} data={challenges}>
          <VStack space={5}>
            {shuffledChallenges.map((challenge) => (
              <ChallengeBox challenge={challenge} key={challenge.id} />
            ))}
          </VStack>
        </StatusContainer>
      </ChallengeWidgetLayout>
      <ChallengeNavigationButton />
    </>
  );
}

export default ChallengeWidget;
