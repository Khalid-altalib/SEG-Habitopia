import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View } from "native-base";
import React from "react";
import { NavigationParams } from "../../types";

import Challenges from "./Challenges";

function Home() {
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationParams>>();

  return (
    <View>
      <Challenges />
    </View>
  );
}

export default Home;
