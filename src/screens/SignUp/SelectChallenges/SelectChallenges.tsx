import React from "react";
import { View } from "react-native";

import { ButtonType, TextType } from "../../../../types";
import Text from "../../../components/Text";
import PaddedContainer from "../../../components/PaddedContainer";
import Background from "../../../components/Background";
import styles from "../../../constants/Styles";
import Button from "../../../components/Button";
import { useDispatch } from "../../../app/hooks";
import { signUpUser } from "../../../features/auth/authSlice";

/**
 * @param title The label to put inside the button.
 * @returns A button representing a challenge type.
 */
const ChallengeButton = ({ title }: { title: string }) => {
  return (
    <Button style={{ marginTop: 20 }} type={ButtonType.Secondary} isFullWidth>
      {title}
    </Button>
  );
};

/**
 * @returns A React component representing the screen where the user must select
 * some of the challenges they want to overcome by using Habitopia.
 */
const SelectChallenges = () => {
  const dispatch = useDispatch();

  const onSubmit = async () => {
    await dispatch(signUpUser());
  };

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
          <ChallengeButton title="Waking up at the same time" />
          <ChallengeButton title="Working out / sports" />
          <ChallengeButton title="Studying" />
          <ChallengeButton title="Meditation" />
          <ChallengeButton title="Learning an instrument" />
          <ChallengeButton title="Eating healthy meals" />
        </View>
      </PaddedContainer>
    </Background>
  );
};

export default SelectChallenges;
