// React Native
import { View } from "react-native";

export type BoxWithShadowProps = {
  /** The components to show inside the box. */
  children: any;
};

/**
 * A box that has a shadow and can hold components inside it.
 *
 * @param props - The properties passed to the component.
 * @returns - The box.
 */
const BoxWithShadow = ({ children }: BoxWithShadowProps) => (
  <View
    style={[
      {
        shadowColor: "black",
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.15,
        borderRadius: 10,
      },
    ]}
  >
    {children}
  </View>
);

export default BoxWithShadow;
