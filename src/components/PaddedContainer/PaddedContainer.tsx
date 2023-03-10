// React Native
import { View } from "react-native";

export type PaddedContainerProps = {
  /** The children to show within the container. */
  children: any;
};

/**
 * Displays children components in a container with predefined padding.
 *
 * @param props - The children which are to be displayed within the container.
 * @returns - The padded container with its children.
 */
const PaddedContainer = (props: PaddedContainerProps) => {
  const PADDING = 25;

  return (
    <View style={{ padding: PADDING, width: "100%", height: "100%" }}>
      {props.children}
    </View>
  );
};

export default PaddedContainer;
