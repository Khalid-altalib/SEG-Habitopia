import React from "react";
import { TextType } from "../../../../types";
import Text from "../../../components/Text";
import PaddedContainer from "../../../components/PaddedContainer";
import Background from "../../../components/Background";
import { View } from "react-native";
import styles from "../../../constants/Styles";
import NameForm from "../../../features/auth/NameForm";

const Name = () => {
  return (
    <Background>
      <PaddedContainer>
        <View style={[styles.maxSize, { paddingTop: "10%" }]}>
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
