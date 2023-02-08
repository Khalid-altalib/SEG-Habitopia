import React from "react";
import { ImageBackground } from "react-native";
import { Button, Box, Heading, ZStack, Image } from "native-base";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import FlowLayout from "../components/FlowLayout/FlowLayout";
import Layout from "../constants/Layout";
import { AuthParams } from "../../types";

function Welcome(): JSX.Element {
  const WINDOW_WIDTH: number = Math.round(Layout.window.width);
  const WINDOW_HEIGHT: number = Math.round(Layout.window.height);

  const BACKGROUND_IMAGE_PATH: string = `https://picsum.photos/id/65/${WINDOW_WIDTH}/${WINDOW_HEIGHT}`;
  const HABITOPIA_LOGO_IMAGE_PATH: string = `https://picsum.photos/id/237/60`;

  const navigation = useNavigation<NavigationProp<AuthParams>>();

  return (
    <ZStack>
      <ImageBackground
        source={{ uri: BACKGROUND_IMAGE_PATH }}
        // style={{ width: "100%", height: "100%" }}
      />
      <FlowLayout>
        <Box
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Box style={{ width: "100%", alignItems: "center" }}>
            <Box
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-evenly",
              }}
            >
              <Image
                source={{ uri: HABITOPIA_LOGO_IMAGE_PATH }}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                }}
                alt="The Habitopia logo"
              />
              <Heading size="3xl">Habitopia</Heading>
            </Box>
            <Heading style={{ textAlign: "center", marginTop: 15 }} size="md">
              Unlimited accountability to beat procrastination.
            </Heading>
          </Box>
          <Box style={{ width: "100%" }}>
            <Button
              style={{ width: "100%" }}
              size="lg"
              colorScheme="blue"
              onPress={() => navigation.navigate("SignUp")}
            >
              Sign up
            </Button>
            <Button
              style={{ width: "100%", marginTop: 25 }}
              size="lg"
              colorScheme="dark"
              variant="subtle"
              onPress={() => navigation.navigate("LogIn")}
            >
              Log in
            </Button>
          </Box>
        </Box>
      </FlowLayout>
    </ZStack>
  );
}

export default Welcome;
