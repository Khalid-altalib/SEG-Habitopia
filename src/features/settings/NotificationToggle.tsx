import { Box, Switch, Text } from "native-base";
import React from "react";

type Props = {};

const NotificationToggle = (props: Props) => {
  return (
    <Box display="flex" justifyContent={"space-between"}>
      <Text>Recieve In-App Notifications </Text>
      <Switch size="md"></Switch>
    </Box>
  );
};

export default NotificationToggle;
