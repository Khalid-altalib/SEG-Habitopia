import React from "react";
import { View } from "react-native";

import { TextType } from "../../../../types";
import Text from "../../../components/Text";
import PaddedContainer from "../../../components/PaddedContainer";
import Background from "../../../components/Background";
import styles from "../../../constants/Styles";
import ConfirmationCodeForm from "../../../features/auth/ConfirmationCodeForm";

/**
 * @returns A React component representing the confirmation code page, where
 * the user can enter the confirmation code sent to to them after they entered
 * their phone number into the system.
 */
const ConfirmationCode = () => {
  return (
    <Background>
      <PaddedContainer>
        <View style={[styles.maxSize, { paddingTop: "10%" }]}>
          <Text type={TextType.Heading} style={{ marginBottom: "10%" }}>
            What's the confirmation code you received?
          </Text>
          <ConfirmationCodeForm />
        </View>
      </PaddedContainer>
    </Background>
  );
};

export default ConfirmationCode;
