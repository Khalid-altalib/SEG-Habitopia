import React from "react";
import {
  Box,
  HStack,
  Input,
  Pressable,
  TextArea,
  TextField,
  View,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { RootParams, TextType } from "../../../../types";
import { SettingEntry } from "../settingEntries";
import Text from "@components/Text";

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
        <Box
          flexDirection="row"
          borderBottomWidth={1}
          _dark={{ borderColor: "blueGray.700" }}
        >
          <Text style={{ flex: 1 }} type={TextType.Small}>
            {entry.name}
          </Text>
          <Box paddingBottom="3" flex={3}>
            <TouchableOpacity
              onPress={() =>
                navigation.push("SettingDetails", {
                  settingType: type,
                  defaultValue: value,
                })
              }
            >
              {type === "password" ? (
                <Text type={TextType.Subtle}>*******</Text>
              ) : (
                <Text type={TextType.Subtle}>{value}</Text>
              )}
            </TouchableOpacity>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
}

export default SettingsItem;
