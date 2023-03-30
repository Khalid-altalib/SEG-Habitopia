// Import necessary modules and components
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AspectRatio, Box, HStack } from "native-base";
import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { Challenge, RootParams, TextType } from "../../../../types";
import { challengeMappings } from "../challengeMappings";
import ChallengeOnGoingText from "../ChallengeOnGoingText/ChallengeOnGoingText";
import Text from "@components/Text";

type Props = {
  challenge: Challenge;
};

const ChallengeBox = (props: Props) => {
  const { challenge } = props;
  const { name, active } = challenge;

  // Access the navigation object for navigating to the "ChallengePrompt" screen
  const navigation = useNavigation<NativeStackNavigationProp<RootParams>>();

  // Retrieve the challenge's card color and image from the challengeMappings object
  const { color: cardColor, image: cardImage } =
    challengeMappings[name] || challengeMappings["fallback"];

  // Define a function to handle the press event of the component
  const handlePress = () =>
    navigation.navigate("ChallengePrompt", {
      challenge: challenge,
    });

  // Render the component
  return (
    <TouchableOpacity onPress={handlePress} testID="challengeBox">
      <Box
        backgroundColor={cardColor}
        borderRadius="lg"
        shadow={3}
        height={100}
        overflow="hidden"
      >
        <HStack justifyContent="space-between" height="100%">
          <Box justifyContent="space-between" padding={3}>
            <Text type={TextType.Subheading} color="white">
              {name}
            </Text>
            <ChallengeOnGoingText onGoing={active} />
          </Box>
          <AspectRatio ratio={1}>
            <Image
              source={{ uri: cardImage }}
              style={{ height: "100%", width: 80 }}
            />
          </AspectRatio>
        </HStack>
      </Box>
    </TouchableOpacity>
  );
};

export default ChallengeBox;
