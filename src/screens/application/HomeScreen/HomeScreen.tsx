// Native Base
import { ScrollView } from "native-base";

// Habitopia
import Background from "@components/Background";
import CatchUpWidget from "@features/challenges/landingPageWidgets/CatchUpWidget/CatchUpWidget";
import ChallengeWidget from "@features/challenges/landingPageWidgets/ChallengeWidget/ChallengeWidget";
import CheckInWidget from "@features/challenges/landingPageWidgets/CheckInWidget/CheckInWidget";
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
