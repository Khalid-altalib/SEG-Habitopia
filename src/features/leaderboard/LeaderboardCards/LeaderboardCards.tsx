import { View, VStack } from "native-base";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "../../../app/hooks";
import StatusContainer from "../../../components/StatusContainer/StatusContainer";
import LeaderboardCard from "../LeaderboardCard/LeaderboardCard";
import { fetchLeaderboard } from "../leaderboardSlice";

type Props = {};

const LeaderboardCards = (props: Props) => {
  const { loading, error, entries } = useSelector((state) => state.leaderboard);
  console.log(entries);

  return (
    <StatusContainer loading={loading} error={error} data={entries}>
      {entries && (
        <VStack space={5}>
          {entries.map((entry, index) => (
            <LeaderboardCard
              name={entry.name}
              wins={entry.checkins}
              key={index}
              place={index}
            />
          ))}
        </VStack>
      )}
    </StatusContainer>
  );
};

export default LeaderboardCards;
