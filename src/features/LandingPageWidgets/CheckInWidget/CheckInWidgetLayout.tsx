import Text from "@components/Text";
import { ScrollView, View } from "native-base";
import React from "react";
import { TextType } from "types";

type Props = {
  children: React.ReactNode;
};

function CheckInWidgetLayout(props: Props) {
  const { children } = props;
  return (
    <View marginTop={25}>
      <Text style={{ marginLeft: 25 }} type={TextType.Subheading}>
        Check in 📝
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {children}
      </ScrollView>
    </View>
  );
}

export default CheckInWidgetLayout;
