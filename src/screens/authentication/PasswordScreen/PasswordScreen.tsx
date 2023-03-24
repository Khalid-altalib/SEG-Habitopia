import React from "react";
import { View } from "react-native";

import { TextType } from "types";
import Background from "@components/Background";
import PaddedContainer from "@components/PaddedContainer";
import Text from "@components/Text";
import PasswordForm from "@features/auth/PasswordForm/PasswordForm";
import { List } from "native-base";

const PasswordScreen = () => {
  const rules = [
    "Is 8 characters or longer",
    "Contains at least one uppercase and lowercase character",
    "Contains at least one special character",
  ];

  return (
    <Background>
      <PaddedContainer>
        <View style={{ width: "100%", height: "100%", paddingTop: "10%" }}>
          <Text type={TextType.Heading} style={{ marginBottom: 25 }}>
            What's your password?
          </Text>
          <Text type={TextType.Regular} style={{ marginBottom: 5 }}>
            Please ensure password:
          </Text>
          <List marginBottom={4} space={2} borderWidth={0}>
            {rules.map((rule, index) => (
              <Text type={TextType.Subtle} key={index}>
                - {rule}
              </Text>
            ))}
          </List>
          <PasswordForm />
        </View>
      </PaddedContainer>
    </Background>
  );
};

export default PasswordScreen;
