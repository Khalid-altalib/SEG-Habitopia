import { Heading, ScrollView, View } from "native-base";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const CatchUpWidgetLayout = (props: Props) => {
  const { children } = props;
  return (
    <View marginLeft={25} marginTop={25}>
      <Heading>Catch up 👬</Heading>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {children}
      </ScrollView>
    </View>
  );
};

export default CatchUpWidgetLayout;
