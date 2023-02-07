import { HStack, Select } from "native-base";
import React from "react";

type Props = {};

const LeaderboardSettings = (props: Props) => {
  const timeInterval = "weekly";
  const challengeType = "sleep";

  return (
    <HStack space={4}>
      <Select selectedValue="weekly" placeholder="Choose time" minWidth={120}>
        <Select.Item label="Weekly" value="weekly" />
        <Select.Item label="Monthly" value="monthly" />
        <Select.Item label="All Time" value="allTime" />
      </Select>
      <Select selectedValue="sleep" placeholder="Choose time" minWidth={120}>
        <Select.Item label="Sleep" value="sleep" />
        <Select.Item label="Monthly" value="monthly" />
        <Select.Item label="All Time" value="allTime" />
      </Select>
    </HStack>
  );
};

export default LeaderboardSettings;
