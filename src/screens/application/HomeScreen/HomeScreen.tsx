import CatchUpWidget from "@features/challenges/LandingPageWidgets/CatchUpWidget/CatchUpWidget";
import ChallengeWidget from "@features/challenges/LandingPageWidgets/ChallengeWidget/ChallengeWidget";
import CheckInWidget from "@features/challenges/LandingPageWidgets/CheckInWidget/CheckInWidget";
import TitleSection from "@screens/authentication/WelcomeScreen/TitleSection";
import { ScrollView } from "native-base";
import React from "react";

function HomeScreen() {
  return (
    <ScrollView mt={5} mb={5} showsVerticalScrollIndicator={false}>
      <TitleSection />
      <CheckInWidget />
      <CatchUpWidget />
      <ChallengeWidget />
    </ScrollView>
  );
}

export default HomeScreen;
