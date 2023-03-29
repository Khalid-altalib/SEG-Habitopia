import React, { useEffect } from "react";
import { Box, VStack } from "native-base";
import SettingsItem from "../SettingsItem/SettingsItem";
import NotificationToggle from "../NotificationToggle/NotificationToggle";
import { useDispatch, useSelector } from "../../../app/hooks";
import { logOutUser } from "../../auth/authSlice";
import StatusContainer from "../../../components/StatusContainer/StatusContainer";
import { fetchSettings } from "../settingsSlice";
import settingEntries from "../settingEntries";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootParams } from "types";
import Button from "@components/Button";
import { ButtonType } from "types";
import ColorModeToggle from "@features/settings/ColorModeToggle";


/**
 * Contains the various features of the settings page, such as the ability
 * to toggle the settings from the home page, access setting details for particular 
 * settings and be able to log out from the app
 *
 * @param props - The properties passed to the component.
 * @returns - The settings page component.
 */
const SettingsPage = () => {
  const navigation = useNavigation<NavigationProp<RootParams>>();

  const { settings, fetchSettings: requestStatus } = useSelector(
    (state) => state.settings
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSettings());
  }, []);

  const handleLogOut = async () => {
    dispatch(logOutUser());
    navigation.goBack();
  };

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
          onPress={handleLogOut}
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
