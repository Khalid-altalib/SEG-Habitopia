import { VStack } from "native-base";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import StatusContainer from "../../../components/StatusContainer/StatusContainer";
import ChallengeBox from "../ChallengeBox/ChallengeBox";
import { fetchChallenges } from "../challengesSlice";

type Props = {};

const ChallengeBoxes = (props: Props) => {
  const { challenges, loading, error } = useAppSelector(
    (state) => state.challenges
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchChallenges());
  }, []);

  return (
    <StatusContainer loading={loading} error={error} data={challenges}>
      <VStack space={4} width={"100%"}>
        {challenges.map((challenge, index) => (
          <ChallengeBox key={index} challenge={challenge} />
        ))}
      </VStack>
    </StatusContainer>
  );
};

export default ChallengeBoxes;
