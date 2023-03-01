import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Divider, View } from "native-base";
import React from "react";
import { NavigationParams } from "../../types";
import PaddedContainer from "../components/PaddedContainer";
import CatchUpWidget from "../features/LandingPageWidgets/CatchUpWidget/CatchUpWidget";
import ChallengeWidget from "../features/LandingPageWidgets/ChallengeWidget/ChallengeWidget";
import CheckInWidget from "../features/LandingPageWidgets/CheckInWidget/CheckInWidget";
import TitleSection from "./Welcome/TitleSection";

function Home() {
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationParams>>();

  return (
    <View>
      <PaddedContainer>
        <TitleSection />
      </PaddedContainer>
      <CheckInWidget />
      <CatchUpWidget />
      <ChallengeWidget />
    </View>
  );
}

export default Home;
