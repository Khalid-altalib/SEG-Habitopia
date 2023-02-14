import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Center, View } from "native-base";
import React from "react";
import { RootParams } from "../../types";
import FlowLayout from "../components/FlowLayout/FlowLayout";
import RegularLayout from "../components/RegularLayout/RegularLayout";
import ChallengeModal from "../features/challenges/ChallengeModal/ChallengeModal";

type Props = {};

const ChallengePrompt = (props: Props) => {
  const route = useRoute<RouteProp<RootParams, "ChallengePrompt">>();
  const { challenge } = route.params;
  console.log(challenge);

  return (
    <FlowLayout>
      <View width="100%" height="100%" paddingTop={8}>
        <ChallengeModal challenge={challenge} />
      </View>
    </FlowLayout>
  );
};

export default ChallengePrompt;
