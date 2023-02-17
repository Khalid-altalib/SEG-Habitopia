import { ScrollView, VStack } from "native-base";
import React from "react";
import RegularLayout from "../../../components/RegularLayout/RegularLayout";

type Props = {
  children: React.ReactNode;
};

const ChallengeWidgetLayout = (props: Props) => {
  const { children } = props;
  return (
    <ScrollView flex={1}>
      <RegularLayout>
        <VStack space={4}>{children}</VStack>
      </RegularLayout>
    </ScrollView>
  );
};

export default ChallengeWidgetLayout;
