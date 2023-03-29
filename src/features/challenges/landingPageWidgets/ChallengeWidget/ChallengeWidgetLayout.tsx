import { Center, Heading, View, VStack } from "native-base";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const ChallengeWidgetLayout = (props: Props) => {
  const { children } = props;
  return (
    <View testID="challengeWidget">
      <Center>
        <Heading mb={4} shadow={1}>
          Pick a Challenge! 🚀
        </Heading>
      </Center>
      <VStack space={4} paddingLeft={3} paddingRight={3}>
        {children}
      </VStack>
    </View>
  );
};

export default ChallengeWidgetLayout;
