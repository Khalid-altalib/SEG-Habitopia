import { View, VStack } from "native-base";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "../../../app/hooks";
import StatusContainer from "../../../components/StatusContainer/StatusContainer";
import LeaderboardCard from "../LeaderboardCard/LeaderboardCard";
import { fetchLeaderboard } from "../leaderboardSlice";

type Props = {};

const LeaderboardCards = (props: Props) => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.leaderboard.loading);
  const error = useSelector((state) => state.leaderboard.error);
  const challengeType = useSelector((state) => state.leaderboard.challengeType);
  const timeInterval = useSelector((state) => state.leaderboard.timeInterval);

  const leaderboardEntries = [
    { name: "Ihtasham", wins: 63 },
    { name: "Tom", wins: 43 },
    { name: "Bob", wins: 35 },
    { name: "Harry", wins: 29 },
    { name: "George", wins: 27 },
    { name: "Harry", wins: 29 },
    { name: "George", wins: 27 },
    { name: "Harry", wins: 29 },
    { name: "George", wins: 27 },
  ]; // useSelector((state) => state.leaderboard.entries); BACKEND_PLACEHOLDER

  useEffect(() => {
    dispatch(fetchLeaderboard());
  }, [challengeType, timeInterval]);

  return (
    <StatusContainer loading={loading} error={error} data={leaderboardEntries}>
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
