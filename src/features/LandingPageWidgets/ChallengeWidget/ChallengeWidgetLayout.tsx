import PaddedContainer from "@components/PaddedContainer";
import SafeAreaContainer from "@components/SafeAreaContainer";
import { Center, Heading, ScrollView, VStack } from "native-base";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const ChallengeWidgetLayout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Center>
        <Heading mb={4} shadow={1}>
          Pick a Challenge! 🚀
        </Heading>
      </Center>
      <ScrollView height={"25%"} showsVerticalScrollIndicator={false}>
        <VStack space={4} paddingLeft={3} paddingRight={3}>
          {children}
        </VStack>
      </ScrollView>
    </>
  );
};

export default ChallengeWidgetLayout;
