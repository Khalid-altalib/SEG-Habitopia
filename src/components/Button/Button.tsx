import React from "react";
import { StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";

import Text from "../Text";
import { ButtonType, TextType } from "../../../types";
import { theme, useColorModeValue } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  style?: ViewStyle;
  isFullWidth?: boolean;
  onPress?: () => void;
  type: ButtonType;
  icon?: JSX.Element;
  children: string;
};

const Button = ({
  style,
  isFullWidth = false,
  onPress,
  type,
  icon,
  children,
}: Props) => {
  if (type == undefined) type = ButtonType.Primary;

  const styles = StyleSheet.create({
    base: {
      borderRadius: 10,
      paddingVertical: 15,
      paddingHorizontal: 40,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  const typeStyles = {
    primary: {
      backgroundColors: [theme.colors.darkBlue[500], theme.colors.purple[700]],
    },
    secondary: {
      backgroundColors: useColorModeValue(
        [theme.colors.gray[500], theme.colors.gray[400]],
        [theme.colors.blueGray[600], theme.colors.blueGray[700]]
      ),
    },
  };

  const additionalStyle = ButtonType[type]
    .toString()
    .toLowerCase() as keyof typeof typeStyles;

  return (
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
      <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={style}>
        <LinearGradient
          colors={typeStyles[additionalStyle].backgroundColors}
          start={[0, 0]}
          end={[1, 1]}
          style={[
            styles.base,
            isFullWidth ? { width: "100%" } : { alignSelf: "flex-start" },
          ]}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              type={TextType.Button}
              style={icon == undefined ? null : { marginRight: 5 }}
            >
              {children}
            </Text>
            {icon}
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
