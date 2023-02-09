import React from "react";
import { TextType } from "../../../../types";
import Text from "../../../components/Text";
import PaddedContainer from "../../../components/PaddedContainer";
import Background from "../../../components/Background";
import { View } from "react-native";
import styles from "../../../constants/Styles";
import ConfirmationCodeForm from "../../../features/auth/ConfirmationCodeForm";

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
