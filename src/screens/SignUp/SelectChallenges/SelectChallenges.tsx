import React from "react";
import { AuthParams, ButtonType, TextType } from "../../../../types";
import Text from "../../../components/Text";
import PaddedContainer from "../../../components/PaddedContainer";
import Background from "../../../components/Background";
import { View } from "react-native";
import styles from "../../../constants/Styles";
import Button from "../../../components/Button";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const SelectChallenges = () => {
  const navigation = useNavigation<NavigationProp<AuthParams>>();

  return (
    <Background>
      <PaddedContainer>
        <View style={[styles.maxSize, { paddingTop: "10%" }]}>
          <Text type={TextType.Heading}>
            Which of these do you want help with?
          </Text>
          <Text
            type={TextType.Subtle}
            style={{ marginTop: 5, marginBottom: "10%" }}
          >
            You will be able to change them later.
          </Text>
          <Button
            style={{ marginTop: 20 }}
            type={ButtonType.Secondary}
            isFullWidth
          >
            Waking up at the same time
          </Button>
          <Button
            style={{ marginTop: 20 }}
            type={ButtonType.Secondary}
            isFullWidth
          >
            Working out / sports
          </Button>
          <Button
            style={{ marginTop: 20 }}
            type={ButtonType.Secondary}
            isFullWidth
          >
            Studying
          </Button>
          <Button
            style={{ marginTop: 20 }}
            type={ButtonType.Secondary}
            isFullWidth
          >
            Meditation
          </Button>
          <Button
            style={{ marginTop: 20 }}
            type={ButtonType.Secondary}
            isFullWidth
          >
            Learning an instrument
          </Button>
          <Button
            style={{ marginTop: 20 }}
            type={ButtonType.Secondary}
            isFullWidth
          >
            Eating healthy meals
          </Button>
        </View>
      </PaddedContainer>
    </Background>
  );
};

export default SelectChallenges;
