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
import { SettingsParams } from "../../../../types";
import { TouchableOpacity } from "react-native";

type Props = {
  type: string;
  value: string;
};
//add placeholder text
//password - enter new, confirme
function SettingsItem(props: Props) {
  const navigation = useNavigation<NativeStackNavigationProp<SettingsParams>>();
  const { type, value } = props;

  return (
    <Pressable
      onPress={() => navigation.push("SettingDetails", { settingType: type })}
    >
      <HStack display={"flex"} alignItems={"flex-start"}>
        <Box flex={1}>{type} </Box>
        <Box borderBottomWidth={"1px"} paddingBottom="3" flex={3}>
          {type === "Password" ? (
            <Input
              type="password"
              variant="unstyled"
              editable={false}
              maxW="50%"
            >
              {value}
            </Input>
          ) : (
            <Text>{value}</Text>
          )}
        </Box>
      </HStack>
    </Pressable>
  );
}

export default SettingsItem;
