// Native Base
import { ScrollView } from "native-base";

// Habitopia
import Background from "@components/Background";
import CatchUpWidget from "@features/challenges/LandingPageWidgets/CatchUpWidget/CatchUpWidget";
import ChallengeWidget from "@features/challenges/LandingPageWidgets/ChallengeWidget/ChallengeWidget";
import CheckInWidget from "@features/challenges/LandingPageWidgets/CheckInWidget/CheckInWidget";
import AsyncStorage from "@react-native-async-storage/async-storage";

function HomeScreen() {
  return (
    <Background>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CheckInWidget />
        <CatchUpWidget />
        <ChallengeWidget />
      </ScrollView>
    </Background>
  );
}

export default HomeScreen;
