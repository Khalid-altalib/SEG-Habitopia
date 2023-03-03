import React, { useEffect } from "react";
import { Box, VStack } from "native-base";
import SettingsItem from "../SettingsItem/SettingsItem";
import NotificationToggle from "../NotificationToggle/NotificationToggle";
import { useDispatch, useSelector } from "../../../app/hooks";
import { logOutUser } from "../../auth/authSlice";
import StatusContainer from "../../../components/StatusContainer/StatusContainer";
import { fetchSettings } from "../settingsSlice";
import settingEntries from "../settingEntries";
import Button from "@components/Button";
import { ButtonType } from "types";
import ColorModeToggle from "@features/settings/ColorModeToggle";

const SettingsPage = () => {
  const { settings, fetchSettings: requestStatus } = useSelector(
    (state) => state.settings
  );

  const dispatch = useDispatch();

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
        <ColorModeToggle />
        <Button
          onPress={() => {
            dispatch(logOutUser());
          }}
          style={{ marginTop: 40 }}
          isFullWidth
          type={ButtonType.Primary}
        >
          Log out
        </Button>
      </VStack>
    </StatusContainer>
  );
};

export default SettingsPage;
