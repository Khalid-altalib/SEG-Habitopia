// Import necessary modules and types
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ButtonType, NavigationParams } from "types";
import { NavigationProp } from "@react-navigation/native";
import Button from "@components/Button";

type Props = {};

function ChallengeNavigationButton({}: Props) {
  const navigation = useNavigation<NavigationProp<NavigationParams>>();

  // When pressed, it will navigate to the explore tab
  const handlePress = () => navigation.navigate("Explore");

  // Return the Button component
  return (
    <Button
      type={ButtonType.Primary}
      isFullWidth
      style={{ marginHorizontal: 25, marginBottom: 25, paddingTop: 10 }} // Apply some styles to the button
      onPress={handlePress}
    >
      Discover more! // The text inside the button
    </Button>
  );
}

export default ChallengeNavigationButton;
