import { View } from "native-base";
import React from "react";

type Props = {};

const LeaderboardCards = (props: Props) => {
  const leaderboardEntries = [
    { name: "Ihtasham", wins: 63 },
    { name: "Tom", wins: 43 },
    { name: "Bob", wins: 35 },
    { name: "Harry", wins: 29 },
    { name: "George", wins: 27 },
  ];
  return <View></View>;
};

export default LeaderboardCards;
