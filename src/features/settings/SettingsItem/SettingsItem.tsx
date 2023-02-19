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
import { SettingEntry } from "../settingEntries";

type Props = {
  type: string;
  entry: SettingEntry;
  value: string;
};

function SettingsItem(props: Props) {
  const navigation = useNavigation<NativeStackNavigationProp<RootParams>>();
  const { type, value, entry } = props;

  return (
    <Box>
      <HStack display={"flex"} alignItems={"flex-start"}>
        <Box flex={1}>{entry.name}</Box>
        <Box borderBottomWidth={"1px"} paddingBottom="3" flex={3}>
          <TouchableOpacity
            onPress={() =>
              navigation.push("SettingDetails", {
                settingType: type,
                defaultValue: value,
              })
            }
          >
            {type === "password" ? <Text>*******</Text> : <Text>{value}</Text>}
          </TouchableOpacity>
        </Box>
      </HStack>
    </Box>
  );
}

export default SettingsItem;
