// Importing necessary dependencies and components
import { useDispatch, useSelector } from "@app/hooks";
import StatusContainer from "@components/StatusContainer/StatusContainer";
import React, { useEffect } from "react";
import ChallengeBox from "@features/challenges/ChallengeBox/ChallengeBox";
import ChallengeNavigationButton from "../../ChallengeNavigationButton/ChallengeNavigationButton";
import ChallengeWidgetLayout from "./ChallengeWidgetLayout";
import { fetchChallenges } from "@features/challenges/challengesSlice";
import { VStack } from "native-base";

type Props = {};

// Setting the length of the challenge snippet to be displayed
const CHALLENGES_SNIPPET_LENGTH = 3;

function ChallengeWidget({}: Props) {
  // Retrieving the challenges and request status from the Redux store using the useSelector hook
  const { challenges, fetchChallenges: requestStatus } = useSelector(
    (state) => state.challenges
  );

  const { loading, error } = requestStatus;

  // Shuffling the array of challenges and selecting the first 3 to display as a snippet
  let shuffledChallenges = [...challenges].sort(() => 0.5 - Math.random());
  shuffledChallenges = shuffledChallenges.slice(0, 3);

  // Dispatching the fetchChallenges action to the Redux store on component mount using the useEffect hook
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChallenges());
  }, []);

  // Rendering the ChallengeWidgetLayout component, which contains the StatusContainer and VStack components
  // The VStack component displays the challenge snippet
  // The ChallengeNavigationButton component is also rendered
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
