import React from "react";
import {
  Box,
  HStack,
  Input,
  Pressable,
  Text,
  TextArea,
  TextField,
  View,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { RootParams } from "../../../../types";

type Props = {
  type: string;
  value: string;
};
//add placeholder text
//password - enter new, confirme
function SettingsItem(props: Props) {
  const navigation = useNavigation<NativeStackNavigationProp<RootParams>>();
  const { type, value } = props;

  return (
    <Box>
      <HStack display={"flex"} alignItems={"flex-start"}>
        <Box flex={1}>{type} </Box>
        <Box borderBottomWidth={"1px"} paddingBottom="3" flex={3}>
          <TouchableOpacity
            onPress={() =>
              navigation.push("SettingDetails", {
                settingType: type,
                defaultValue: value,
              })
            }
          >
            {type === "Password" ? <Text>*******</Text> : <Text>{value}</Text>}
          </TouchableOpacity>
        </Box>
      </HStack>
    </Box>
  );
}

export default SettingsItem;
