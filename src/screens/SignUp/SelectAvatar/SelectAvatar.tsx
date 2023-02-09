import React from "react";
import { TextType } from "../../../../types";
import Text from "../../../components/Text";
import PaddedContainer from "../../../components/PaddedContainer";
import Background from "../../../components/Background";
import { View } from "react-native";
import styles from "../../../constants/Styles";
import Button from "../../../components/Button";

const SelectAvatar = () => {
  return (
    <Background>
      <PaddedContainer>
        <View style={[styles.maxSize, { paddingTop: "10%" }]}>
          <Text type={TextType.Heading}>Pick your avatar</Text>
          <Text
            type={TextType.Subtle}
            style={{ marginTop: 5, marginBottom: "10%" }}
          >
            You will be able to change it later.
          </Text>
          <Button style={{ marginTop: 20 }} isFullWidth>
            Camera
          </Button>
          <Button style={{ marginTop: 20 }} isFullWidth>
            Gallery
          </Button>
          <Button style={{ marginTop: 20 }} isFullWidth>
            Instagram
          </Button>
        </View>
      </PaddedContainer>
    </Background>
  );
};

export default SelectAvatar;
