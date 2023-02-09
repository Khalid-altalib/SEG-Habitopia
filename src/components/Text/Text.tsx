import React from "react";
import { StyleSheet, Text as RnText } from "react-native";
import { theme, useColorModeValue } from "native-base";
import { useFonts } from "expo-font";

import { TextType } from "../../../types";

type Props = {
  type?: TextType;
  style: StyleSheet;
  children: string;
};

const Text = ({ type, style, children }: any) => {
  const [fontsLoaded] = useFonts({
    "Roboto Black": require("../../../assets/fonts/Roboto/Black.ttf"),
    "Roboto Medium": require("../../../assets/fonts/Roboto/Medium.ttf"),
  });

  if (type == undefined) type = TextType.Regular;

  const additionalStyle = TextType[type]
    .toString()
    .toLowerCase() as keyof typeof styles;

  const styles = StyleSheet.create({
    base: {
      color: useColorModeValue(theme.colors.gray[700], theme.colors.gray[200]),
    },
    regular: {
      fontSize: 14,
      fontFamily: fontsLoaded ? "Roboto Medium" : undefined,
    },
    subtle: {
      fontSize: 12,
      color: useColorModeValue(theme.colors.gray[500], theme.colors.gray[400]),
      fontFamily: fontsLoaded ? "Roboto Medium" : undefined,
    },
    heading: {
      fontSize: 30,
      fontFamily: fontsLoaded ? "Roboto Black" : undefined,
    },
  });

  return (
    <RnText style={[styles.base, styles[additionalStyle], style]}>
      {children}
    </RnText>
  );
};

export default Text;
