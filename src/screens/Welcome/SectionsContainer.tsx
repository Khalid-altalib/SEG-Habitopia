// React
import { ReactNode } from "react";

// React Native
import { StyleProp, View, ViewStyle } from "react-native";

/**
 * A container for separating sections. This is ideal for use with the title and button containers.
 *
 * @param props The properties passed to the container.
 * @returns The component representing the container.
 */
const SectionsContainer = ({ children }: Props): JSX.Element => (
  <View style={containerStyle}>{children}</View>
);

/**
 * The properties passed to the container.
 */
type Props = {
  /** The sections to show within the container. */
  children: ReactNode[];
};

/**
 * A style which makes the container take up all space available to it, add spacing only between
 * sections, and add vertical padding.
 */
const containerStyle: StyleProp<ViewStyle> = {
  /** Take up all space available */
  width: "100%",
  height: "100%",
  /** Add spacing between sections */
  justifyContent: "space-between",
  /** Add vertical padding */
  paddingTop: "30%",
  paddingBottom: "20%",
};

export default SectionsContainer;
