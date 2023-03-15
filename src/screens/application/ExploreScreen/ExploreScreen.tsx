// Habitopia
import Background from "@components/Background";
import ChallengeBoxes from "@features/challenges/ChallengeBoxes/ChallengeBoxes";
import ChallengeLayout from "@features/challenges/ChallengeLayout/ChallengeLayout";

/**
 * A screen which shows a list of all available challenges to the user.
 *
 * @return The component representing the screen.
 */
const ExploreScreen = (): JSX.Element => {
  return (
    <Background>
      <ChallengeLayout>
        <ChallengeBoxes />
      </ChallengeLayout>
    </Background>
  );
};

export default ExploreScreen;
