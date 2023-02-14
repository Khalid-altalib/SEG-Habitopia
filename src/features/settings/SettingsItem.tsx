import React from "react";
import { Box, Pressable, Text } from "native-base";

type Props = {
  type: string;
};

function SettingsItem(props: Props) {
  const { type } = props;
  return (
    <Pressable>
      <Text>{type}: placeholder</Text>
    </Pressable>
  );
}

export default SettingsItem;
