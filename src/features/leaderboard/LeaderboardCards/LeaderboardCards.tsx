import { View, VStack } from "native-base";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "../../../app/hooks";
import StatusContainer from "../../../components/StatusContainer/StatusContainer";
import LeaderboardCard from "../LeaderboardCard/LeaderboardCard";
import { fetchLeaderboard } from "../leaderboardSlice";

type Props = {};

const LeaderboardCards = (props: Props) => {
  const { loading, error, entries } = useSelector((state) => state.leaderboard);

  return (
    <StatusContainer loading={loading} error={error} data={entries}>
      {entries && (
        <VStack space={5}>
          {entries.map((entry, index) => (
            <LeaderboardCard
              name={entry.name}
              value={entry.checkins}
              key={index}
              place={index}
              userId={"a"}
            />
          ))}
        </VStack>
      )}
    </StatusContainer>
  );
};

export default LeaderboardCards;
