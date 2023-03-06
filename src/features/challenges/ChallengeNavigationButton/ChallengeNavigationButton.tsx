import { useDispatch } from "@app/hooks";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button } from "native-base";
import React from "react";
import { RootParams } from "../../../../types";

type Props = {};

function ChallengeNavigationButton({}: Props) {
  const navigation = useNavigation<NativeStackNavigationProp<RootParams>>();
  const handlePress = () => {};
  return (
    <Button variant={"subtle"} onPress={handlePress}>
      Discover More!
    </Button>
  );
}

export default ChallengeNavigationButton;
