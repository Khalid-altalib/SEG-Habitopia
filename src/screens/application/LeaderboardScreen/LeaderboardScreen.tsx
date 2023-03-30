import React from "react";
import LeaderboardCards from "@features/leaderboard/LeaderboardCards/LeaderboardCards";
import LeaderboardLayout from "@features/leaderboard/LeaderboardLayout/LeaderboardLayout";
import LeaderboardSettings from "@features/leaderboard/LeaderboardSettings/LeaderboardSettings";
import Background from "@components/Background";
import PaddedContainer from "@components/PaddedContainer";

/**
 * @returns A React component which displays leaderboards
 * for each challenge type that exists
 */
const LeaderboardScreen = (): JSX.Element => {
  return (
    <Background>
      <LeaderboardLayout>
        <LeaderboardSettings />
        <PaddedContainer>
          <LeaderboardCards />
        </PaddedContainer>
      </LeaderboardLayout>
    </Background>
  );
};

export default LeaderboardScreen;
