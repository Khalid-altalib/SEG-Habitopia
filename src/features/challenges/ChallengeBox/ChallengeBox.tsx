import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Box, Heading, HStack } from "native-base";
import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { Challenge, RootParams } from "../../../../types";
import { challengeMappings } from "../challengeMappings";
import ChallengeOnGoingText from "../ChallengeOnGoingText/ChallengeOnGoingText";

type Props = {
  challenge: Challenge;
};

const ChallengeBox = (props: Props) => {
  const { challenge } = props;
  const { name, active } = challenge;

  const navigation = useNavigation<NativeStackNavigationProp<RootParams>>();

  const { color: cardColor, image: cardImage } =
    challengeMappings[name] || challengeMappings["fallback"];

  const handlePress = () =>
    navigation.navigate("ChallengePrompt", {
      challenge: challenge,
    });

  return (
    <TouchableOpacity onPress={handlePress}>
      <Box
        backgroundColor={cardColor}
        borderRadius={"md"}
        shadow={3}
        padding={3}
        height={100}
      >
        <HStack justifyContent="space-between" height="100%">
          <Box justifyContent="space-between">
            <Heading>{name}</Heading>
            <ChallengeOnGoingText onGoing={active} />
          </Box>
          <Box borderRadius={3}>
            <Image
              source={{ uri: cardImage }}
              borderRadius={6}
              style={{ height: "100%", width: 80 }}
            />
          </Box>
        </HStack>
      </Box>
    </TouchableOpacity>
  );
};

export default ChallengeBox;
