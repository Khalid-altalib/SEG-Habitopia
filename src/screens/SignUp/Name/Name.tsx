import React from "react";
import { View } from "react-native";

import { TextType } from "../../../../types";
import Text from "../../../components/Text";
import PaddedContainer from "../../../components/PaddedContainer";
import Background from "../../../components/Background";
import NameForm from "../../../features/auth/NameForm";

/**
 * @returns A React component representing the screen where the user enters their
 * name into the system during sign-up.
 */
const Name = () => {
  return (
    <Background>
      <PaddedContainer>
        <View style={{ width: "100%", height: "100%", paddingTop: "10%" }}>
          <Text type={TextType.Heading} style={{ marginBottom: "10%" }}>
            What's your name?
          </Text>
          <NameForm />
        </View>
      </PaddedContainer>
    </Background>
  );
};

export default Name;
