import React, { useEffect, useState } from "react";
import { StyleSheet, Text as RnText } from "react-native";
import { theme, useColorModeValue } from "native-base";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { TextType } from "../../../types";

type Props = {
  type?: TextType;
  style: StyleSheet;
  children: string;
};

const Text = ({ type, style, children }: any) => {
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

    setFontsLoaded(true);
  };

  useEffect(() => {
    async function loading() {
      await loadFonts();
      setFontsLoaded(true);
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
      color: useColorModeValue(theme.colors.gray[900], theme.colors.gray[200]),
    },
    regular: {
      fontSize: 19,
      fontFamily: fontsLoaded ? "Roboto Medium" : undefined,
    },
    subtle: {
      fontSize: 15,
      color: useColorModeValue(theme.colors.gray[500], theme.colors.gray[400]),
      fontFamily: fontsLoaded ? "Roboto Medium" : undefined,
    },
    heading: {
      fontSize: 40,
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
