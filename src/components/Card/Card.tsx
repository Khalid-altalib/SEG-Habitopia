// React Native
import { View } from "react-native";

// Native Base
import { theme, useColorModeValue } from "native-base";
import { StyleSheet } from "react-native";

// Expo Linear Gradient
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  /** The background color gradient of the card. If undefined, then default colors are used. */
  backgroundColorGradient?: [string, string];
  /** The children to be displayed within the card. */
  children: any;
};

/**
 * A card which can contain children.
 *
 * @param props The properties passed to the component.
 * @returns The component representing the card and its children.
 */
const Card = ({ backgroundColorGradient, children }: Props) => {
  const LIGHT_MODE_GRADIENT = [theme.colors.white, theme.colors.gray[100]];
  const DARK_MODE_GRADIENT = [
    theme.colors.blueGray[700],
    theme.colors.blueGray[600],
  ];

  const styles = StyleSheet.create({
    base: {
      borderRadius: 10,
      padding: 20,
    },
  });

  return (
    <View
      style={{
        shadowColor: "black",
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: useColorModeValue(0.05, 0.15),
      }}
    >
      <LinearGradient
        colors={
          backgroundColorGradient ||
          useColorModeValue(LIGHT_MODE_GRADIENT, DARK_MODE_GRADIENT)
        }
        style={[styles.base]}
        end={{ x: 0.5, y: 2 }}
      >
        {children}
      </LinearGradient>
    </View>
  );
};

export default Card;
