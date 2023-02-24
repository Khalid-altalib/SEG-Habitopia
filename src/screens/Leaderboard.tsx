import { HStack, ScrollView, Select, VStack } from "native-base";
import React from "react";
import RegularLayout from "../components/RegularLayout/RegularLayout";
import LeaderboardCards from "../features/leaderboard/LeaderboardCards/LeaderboardCards";
import LeaderboardLayout from "../features/leaderboard/LeaderboardLayout/LeaderboardLayout";
import LeaderboardSettings from "../features/leaderboard/LeaderboardSettings/LeaderboardSettings";
import Background from "../components/Background";

type Props = {};

const Leaderboard = (props: Props) => {
  return (
    <Background>
      <LeaderboardLayout>
        <LeaderboardSettings />
        <LeaderboardCards />
      </LeaderboardLayout>
    </Background>
  );
};

export default Leaderboard;
