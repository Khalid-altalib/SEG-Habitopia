// Import necessary modules and components
import { Center, ScrollView, VStack } from "native-base";
import React from "react";
import PaddedContainer from "../../../components/PaddedContainer";
import Text from "@components/Text";
import { TextType } from "types";

type Props = {
  children: React.ReactNode;
};

function ChallengeLayout(props: Props) {
  const { children } = props;

  return (
    <ScrollView>
      <PaddedContainer>
        {/* A container with some padding */}
        <Center marginBottom={25}>
          <Text type={TextType.Subheading}>Pick a Challenge! 🚀</Text>
        </Center>
        <VStack space={3} width={"100%"}>
          {children} {/* Renders the child components passed as props */}
        </VStack>
      </PaddedContainer>
    </ScrollView>
  );
}

export default ChallengeLayout;
