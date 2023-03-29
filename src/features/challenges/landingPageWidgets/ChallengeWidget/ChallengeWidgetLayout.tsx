// Importing necessary dependencies and components
import { Center, Heading, View, VStack } from "native-base";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const ChallengeWidgetLayout = (props: Props) => {
  const { children } = props;
  return (
    <View testID="challengeWidget" paddingTop={5}>
      <Center>
        <Heading mb={4} shadow={1}>
          Pick a Challenge! 🚀
        </Heading>
      </Center>
      {/* Define a vertical stack with spacing between its child components */}
      <VStack space={4} paddingLeft={3} paddingRight={3}>
        {children}
      </VStack>
    </View>
  );
};

export default ChallengeWidgetLayout;
