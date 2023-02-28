import React from "react";
import { View } from "react-native";

type Props = {
  children: any;
};

/**
 * Displays children components in a container with predefined padding.
 *
 * @param props The children which are to be displayed within the container.
 * @returns The padded container with its children.
 */
const PaddedContainer = (props: Props) => {
  const PADDING = 25;

  return (
    <View style={{ padding: PADDING, width: "100%", height: "100%" }}>
      {props.children}
    </View>
  );
};

export default PaddedContainer;
