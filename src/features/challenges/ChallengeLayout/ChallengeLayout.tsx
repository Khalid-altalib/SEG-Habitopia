import { Box, Center, Heading, ScrollView, VStack } from "native-base";
import React from "react";
import { View, FlatList, Text } from "react-native";
import RegularLayout from "../../../components/RegularLayout/RegularLayout";
import styles from "../../../constants/Styles";
import ChallengeBox from "../ChallengeBox/challengeBox";
import ChallengeBoxes from "../ChallengeBoxes/challengeBoxes";

type Props = {
  children: React.ReactNode;
};

function ChallengeLayout(props: Props) {
  const { children } = props;
  return (
    <ScrollView>
      <RegularLayout>
        <Center>
          <Heading mb={4}>Pick a category 🚀</Heading>
        </Center>

        <VStack space={3} width={"100%"}>
          {children}
        </VStack>
      </RegularLayout>
    </ScrollView>
  );
}

export default ChallengeLayout;
