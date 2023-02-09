import React from "react";
import { StyleSheet, View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

type Props = {
  children: any;
};

const SafeArea = (props: Props) => {
  const insets = useSafeAreaInsets();

  const styles = StyleSheet.create({
    safeAreaPadding: {
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    },
  });

  return (
    <SafeAreaProvider>
      <View style={styles.safeAreaPadding}>{props.children}</View>
    </SafeAreaProvider>
  );
};

export default SafeArea;
