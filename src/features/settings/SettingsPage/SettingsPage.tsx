import React, { useEffect } from "react";
import { Box, VStack, Button } from "native-base";
import SettingsItem from "../SettingsItem/SettingsItem";
import NotificationToggle from "../NotificationToggle/NotificationToggle";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { logOutUser } from "../../auth/authSlice";
import StatusContainer from "../../../components/StatusContainer/StatusContainer";
import { fetchSettings } from "../settingsSlice";
import settingEntries from "../settingEntries";

const SettingsPage = () => {
  const { settings, fetchSettings: requestStatus } = useAppSelector(
    (state) => state.settings
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSettings());
  }, []);

  return (
    <StatusContainer
      loading={requestStatus.loading}
      error={requestStatus.error}
      data={settings.email.length > 0}
    >
      <VStack>
        {Object.keys(settingEntries).map((key) => (
          <Box paddingBottom="3" key={key}>
            <SettingsItem
              type={key}
              entry={settingEntries[key]}
              value={settings[key] as string}
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
