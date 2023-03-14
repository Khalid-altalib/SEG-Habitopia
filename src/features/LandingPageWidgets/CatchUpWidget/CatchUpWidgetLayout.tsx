import Text from "@components/Text";
import { ScrollView, View } from "native-base";
import React from "react";
import { TextType } from "types";

type Props = {
  children: React.ReactNode;
};

const CatchUpWidgetLayout = (props: Props) => {
  const { children } = props;
  return (
    <View marginLeft={25} marginTop={25}>
      <Text type={TextType.Subheading} color="white">
        Catch up 👬
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {children}
      </ScrollView>
    </View>
  );
};

export default CatchUpWidgetLayout;
