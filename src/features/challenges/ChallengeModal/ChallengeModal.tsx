import { Button, HStack, Text, View, Alert, Modal, VStack } from "native-base";
import React from "react";
import challengeModalStyles from "./ChallengeModalStyles";
type Props = {
  challengeDescription: string;
};

const ChallengeModal = (props: Props) => {
  const { challengeDescription } = props;
  return (
    <View>
      <VStack justifyContent={"center"}>
        <Text>{challengeDescription}</Text>
        <Text>Would you like to take on this challenge? 💪💪</Text>
        <Button width={"100%"}>Join</Button>
      </VStack>
    </View>
  );
};

export default ChallengeModal;
//style={challengeModalStyles.challengeModal}
