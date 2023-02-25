import React from "react";
import { View } from "react-native";

import { TextType } from "../../../../types";
import Text from "../../../components/Text";
import PaddedContainer from "../../../components/PaddedContainer";
import Background from "../../../components/Background";
import SelectInstagramForm from "../../../features/auth/SelectInstagramForm";

/**
 * @returns A React component which represents the screen where the user must
 * enter their Instagram handle in order to retrieve their proifle picture to
 * use for Habitopia as well.
 */
const SelectInstagram = () => {
  return (
    <Background>
      <PaddedContainer>
        <View style={{ width: "100%", height: "100%", paddingTop: "10%" }}>
          <Text type={TextType.Heading}>What's your Instagram handle?</Text>
          <Text
            type={TextType.Subtle}
            style={{ marginTop: 5, marginBottom: "10%" }}
          >
            We will retrieve your Instagram profile picture from your username.
          </Text>
          <SelectInstagramForm />
        </View>
      </PaddedContainer>
    </Background>
  );
};

export default SelectInstagram;
