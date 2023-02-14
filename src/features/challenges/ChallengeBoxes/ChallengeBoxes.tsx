import { VStack } from "native-base";
import React from "react";
import { useAppSelector } from "../../../app/hooks";
import StatusContainer from "../../../components/StatusContainer/StatusContainer";
import ChallengeBox from "../ChallengeBox/ChallengeBox";

type Props = {};

const ChallengeBoxes = (props: Props) => {
  const { challenges, loading, error } = useAppSelector(
    (state) => state.challenges
  );

  const allChallenges = [
    {
      name: "Sleep",
      description: "Study everyday for a minimum of 5 hours or u not sigma lol",
      active: true,
    },
    {
      name: "Food",
      description: "Sleep earlier or u not sigma lol",
      active: true,
    },
    {
      name: "Fitness",
      description: "jim or u not sigma lol",
      active: false,
    },
    {
      name: "Sleep",
      description: "Study everyday for a minimum of 5 hours or u not sigma lol",
      active: true,
    },
    {
      name: "Food",
      description: "Sleep earlier or u not sigma lol",
      active: true,
    },
    {
      name: "Fitness",
      description: "jim or u not sigma lol",
      active: false,
    },
  ]; // useAppSelector((state) => state.challenges.challenges); BACKEND_PLACEHOLDER

  // useEffect(() => {
  //   dispatch(fetchChallenges());
  // });

  return (
    <StatusContainer loading={loading} error={error} data={allChallenges}>
      <VStack space={4} width={"100%"}>
        {allChallenges.map((challenge, index) => (
          <ChallengeBox key={index} challenge={challenge} />
        ))}
      </VStack>
    </StatusContainer>
  );
};

export default ChallengeBoxes;
