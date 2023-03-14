// Native Base
import { ScrollView } from "native-base";

// Habitopia
import Background from "@components/Background";
import CatchUpWidget from "@features/LandingPageWidgets/CatchUpWidget/CatchUpWidget";
import ChallengeWidget from "@features/LandingPageWidgets/ChallengeWidget/ChallengeWidget";
import CheckInWidget from "@features/LandingPageWidgets/CheckInWidget/CheckInWidget";

function HomeScreen() {
  return (
    <Background>
      <ScrollView mt={5} mb={5} showsVerticalScrollIndicator={false}>
        <CheckInWidget />
        <CatchUpWidget />
        <ChallengeWidget />
      </ScrollView>
    </Background>
  );
}

export default HomeScreen;
