import { VStack } from "native-base";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "../../../app/hooks";
import { selectChallenges } from "../../../app/selectors";
import StatusContainer from "../../../components/StatusContainer/StatusContainer";
import ChallengeBox from "../ChallengeBox/ChallengeBox";
import { fetchChallenges } from "../challengesSlice";

type Props = {
  boxCount?: number;
};

const ChallengeBoxes = (props: Props) => {
  const { boxCount } = props;

  const { challenges, fetchChallenges: requestStatus } =
    useSelector(selectChallenges);

  const { error, loading } = requestStatus;

  const dispatch = useDispatch();

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
