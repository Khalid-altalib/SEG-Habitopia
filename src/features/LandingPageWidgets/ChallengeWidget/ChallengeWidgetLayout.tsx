import { Center, Heading, View, VStack } from "native-base";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const ChallengeWidgetLayout = (props: Props) => {
  const { children } = props;
  return (
    <View margin={25}>
      <Heading mb={4} shadow={1}>
        Pick a challenge! 🚀
      </Heading>
      <VStack space={4}>{children}</VStack>
    </View>
  );
};

export default ChallengeWidgetLayout;
