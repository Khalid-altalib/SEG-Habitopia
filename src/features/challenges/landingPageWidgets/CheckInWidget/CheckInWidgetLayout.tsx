import { ScrollView, View, Heading } from "native-base";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function CheckInWidgetLayout(props: Props) {
  const { children } = props;
  return (
    <View paddingLeft={6} paddingRight={6} testID="checkInWidget">
      <Heading shadow={1}>Check-In 📝</Heading>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {children}
      </ScrollView>
    </View>
  );
}

export default CheckInWidgetLayout;
