// React Native
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

// Expo Linear Gradient
import { LinearGradient } from "expo-linear-gradient";

// Native Base
import { useColorModeValue } from "native-base";

// Habitopia
import Text from "../Text";
import { ButtonType, TextType } from "../../../types";
import BoxWithShadow from "../BoxWithShadow";
import Theme from "../../app/theme";

export type ButtonProps = {
  /** Additional styling information to apply to the button, e.g. padding. */
  style?: ViewStyle;
  /** Whether the button should take up the full horizontal space available to it. */
  isFullWidth?: boolean;
  /** A callback for when the button is pressed. */
  onPress?: () => void;
  /** The type of button, which affects the default styling. */
  type: ButtonType;
  /** Any icon to display to the right of the button text. */
  icon?: JSX.Element;
  /** The text to display within the button. */
  children: string;
  /** Whether the button needs to show a loading state. */
  isLoading: boolean;
};

/**
 * A pressable button which can take on different default styles, custom styles, and
 * call callbacks on press.
 *
 * @param props - The properties passed to the component.
 * @returns - The button component.
 */
const Button = (props: ButtonProps) => {
  return (
    <BoxWithShadow>
      <TouchableBox onPress={props.onPress} style={props.style}>
        <GradientBox type={props.type} isFullWidth={props.isFullWidth}>
          {props.isLoading ? (
            <ActivityIndicator />
          ) : (
            <>
              <ButtonText>{props.children}</ButtonText>
              <View style={{ marginLeft: 5 }}>{props.icon}</View>
            </>
          )}
        </GradientBox>
      </TouchableBox>
    </BoxWithShadow>
  );
};

const TouchableBox = ({ children, onPress, style }: any) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={() => {
      onPress === undefined ? null : onPress();
    }}
    style={style}
  >
    {children}
  </TouchableOpacity>
);

const GradientBox = ({ children, type, isFullWidth }: any): JSX.Element => {
  const styles = StyleSheet.create({
    base: {
      borderRadius: 10,
      paddingVertical: 15,
      paddingHorizontal: 40,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    },
  });

  // Convert the enum to a string so we can use it as a key
  const buttonType: string = ButtonType[type].toString().toLowerCase();

  const gradientColors = useColorModeValue(
    Theme.button[buttonType].gradientColors.lightMode,
    Theme.button[buttonType].gradientColors.darkMode
  );

  return (
    <LinearGradient
      colors={gradientColors}
      start={[0, 0]}
      end={[1, 1]}
      style={[
        styles.base,
        isFullWidth ? { width: "100%" } : { alignSelf: "flex-start" },
      ]}
    >
      {children}
    </LinearGradient>
  );
};

const ButtonText = ({ children, icon }: any) => (
  <Text
    type={TextType.Button}
    style={[
      icon == undefined ? null : { marginRight: 5 },
      { alignSelf: "center" },
    ]}
  >
    {children}
  </Text>
);

export default Button;
