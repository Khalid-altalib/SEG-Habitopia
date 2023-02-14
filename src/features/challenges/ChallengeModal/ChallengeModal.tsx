import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, HStack, Text, View, Alert, Modal, VStack } from "native-base";
import React from "react";
import { Challenge, RootParams } from "../../../../types";

type Props = {
  challenge: Challenge;
};

const ChallengeModal = (props: Props) => {
  const { challenge } = props;

  const navigation = useNavigation<NativeStackNavigationProp<RootParams>>();

  return (
    <View>
      <VStack justifyContent={"center"}>
        <Text>{challenge.description}</Text>

        <Button onPress={() => navigation.goBack()}>Close</Button>
        <Text>Would you like to take on this challenge? 💪💪</Text>
        <Button width={"100%"}>Join</Button>
      </VStack>
    </View>
  );
};

export default ChallengeModal;
//style={challengeModalStyles.challengeModal}
