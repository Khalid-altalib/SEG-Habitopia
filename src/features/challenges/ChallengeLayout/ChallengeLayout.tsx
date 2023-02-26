import { Center, Heading, ScrollView, VStack } from "native-base";
import React from "react";
import PaddedContainer from "../../../components/PaddedContainer";

type Props = {
  children: React.ReactNode;
};

function ChallengeLayout(props: Props) {
  const { children } = props;
  return (
    <ScrollView>
      <PaddedContainer>
        <Center>
          <Heading mb={4}>Pick a Challenge! 🚀</Heading>
        </Center>

        <VStack space={3} width={"100%"}>
          {children}
        </VStack>
      </PaddedContainer>
    </ScrollView>
  );
}

export default ChallengeLayout;
