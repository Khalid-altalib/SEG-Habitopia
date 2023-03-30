// Import the necessary modules/components
import { Heading, ScrollView, View } from "native-base";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const CatchUpWidgetLayout = (props: Props) => {
  const { children } = props;

  // The component returns a view with some padding and a heading for the widget
  // It also renders a ScrollView that shows its children horizontally
  return (
    <View paddingLeft={6} paddingRight={6} testID="catchUpWidget">
      <Heading shadow={1}>Catch-Up 👬</Heading>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {children}
      </ScrollView>
    </View>
  );
};

export default CatchUpWidgetLayout;
