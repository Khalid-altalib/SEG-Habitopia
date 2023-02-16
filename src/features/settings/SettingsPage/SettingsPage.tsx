import React from "react";
import { Box, VStack, Button } from "native-base";
import SettingsItem from "../SettingsItem/SettingsItem";
import NotificationToggle from "../NotificationToggle/NotificationToggle";
import { useAppDispatch } from "../../../app/hooks";
import { logOutUser } from "../../auth/authSlice";

const SettingsPage = () => {
  const settingEntries = [
    { type: "Name", value: "Tareita Nawaz" },
    { type: "Email", value: "tareita@example.org" },
    { type: "Password", value: "Password123" },
  ];

  const dispatch = useAppDispatch();

  return (
    <VStack>
      {settingEntries.map((entry, index) => (
        <Box paddingBottom="3">
          <SettingsItem type={entry.type} value={entry.value} />
        </Box>
      ))}
      <NotificationToggle />
      <Button
        onPress={() => {
          dispatch(logOutUser());
        }}
        my={10}
      >
        Log Out
      </Button>
    </VStack>
  );
};

export default SettingsPage;
