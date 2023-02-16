import { Box, HStack, Switch, Text } from "native-base";
import React from "react";

type Props = {};

const NotificationToggle = (props: Props) => {
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
        <Switch size="md"></Switch>
      </Box>
    </HStack>
  );
};

export default NotificationToggle;
