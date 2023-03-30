// Import necessary modules and components
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

  // Retrieve challenges and fetchChallenges status from the Redux store using the useSelector hook
  const { challenges, fetchChallenges: requestStatus } =
    useSelector(selectChallenges);

  // Destructure error and loading state from the fetchChallenges status object
  const { error, loading } = requestStatus;

  const dispatch = useDispatch();

  // Call fetchChallenges when the component mounts if the challenges array is empty
  useEffect(() => {
    if (challenges.length == 0) {
      dispatch(fetchChallenges());
    }
  }, []);

  return (
    // Render a StatusContainer component to handle loading and error states
    <StatusContainer loading={loading} error={error} data={challenges}>
      {/* Render a VStack container to stack the ChallengeBox components */}
      <VStack space={25} width={"100%"} testID={"challengeBoxes"}>
        {/* Map over the challenges array to render a ChallengeBox component for each challenge */}
        {challenges
          .slice(0, boxCount || challenges.length) // Limit the number of rendered ChallengeBoxes if a boxCount prop is provided
          .map((challenge, index) => (
            <ChallengeBox key={index} challenge={challenge} />
          ))}
      </VStack>
    </StatusContainer>
  );
};

export default ChallengeBoxes;
