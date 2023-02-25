import { RouteProp, useRoute } from "@react-navigation/native";
import { View } from "native-base";
import React from "react";
import { RootParams } from "../../types";
import FlowLayout from "../components/FlowLayout/FlowLayout";
import ChallengeModal from "../features/challenges/ChallengeModal/ChallengeModal";

type Props = {};

const ChallengePrompt = (props: Props) => {
  const route = useRoute<RouteProp<RootParams, "ChallengePrompt">>();
  const { challenge } = route.params;

  return (
    <FlowLayout>
      <View width="100%" height="100%" paddingTop={8}>
        <ChallengeModal challenge={challenge} />
      </View>
    </FlowLayout>
  );
};

export default ChallengePrompt;
