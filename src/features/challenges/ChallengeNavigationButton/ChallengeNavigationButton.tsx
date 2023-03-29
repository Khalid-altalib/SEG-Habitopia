import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ButtonType, NavigationParams } from "types";
import { NavigationProp } from "@react-navigation/native";
import Button from "@components/Button";

type Props = {};

function ChallengeNavigationButton({}: Props) {
  const navigation = useNavigation<NavigationProp<NavigationParams>>();
  const handlePress = () => navigation.navigate("Explore");
  return (
    <Button
      type={ButtonType.Primary}
      isFullWidth
      style={{ marginHorizontal: 25, marginBottom: 25, paddingTop: 10 }}
      onPress={handlePress}
    >
      Discover more!
    </Button>
  );
}

export default ChallengeNavigationButton;
