// React
import React, { useEffect, useState } from "react";

// React Native
import { StyleSheet, Text as RnText } from "react-native";

// Native Base
import { theme, useColorModeValue } from "native-base";

// Expo Font
import * as Font from "expo-font";

// Expo Splash Screen
import * as SplashScreen from "expo-splash-screen";

// Habitopia
import { TextType } from "types";

import { act } from "@testing-library/react-native";

export type TextProps = {
  /** The type of text. Affects font family, weight, etc. */
  type?: TextType;
  /** Any additional styles to apply to the text. */
  style?: any;
  /** The actual text itself, along with possibly an icon. */
  children: any;
  /** The color of the text. */
  color?: string;
};

const Text = ({ type, style, children, color }: TextProps) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    try {
      await Font.loadAsync({
        "Roboto Black": require("../../../assets/fonts/Roboto/Black.ttf"),
        "Roboto Medium": require("../../../assets/fonts/Roboto/Medium.ttf"),
      });
    } catch (error) {
      console.log(error);
    }

    act(() => {
      setFontsLoaded(true);
    });
  };

  useEffect(() => {
    async function loading() {
      await loadFonts();
      act(() => {
        setFontsLoaded(true);
      });
    }
    loading();
  }, []);

  useEffect(() => {
    async function hideSplashScreen() {
      if (fontsLoaded) {
        try {
          await SplashScreen.hideAsync();
        } catch (error) {
          console.log(error);
        }
      }
    }
    hideSplashScreen();
  }, [fontsLoaded]);

  if (type == undefined) type = TextType.Regular;

  const additionalStyle = TextType[type]
    .toString()
    .toLowerCase() as keyof typeof styles;

  const styles = StyleSheet.create({
    base: {
      color:
        color ||
        useColorModeValue(theme.colors.gray[900], theme.colors.gray[200]),
    },
    regular: {
      fontSize: 19,
      fontFamily: fontsLoaded ? "Roboto Medium" : undefined,
    },
    small: {
      fontSize: 15,
      fontFamily: fontsLoaded ? "Roboto Medium" : undefined,
    },
    subtle: {
      fontSize: 15,
      color:
        color ||
        useColorModeValue(theme.colors.gray[500], theme.colors.gray[400]),
      fontFamily: fontsLoaded ? "Roboto Medium" : undefined,
    },
    heading: {
      fontSize: 40,
      fontFamily: fontsLoaded ? "Roboto Black" : undefined,
    },
    subheading: {
      fontSize: 23,
      fontFamily: fontsLoaded ? "Roboto Black" : undefined,
    },
    button: {
      color: useColorModeValue(theme.colors.gray[200], theme.colors.gray[200]),
      fontSize: 19,
      fontFamily: fontsLoaded ? "Roboto Medium" : undefined,
    },
  });

  return (
    <RnText style={[styles.base, styles[additionalStyle], style]}>
      {children}
    </RnText>
  );
};

export default Text;
