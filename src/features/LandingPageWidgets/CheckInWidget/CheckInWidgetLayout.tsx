import PaddedContainer from "@components/PaddedContainer";
import { ScrollView, View, Heading } from "native-base";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function CheckInWidgetLayout(props: Props) {
  const { children } = props;
  return (
    <View marginLeft={25} marginTop={25}>
      <Heading>Check in 📝</Heading>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {children}
      </ScrollView>
    </View>
  );
}

export default CheckInWidgetLayout;
