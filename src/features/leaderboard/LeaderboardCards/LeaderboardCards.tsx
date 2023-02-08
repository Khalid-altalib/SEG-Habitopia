import { View, VStack } from "native-base";
import React from "react";
import StatusContainer from "../../../components/StatusContainer/StatusContainer";
import LeaderboardCard from "../LeaderboardCard/LeaderboardCard";

type Props = {};

const LeaderboardCards = (props: Props) => {
  const leaderboardEntries = [
    { name: "Ihtasham", wins: 63 },
    { name: "Tom", wins: 43 },
    { name: "Bob", wins: 35 },
    { name: "Harry", wins: 29 },
    { name: "George", wins: 27 },
    { name: "George", wins: 27 },
    { name: "George", wins: 27 },
    { name: "George", wins: 27 },
    { name: "George", wins: 27 },
    { name: "George", wins: 27 },
  ];
  return (
    <StatusContainer loading={false}>
      <VStack space={5}>
        {leaderboardEntries.map((entry, index) => (
          <LeaderboardCard
            name={entry.name}
            wins={entry.wins}
            key={index}
            place={index}
          />
        ))}
      </VStack>
    </StatusContainer>
  );
};

export default LeaderboardCards;
