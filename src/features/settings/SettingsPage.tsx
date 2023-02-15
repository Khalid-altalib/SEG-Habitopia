import React from "react";
import {
  FlatList,
  Input,
  Text,
  Pressable,
  List,
  Switch,
  Box,
  VStack,
} from "native-base";
import SettingsItem from "./SettingsItem/SettingsItem";
import NotificationToggle from "./NotificationToggle";

const SettingsPage = () => {
  const settingEntries = [
    { type: "Name" },
    { type: "Email" },
    { type: "Password" },
  ];
  return (
    <VStack space={5}>
      {settingEntries.map((entry, index) => (
        <Box paddingBottom="5" borderBottomWidth={"1px"}>
          <SettingsItem type={entry.type} />
        </Box>
      ))}
      <NotificationToggle />
    </VStack>
  );
};

export default SettingsPage;
