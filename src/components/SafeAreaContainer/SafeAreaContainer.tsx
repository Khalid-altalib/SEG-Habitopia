import React from "react";
import { StyleSheet, View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

type Props = {
  children: any;
};

/**
 * A container that ensures that all of its children are within the "safe area" of the screen
 * and not obscured by issues such as the iPhone notch.
 *
 * @param props The children components to be displayed within this safe area container.
 * @returns The container with its children.
 */
const SafeAreaContainer = (props: Props) => {
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

export default SafeAreaContainer;
