// React
import React from "react";

// React Native
import { View } from "react-native";

// Habitopia
import Background from "../../components/Background";
import PaddedContainer from "../../components/PaddedContainer";
import Text from "../../components/Text";
import { TextType } from "../../../types";
import SignInForm from "../../features/auth/SignInForm";

/**
 * A sign in screen to allow the user to sign into their account.
 *
 * @returns The component representing the screen.
 */
const SignIn = () => (
  <Background>
    <PaddedContainer>
      <View style={{ width: "100%", height: "100%", paddingTop: "10%" }}>
        <Text type={TextType.Heading} style={{ marginBottom: "10%" }}>
          Welcome back!
        </Text>
        <SignInForm />
      </View>
    </PaddedContainer>
  </Background>
);

export default SignIn;
