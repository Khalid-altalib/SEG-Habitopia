import { ScrollView } from "native-base";
import React from "react";
import RegularLayout from "../components/RegularLayout/RegularLayout";
import LeaderboardCards from "../features/leaderboard/LeaderboardCards/LeaderboardCards";

type Props = {};

const Leaderboard = (props: Props) => {
  return (
    <ScrollView>
      <RegularLayout>
        <LeaderboardCards />
      </RegularLayout>
    </ScrollView>
  );
};

export default Leaderboard;
