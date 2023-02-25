import React from "react";
import { View } from "react-native";

import { TextType } from "../../../../types";
import Text from "../../../components/Text";
import PaddedContainer from "../../../components/PaddedContainer";
import Background from "../../../components/Background";
import EmailAddressForm from "../../../features/auth/EmailAddressForm";

/**
 * @returns A React component representing the screen where the user enters
 * their email address into the system, along with whether or not they'd
 * like to receive marketing communications from Habitopia.
 */
const EmailAddress = () => {
  return (
    <Background>
      <PaddedContainer>
        <View style={{ width: "100%", height: "100%", paddingTop: "10%" }}>
          <Text type={TextType.Heading} style={{ marginBottom: "10%" }}>
            What's your email address?
          </Text>
          <EmailAddressForm />
        </View>
      </PaddedContainer>
    </Background>
  );
};

export default EmailAddress;
