import { RouteProp, useRoute } from "@react-navigation/native";
import { View } from "native-base";
import React from "react";
import { RootParams } from "types";
import ChallengeModal from "@features/challenges/ChallengeModal/ChallengeModal";

/**
 * @returns A React component which represents the screen where the user is
 * shown a modal associated with the challenge they have selected, giving
 * them the choice of joining or declining the prompt
 */
const ChallengePromptScreen = () => {
  const route = useRoute<RouteProp<RootParams, "ChallengePrompt">>();
  const { challenge } = route.params;

  return (
    <View width="100%" height="100%">
      <ChallengeModal challenge={challenge} />
    </View>
  );
};

export default ChallengePromptScreen;
