import { RouteProp, useRoute } from "@react-navigation/native";
import { View } from "native-base";
import React from "react";
import { RootParams } from "types";
import ChallengeModal from "@features/challenges/ChallengeModal/ChallengeModal";

type Props = {};

const ChallengePromptScreen = (props: Props) => {
  const route = useRoute<RouteProp<RootParams, "ChallengePrompt">>();
  const { challenge } = route.params;

  return (
    <View width="100%" height="100%">
      <ChallengeModal challenge={challenge} />
    </View>
  );
};

export default ChallengePromptScreen;
