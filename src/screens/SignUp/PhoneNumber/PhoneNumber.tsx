import React from "react";
import { View } from "react-native";

import { TextType } from "../../../../types";
import Text from "../../../components/Text";
import PaddedContainer from "../../../components/PaddedContainer";
import Background from "../../../components/Background";
import styles from "../../../constants/Styles";
import PhoneNumberForm from "../../../features/auth/PhoneNumberForm";

/**
 * @returns A React component representing the phone number screen, with an input for
 * the phone number, legal details, and a button to continue.
 */
const PhoneNumber = () => {
  return (
    <Background>
      <PaddedContainer>
        <View style={[styles.maxSize, { paddingTop: "10%" }]}>
          <Text type={TextType.Heading}>What's your phone number?</Text>
          <Text
            type={TextType.Subtle}
            style={{ marginTop: 5, marginBottom: "10%" }}
          >
            Habitopia will send you a text with a verification code. Message and
            data rates may apply.
          </Text>
          <PhoneNumberForm />
        </View>
      </PaddedContainer>
    </Background>
  );
};

export default PhoneNumber;
