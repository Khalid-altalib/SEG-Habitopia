// React Native
import { StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";

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
};

/**
 * A pressable button which can take on different default styles, custom styles, and
 * call callbacks on press.
 *
 * @param props - The properties passed to the component.
 * @returns - The button component.
 */
const Button = ({
  style,
  isFullWidth,
  onPress,
  type,
  icon,
  children,
}: ButtonProps) => {
  return (
    <BoxWithShadow>
      <TouchableBox onPress={onPress} style={style}>
        <GradientBox type={type} isFullWidth={isFullWidth}>
          <ButtonText>{children}</ButtonText>
          <View style={{ marginLeft: 5 }}>{icon}</View>
        </GradientBox>
      </TouchableBox>
    </BoxWithShadow>
  );
};

export type TouchableBoxProps = {
  /** The components to show within the box. */
  children: any;
  /** A callback to be executed when the box is pressed. */
  onPress?: () => void;
  /** Any additional styles to apply to the box. */
  style?: ViewStyle;
};

/**
 * A touchable/pressable box which can take on additional styles and call a
 * callback when pressed.
 *
 * @param props - The properties passed to the component.
 * @returns - The touchable box component.
 */
const TouchableBox = ({ children, onPress, style }: TouchableBoxProps) => (
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

export type GradientBoxProps = {
  /** The components to show within the box. */
  children: any;
  /** The type of the box which affects the colors used. */
  type: ButtonType;
  /** Whether the box should take up all of the horizontal space available. */
  isFullWidth?: boolean;
};

/**
 * A gradient box which shows a nice gradient which changes depending on
 * the button type used.
 *
 * @param props - The properties passed to the component.
 * @returns - The gradient box component.
 */
const GradientBox = ({
  children,
  type,
  isFullWidth,
}: GradientBoxProps): JSX.Element => {
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

export type ButtonTextProps = {
  /** The text to render. */
  children: string;
  /** Any icon to display to the right of the button text. */
  icon?: JSX.Element;
};

/**
 * Some text which can go over a button and can also show
 * an optional icon.
 *
 * @param props - The properties passed to the component.
 * @returns - The button text component.
 */
const ButtonText = ({ children, icon }: ButtonTextProps) => (
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
