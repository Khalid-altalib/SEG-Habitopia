import React, { useEffect } from "react";
import { Box, VStack, Button } from "native-base";
import SettingsItem from "../SettingsItem/SettingsItem";
import NotificationToggle from "../NotificationToggle/NotificationToggle";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { logOutUser } from "../../auth/authSlice";
import StatusContainer from "../../../components/StatusContainer/StatusContainer";
import { fetchSettings } from "../settingsSlice";

type SettingEntry = {
  type: string;
  key: string;
};

const SettingsPage = () => {
  const settingEntries: SettingEntry[] = [
    { type: "Name", key: "name" },
    { type: "Email", key: "email" },
    { type: "Password", key: "password" },
  ];

  const { settings, fetchSettings: requestStatus } = useAppSelector(
    (state) => state.settings
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSettings());
  }, []);

  console.log(settings);

  return (
    <StatusContainer
      loading={requestStatus.loading}
      error={requestStatus.error}
      data={settings.email.length > 0}
    >
      <VStack>
        {settingEntries.map((entry, index) => (
          <Box paddingBottom="3" key={index}>
            <SettingsItem
              type={entry.type}
              value={settings[entry.key] as string}
            />
          </Box>
        ))}
        <NotificationToggle defaultValue={settings.notifications} />
        <Button
          onPress={() => {
            dispatch(logOutUser());
          }}
          my={10}
        >
          Log Out
        </Button>
      </VStack>
    </StatusContainer>
  );
};

export default SettingsPage;
