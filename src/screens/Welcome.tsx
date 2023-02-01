import React from "react";
import { ImageBackground } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, Box, Heading, ZStack, Image } from "native-base";

import Layout from "../constants/Layout";

function Welcome(): JSX.Element {
  const WINDOW_WIDTH: number = Math.round(Layout.window.width);
  const WINDOW_HEIGHT: number = Math.round(Layout.window.height);

  const BACKGROUND_IMAGE_PATH: string = `https://picsum.photos/id/65/${WINDOW_WIDTH}/${WINDOW_HEIGHT}`;
  const HABITOPIA_LOGO_IMAGE_PATH: string = `https://picsum.photos/id/237/60`;

  const insets = useSafeAreaInsets();

  return (
    <ZStack>
      <ImageBackground
        source={{ uri: BACKGROUND_IMAGE_PATH }}
        style={{ width: WINDOW_WIDTH, height: WINDOW_HEIGHT }}
      />
      <Box
        style={{
          width: "100%",
          height: "100%",
          paddingTop: insets.top + 30,
          paddingBottom: insets.bottom + 30,
          paddingLeft: insets.left + 30,
          paddingRight: insets.right + 30,
          alignItems: "center",
          justifyContent: "space-between",
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
          <Button style={{ width: "100%" }} size="lg" colorScheme="blue">
            Create account
          </Button>
          <Button
            style={{ width: "100%", marginTop: 25 }}
            size="lg"
            colorScheme="dark"
            variant="subtle"
          >
            Sign in
          </Button>
        </Box>
      </Box>
    </ZStack>
  );
}

export default Welcome;
