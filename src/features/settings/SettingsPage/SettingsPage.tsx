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
