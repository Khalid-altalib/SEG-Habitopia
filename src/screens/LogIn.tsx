import React from "react";
import styles from "../constants/Styles";
import LogInForm from "../features/auth/LogInForm";
import Background from "../components/Background";
import PaddedContainer from "../components/PaddedContainer";
import { View } from "react-native";
import Text from "../components/Text";
import { TextType } from "../../types";

const LogIn = () => {
  return (
    <Background>
      <PaddedContainer>
        <View style={[styles.maxSize, { paddingTop: "10%" }]}>
          <Text type={TextType.Heading} style={{ marginBottom: "10%" }}>
            Welcome back!
          </Text>
          <LogInForm />
        </View>
      </PaddedContainer>
    </Background>
  );
};

export default LogIn;
