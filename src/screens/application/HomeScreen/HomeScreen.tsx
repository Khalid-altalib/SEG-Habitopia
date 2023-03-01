import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View } from "native-base";
import React from "react";
import { NavigationParams } from "types";

import ChallengesScreen from "@screens/application/ChallengesScreen";

function HomeScreen() {
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

export default HomeScreen;
