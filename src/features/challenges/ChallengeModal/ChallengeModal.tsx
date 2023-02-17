import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Button,
  HStack,
  Text,
  View,
  Alert,
  Modal,
  VStack,
  Image,
  Heading,
} from "native-base";
import React from "react";
import { Challenge, RootParams } from "../../../../types";
import { challengeMappings } from "../challengeMappings";
import { joinChallenge } from "../challengesSlice";

type Props = {
  challenge: Challenge;
};

const ChallengeModal = (props: Props) => {
  const { challenge } = props;
  const { name, description } = challenge;

  const { image } = challengeMappings[name] || challengeMappings["fallback"];

  const navigation = useNavigation<NativeStackNavigationProp<RootParams>>();

  // const handlePress =  () => joinChallenge("challenge"); BACKEND_PLACEHOLDER

  return (
    <View>
      <VStack space={3} alignItems="center">
        <Heading size="3xl">{name}</Heading>
        <Image
          width={100}
          height={100}
          alt="Challenge Image"
          borderRadius="lg"
          source={{ uri: image }}
        />
        <Text fontSize="xl" textAlign="center">
          {challenge.description}
        </Text>

        <HStack space={3}>
          <Button backgroundColor="amber.500">Join Challenge!</Button>
          <Button
            backgroundColor="gray.400"
            onPress={() => navigation.goBack()}
          >
            Not now
          </Button>
        </HStack>
      </VStack>
    </View>
  );
};

export default ChallengeModal;
