import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { isLoading } from "expo-font";
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
import { useDispatch, useSelector } from "../../../app/hooks";
import { challengeMappings } from "../challengeMappings";
import { joinChallenge } from "../challengesSlice";

type Props = {
  challenge: Challenge;
};

const ChallengeModal = (props: Props) => {
  const { challenge } = props;
  const { name, description } = challenge;
  const { joinChallenge: requestStatus } = useSelector(
    (state) => state.challenges
  );
  const { loading } = requestStatus;

  const { image } = challengeMappings[name] || challengeMappings["fallback"];

  const navigation = useNavigation<NativeStackNavigationProp<RootParams>>();

  const dispatch = useDispatch();

  const handleButtonClick = async () => {
    await dispatch(joinChallenge(name));
    navigation.pop();
  };

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
          {description}
        </Text>

        <HStack space={3}>
          <Button
            backgroundColor="amber.500"
            onPress={handleButtonClick}
            isLoading={loading}
          >
            Join Challenge!
          </Button>
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
