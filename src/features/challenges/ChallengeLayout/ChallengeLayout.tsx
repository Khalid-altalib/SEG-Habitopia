import { ScrollView, VStack } from "native-base";
import React from "react";
import { View, FlatList, Text } from "react-native";
import RegularLayout from "../../../components/RegularLayout/RegularLayout";
import styles from "../../../constants/Styles";
import ChallengeBox from "../ChallengeBox/challengeBox";
import ChallengeBoxes from "../ChallengeBoxes/challengeBoxes";
import challengeLayoutStyles from "./ChallengeLayoutStyles";

type Props = {
  children: React.ReactNode;
};

function ChallengeLayout(props: Props) {
  const { children } = props;
  return (
    <ScrollView width={"100%"}>
      <RegularLayout>
        <Text style={challengeLayoutStyles.challengeTitle}>
          Pick a category 🚀🚀
        </Text>
        <VStack space={3} width={"100%"}>
          {children}
        </VStack>
      </RegularLayout>
    </ScrollView>
  );
}

export default ChallengeLayout;
