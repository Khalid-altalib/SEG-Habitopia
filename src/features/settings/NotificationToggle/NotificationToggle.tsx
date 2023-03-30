import { Box, HStack, theme } from "native-base";
import React, { useState } from "react";
import { Switch } from "react-native";
import { useDispatch, useSelector } from "../../../app/hooks";
import { setSettings } from "../settingsSlice";
import Text from "@components/Text";
import { TextType } from "types";

type Props = {
  defaultValue: boolean;
};

/**
 * A component that toggles the associated setting state between
 * true and false
 *
 * @param props - The properties passed to the component.
 * @returns - The notification toggle component.
 */

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
      flexDirection="row"
      borderBottomWidth={1}
      _light={{ borderColor: "gray.300" }}
      _dark={{ borderColor: "blueGray.700" }}
      paddingBottom={3}
    >
      <Box>
        <Text type={TextType.Small}>Notifications </Text>
        <Text type={TextType.Subtle}>Choose to receive notifications</Text>
      </Box>
      <Box>
        <Switch
          value={switchEnabled}
          onChange={handleSwitchChange}
          trackColor={{ true: theme.colors.purple[700] }}
          thumbColor="white"
          testID="switch"
        />
      </Box>
    </HStack>
  );
};

export default NotificationToggle;
