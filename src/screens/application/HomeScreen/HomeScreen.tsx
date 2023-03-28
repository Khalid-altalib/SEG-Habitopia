// Native Base
import { ScrollView } from "native-base";

// Habitopia
import Background from "@components/Background";
import ChallengeWidget from "@features/challenges/landingPageWidgets/ChallengeWidget/ChallengeWidget";
import CheckInWidget from "@features/challenges/landingPageWidgets/CheckInWidget/CheckInWidget";

function HomeScreen() {
  return (
    <Background>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CheckInWidget />
        <ChallengeWidget />
      </ScrollView>
    </Background>
  );
}

export default HomeScreen;
