import { Heading, ScrollView, View } from "native-base";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const CatchUpWidgetLayout = (props: Props) => {
  const { children } = props;
  return (
    <View style={{ paddingLeft: 25 }}>
      <Heading shadow={1}>Catch up 👬</Heading>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {children}
      </ScrollView>
    </View>
  );
};

export default CatchUpWidgetLayout;
