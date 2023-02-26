import React from "react";
import LeaderboardCards from "@features/leaderboard/LeaderboardCards/LeaderboardCards";
import LeaderboardLayout from "@features/leaderboard/LeaderboardLayout/LeaderboardLayout";
import LeaderboardSettings from "@features/leaderboard/LeaderboardSettings/LeaderboardSettings";
import Background from "@components/Background";

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
