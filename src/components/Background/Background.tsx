// Expo Linear Gradient
import { LinearGradient } from "expo-linear-gradient";

// Native Base
import { useColorModeValue } from "native-base";

// Habitopia
import Theme from "../../app/theme";

export type BackgroundProps = {
  /** The components to display on top of the background. */
  children: any;
};

/**
 * Displays a background, that is either dark or light depending on the color scheme, with a slight
 * gradient.
 *
 * @returns - The background component.
 */
const Background = (props: BackgroundProps) => {
  const gradientColors = useColorModeValue(
    Theme.background.gradientColors.lightMode,
    Theme.background.gradientColors.darkMode
  );

  return (
    <LinearGradient colors={gradientColors} style={{ height: "100%" }}>
      {props.children}
    </LinearGradient>
  );
};

export default Background;
