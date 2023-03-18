import Text from "@components/Text";
import { View, VStack } from "native-base";
import React from "react";
import { TextType } from "types";

type Props = {
  children: React.ReactNode;
};

const ChallengeWidgetLayout = (props: Props) => {
  const { children } = props;
  return (
    <View margin={25}>
      <Text type={TextType.Subheading} style={{ marginBottom: 25 }}>
        Pick a challenge! 🚀
      </Text>
      <VStack>{children}</VStack>
    </View>
  );
};

export default ChallengeWidgetLayout;
