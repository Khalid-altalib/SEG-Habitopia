import React from "react";
import { ImageBackground, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box, Heading, ZStack, Image } from "native-base";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import FlowLayout from "../components/FlowLayout/FlowLayout";
import Layout from "../constants/Layout";
import styles from "../constants/Styles";
import { AuthParams, ButtonType, TextType } from "../../types";
import Background from "../components/Background";
import PaddedContainer from "../components/PaddedContainer";
import Text from "../components/Text";
import Button from "../components/Button";

function Welcome(): JSX.Element {
  const WINDOW_WIDTH: number = Math.round(Layout.window.width);
  const WINDOW_HEIGHT: number = Math.round(Layout.window.height);

  const BACKGROUND_IMAGE_PATH: string = `https://picsum.photos/id/65/${WINDOW_WIDTH}/${WINDOW_HEIGHT}`;
  const HABITOPIA_LOGO_IMAGE_PATH: string = `https://picsum.photos/id/237/60`;

  const navigation = useNavigation<NavigationProp<AuthParams>>();

  return (
    <Background>
      <PaddedContainer>
        <View
          style={[
            styles.maxSize,
            {
              paddingTop: "30%",
              paddingBottom: "20%",
              justifyContent: "space-between",
            },
          ]}
        >
          <View style={{ alignItems: "center" }}>
            <Text type={TextType.Heading} style={{ marginBottom: "3%" }}>
              Habitopia.
            </Text>
            <Text type={TextType.Subtle} style={{ marginBottom: "3%" }}>
              Unlimited accountability to beat procrastination.
            </Text>
          </View>
          <View>
            <Button
              type={ButtonType.Primary}
              onPress={() => navigation.navigate("PhoneNumber")}
              isFullWidth
            >
              Create account
            </Button>
            <Button
              type={ButtonType.Secondary}
              style={{ marginTop: 20 }}
              onPress={() => navigation.navigate("LogIn")}
              isFullWidth
            >
              Sign in
            </Button>
          </View>
        </View>
      </PaddedContainer>
    </Background>
  );
}

export default Welcome;
