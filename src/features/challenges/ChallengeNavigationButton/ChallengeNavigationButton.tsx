import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button } from "native-base";
import React from "react";
import { RootParams } from "../../../../types";

type Props = {};

function ChallengeNavigationButton({}: Props) {
  const navigation = useNavigation<NativeStackNavigationProp<RootParams>>();
  const handlePress = () => navigation.navigate("Challenges");
  return (
    <Button backgroundColor={"amber.500"} onPress={handlePress}>
      Show all
    </Button>
  );
}

export default ChallengeNavigationButton;
