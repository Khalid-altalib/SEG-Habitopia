import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button } from "native-base";
import React from "react";
import { NavigationParams } from "types";
import { NavigationProp } from "@react-navigation/native";

type Props = {};

function ChallengeNavigationButton({}: Props) {
  const navigation = useNavigation<NavigationProp<NavigationParams>>();
  const handlePress = () => navigation.navigate("Explore");
  return (
    <Button variant={"subtle"} onPress={handlePress}>
      Discover More!
    </Button>
  );
}

export default ChallengeNavigationButton;
