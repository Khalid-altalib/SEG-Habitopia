import { HStack, ScrollView, Select, VStack } from "native-base";
import React from "react";
import RegularLayout from "../components/RegularLayout/RegularLayout";
import LeaderboardCards from "../features/leaderboard/LeaderboardCards/LeaderboardCards";
import LeaderboardLayout from "../features/leaderboard/LeaderboardLayout/LeaderboardLayout";
import LeaderboardSettings from "../features/leaderboard/LeaderboardSettings/LeaderboardSettings";

type Props = {};

const Leaderboard = (props: Props) => {
  return (
    <LeaderboardLayout>
      <LeaderboardSettings />
      <LeaderboardCards />
    </LeaderboardLayout>
  );
};

export default Leaderboard;
