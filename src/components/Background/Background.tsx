import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { theme, useColorModeValue } from "native-base";

type Props = {
  children: any;
};

/**
 * Displays a background, that is either dark or light depending on the color scheme, with a slight
 * gradient.
 *
 * @returns The background component.
 */
const Background = (props: Props) => {
  const LIGHT_MODE_GRADIENT = [
    theme.colors.blueGray[200],
    theme.colors.blueGray[100],
  ];
  const DARK_MODE_GRADIENT = [
    theme.colors.blueGray[900],
    theme.colors.blueGray[800],
  ];

  return (
    <LinearGradient
      colors={useColorModeValue(LIGHT_MODE_GRADIENT, DARK_MODE_GRADIENT)}
      style={{
        flex: 1, // Make the background fill all of the space available to it
      }}
    >
      {props.children}
    </LinearGradient>
  );
};

export default Background;
