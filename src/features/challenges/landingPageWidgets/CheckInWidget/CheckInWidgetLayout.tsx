// Importing necessary dependencies and components
import { ScrollView, View, Heading } from "native-base";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function CheckInWidgetLayout(props: Props) {
  const { children } = props;
  // Return a render of the 'children' within the CheckInWidgetLayout component
  return (
    <View
      paddingLeft={6}
      paddingRight={6}
      paddingTop={5}
      testID="checkInWidget"
    >
      <Heading shadow={1}>Check-In 📝</Heading>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {children}
      </ScrollView>
    </View>
  );
}

export default CheckInWidgetLayout;
