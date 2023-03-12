import React from "react";
import LeaderboardCards from "@features/leaderboard/LeaderboardCards/LeaderboardCards";
import LeaderboardLayout from "@features/leaderboard/LeaderboardLayout/LeaderboardLayout";
import LeaderboardSettings from "@features/leaderboard/LeaderboardSettings/LeaderboardSettings";
import Background from "@components/Background";
import { Box, Text } from "native-base";
import { FlatList } from "react-native";

type Props = {};

const LeaderboardScreen = (props: Props) => {
  return (
    <Background>
      <LeaderboardLayout>
        <LeaderboardSettings />
        <LeaderboardCards />
      </LeaderboardLayout>
    </Background>
  );
};

export default LeaderboardScreen;
