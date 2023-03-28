import { Heading, ScrollView, View } from "native-base";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const CatchUpWidgetLayout = (props: Props) => {
  const { children } = props;
  return (
    <View paddingLeft={6} paddingRight={6}>
      <Heading shadow={1}>Catch-Up 👬</Heading>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {children}
      </ScrollView>
    </View>
  );
};

export default CatchUpWidgetLayout;
