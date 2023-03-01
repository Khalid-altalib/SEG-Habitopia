import { Box, HStack, Text } from "native-base";
import React, { useState } from "react";
import { Switch } from "react-native";
import { useDispatch, useSelector } from "../../../app/hooks";
import { setSettings } from "../settingsSlice";

type Props = {
  defaultValue: boolean;
};

const NotificationToggle = (props: Props) => {
  const [switchEnabled, setSwitchEnabled] = useState(props.defaultValue);
  const dispatch = useDispatch();

  const handleSwitchChange = () => {
    const invertedSwitchValue = !switchEnabled;
    setSwitchEnabled(invertedSwitchValue);
    dispatch(setSettings({ notifications: invertedSwitchValue }));
  };

  return (
    <HStack
      display={"flex"}
      justifyContent={"space-between"}
      alignItems="center"
    >
      <Box>
        <Text>Notifications </Text>
        <Text fontSize="xs">Enable/Disable Notifications on this app</Text>
      </Box>
      <Box>
        <Switch value={switchEnabled} onChange={handleSwitchChange} />
      </Box>
    </HStack>
  );
};

export default NotificationToggle;
