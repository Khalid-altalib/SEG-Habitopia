import React from "react";
import { Box, Pressable, Text, TextArea, TextField } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SettingsParams } from "../../../../types";
import { TextBase } from "react-native";

type Props = {
  type: string;
};
//add placeholder text
//password - enter new, confirme
function SettingsItem(props: Props) {
  const navigation = useNavigation<NativeStackNavigationProp<SettingsParams>>();
  const { type } = props;

  return (
    <Pressable
      onPress={() => navigation.push("SettingDetails", { settingType: type })}
    >
      <Box display={"flex"} flexDirection="row" alignItems="center">
        <Text>{type}: </Text>
        <TextArea
          h={8}
          placeholder="Text Area Placeholder"
          w="75%"
          autoCompleteType={"off"}
          isDisabled
        />
      </Box>
    </Pressable>
  );
}

export default SettingsItem;
