// React Native
import { StyleSheet, View } from "react-native";

// React Native Safe Area Context
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export type SafeAreaContainerProps = {
  /** The children to show within the container. */
  children: any;
};

/**
 * A container that ensures that all of its children are within the "safe area" of the screen
 * and not obscured by issues such as the iPhone notch.
 *
 * @param props - The children components to be displayed within this safe area container.
 * @returns - The container with its children.
 */
const SafeAreaContainer = (props: SafeAreaContainerProps) => {
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
