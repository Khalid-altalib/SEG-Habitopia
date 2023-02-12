import { Button, HStack, Text, View, Alert, Modal } from "native-base";
import React, { useState } from "react";
import { set } from "react-hook-form";
import { Challenge, ChallengeParams } from "../../../../types";
import styles from "../../../constants/Styles";
import challengeModalStyles from "./ChallengeModalStyles";
import Navigation from "../../../navigation/Navigation";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Props = {};

const navigation = useNavigation<NativeStackNavigationProp<ChallengeParams>>();

const ChallengeModal = (props: Props) => {
  return (
    <View>
      <View style={challengeModalStyles.challengeModal}>
        <Text>.</Text>
        <HStack>
          <Button onPress={() => navigation.goBack()}>Back</Button>
          <Button>Join</Button>
        </HStack>
      </View>
    </View>
  );
};

export default ChallengeModal;
