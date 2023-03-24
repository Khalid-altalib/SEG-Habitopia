// Native Base
import { ScrollView } from "native-base";

// Habitopia
import Background from "@components/Background";
import CatchUpWidget from "@features/LandingPageWidgets/CatchUpWidget/CatchUpWidget";
import ChallengeWidget from "@features/LandingPageWidgets/ChallengeWidget/ChallengeWidget";
import CheckInWidget from "@features/LandingPageWidgets/CheckInWidget/CheckInWidget";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DataStore } from "aws-amplify";

function HomeScreen() {
  AsyncStorage.clear();
  DataStore.clear();
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
