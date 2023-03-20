import React from "react";
import { View } from "react-native";

import { TextType } from "types";
import Background from "@components/Background";
import PaddedContainer from "@components/PaddedContainer";
import Text from "@components/Text";
import PasswordForm from "@features/auth/PasswordForm/PasswordForm";

const PasswordScreen = () => {
  return (
    <Background>
      <PaddedContainer>
        <View style={{ width: "100%", height: "100%", paddingTop: "10%" }}>
          <Text type={TextType.Heading} style={{ marginBottom: "10%" }}>
            What's your password?
          </Text>
          <PasswordForm />
        </View>
      </PaddedContainer>
    </Background>
  );
};

export default PasswordScreen;
