import { FlatList, Heading, VStack } from "native-base";
import React from "react";
import { Statistic } from "../../../../types";
import { useAppSelector } from "../../../app/hooks";
import ProfileStatistic from "./ProfileStatistic";

type Props = {};

const ProfileStatistics = (props: Props) => {
  const { error, loading, profile } = useAppSelector((state) => state.profile);
  //   const { statistics } = profile; // BACKEND_PLACEHOLDER

  const statistics: Statistic[] = [
    { name: "Streak", quantity: 5 },
    { name: "Wins", quantity: 5 },
    { name: "Check Ins", quantity: 5 },
    { name: "Level", quantity: 5 },
  ];

  return (
    <VStack>
      <Heading mb={4}>Statistics</Heading>
      <VStack space={4}>
        {statistics.map((statistic) => (
          <ProfileStatistic statistic={statistic} />
        ))}
      </VStack>
    </VStack>
  );
};

export default ProfileStatistics;
