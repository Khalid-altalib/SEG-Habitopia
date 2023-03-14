import CatchUpWidget from "@features/LandingPageWidgets/CatchUpWidget/CatchUpWidget";
import ChallengeWidget from "@features/LandingPageWidgets/ChallengeWidget/ChallengeWidget";
import CheckInWidget from "@features/LandingPageWidgets/CheckInWidget/CheckInWidget";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TitleSection from "@screens/authentication/WelcomeScreen/TitleSection";
import { ScrollView } from "native-base";
import React from "react";

function HomeScreen() {
  return (
    <ScrollView mt={5} mb={5} showsVerticalScrollIndicator={false}>
      <CheckInWidget />
      <CatchUpWidget />
      <ChallengeWidget />
    </ScrollView>
  );
}

export default HomeScreen;
