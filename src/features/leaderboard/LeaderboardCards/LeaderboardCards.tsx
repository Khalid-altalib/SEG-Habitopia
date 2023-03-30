import { View, VStack } from "native-base";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "../../../app/hooks";
import StatusContainer from "../../../components/StatusContainer/StatusContainer";
import LeaderboardCard from "../LeaderboardCard/LeaderboardCard";

type Props = {};

/**
 * LeaderboardCards component renders a vertical stack of LeaderboardCard components
 * @returns JSX.Element - LeaderboardCards component
 */
const LeaderboardCards = (props: Props) => {
  const { loading, error, entries } = useSelector((state) => state.leaderboard);

  return (
    <StatusContainer loading={loading} error={error} data={entries}>
      {entries && (
        <VStack space={25}>
          {entries.map((entry, index) => (
            <LeaderboardCard
              name={entry.name}
              checkins={entry.checkins}
              key={index}
              place={index}
              userId={entry.userId}
              testID="leaderboard-card"
            />
          ))}
        </VStack>
      )}
    </StatusContainer>
  );
};

export default LeaderboardCards;
