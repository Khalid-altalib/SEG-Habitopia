import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Box, Card, Heading, HStack } from "native-base";
import React from "react";
import {
  GestureResponderEvent,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { Challenge, RootParams } from "../../../../types";
import ChallengeModal from "../ChallengeModal/ChallengeModal";
import ChallengeOnGoingText from "../ChallengeOnGoingText/ChallengeOnGoingText";
import challengeBoxStyles from "./ChallengeBoxStyles";

type Props = {
  entry: {
    image: string;
    name: string;
    active: boolean;
    description: string;
  };
};

const challengeColorMappings: { [key: string]: string } = {
  Sleep: "blue.400",
  Food: "green.400",
  Fitness: "amber.400",
};

const ChallengeBox = (props: Props) => {
  const { entry } = props;
  const { name, active, image, description } = entry;

  const navigation = useNavigation<NativeStackNavigationProp<RootParams>>();

  const cardColor = challengeColorMappings[name];

  let boxStyle = active
    ? challengeBoxStyles.activeChallengeBox
    : challengeBoxStyles.unactiveChallengeBox;

  const handlePress = () =>
    navigation.navigate("Modal", {
      children: <ChallengeModal challengeDescription={description} />,
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
              source={{ uri: image }}
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
