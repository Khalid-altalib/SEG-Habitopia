import React from "react";
import { Box, Pressable, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";
import { SettingsParams } from "../../../types";

type Props = {
  type: string;
};

function SettingsItem(props: Props) {
  const navigation = useNavigation<NavigationProp<SettingsParams>>();
  const { type } = props;

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("SettingDetails", { settingType: type })
      }
    >
      <Text>{type}: placeholder</Text>
    </Pressable>
  );
}

export default SettingsItem;
