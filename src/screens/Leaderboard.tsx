import { HStack, ScrollView, Select, VStack } from "native-base";
import React from "react";
import RegularLayout from "../components/RegularLayout/RegularLayout";
import LeaderboardCards from "../features/leaderboard/LeaderboardCards/LeaderboardCards";
import LeaderboardSettings from "../features/leaderboard/LeaderboardSettings/LeaderboardSettings";

type Props = {};

const Leaderboard = (props: Props) => {
  return (
    <ScrollView>
      <RegularLayout>
        <VStack space={4}>
          <LeaderboardSettings />
          <LeaderboardCards />
        </VStack>
      </RegularLayout>
    </ScrollView>
  );
};

export default Leaderboard;
