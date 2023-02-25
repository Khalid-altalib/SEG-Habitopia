import React from "react";
import { View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";

import { AuthParams, ButtonType, TextType } from "../../../../types";
import Text from "../../../components/Text";
import PaddedContainer from "../../../components/PaddedContainer";
import Background from "../../../components/Background";
import Button from "../../../components/Button";

/**
 * @returns A React component representing the page where the user selects
 * what kind of avatar they want to use (from their camera, gallery, or
 * Instagram account) for their profile.
 */
const SelectAvatar = () => {
  const navigation = useNavigation<NavigationProp<AuthParams>>();

  return (
    <Background>
      <PaddedContainer>
        <View style={{ width: "100%", height: "100%", paddingTop: "10%" }}>
          <Text type={TextType.Heading}>Pick your avatar</Text>
          <Text
            type={TextType.Subtle}
            style={{ marginTop: 5, marginBottom: "10%" }}
          >
            You will be able to change it later.
          </Text>
          <Button
            style={{ marginTop: 20 }}
            type={ButtonType.Secondary}
            isFullWidth
          >
            Camera
          </Button>
          <Button
            style={{ marginTop: 20 }}
            type={ButtonType.Secondary}
            isFullWidth
          >
            Gallery
          </Button>
          <Button
            style={{ marginTop: 20 }}
            type={ButtonType.Secondary}
            isFullWidth
            onPress={() => navigation.navigate("SelectInstagram")}
          >
            Instagram
          </Button>
        </View>
      </PaddedContainer>
    </Background>
  );
};

export default SelectAvatar;
