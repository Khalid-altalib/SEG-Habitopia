import { FlatList, Heading, View, VStack } from "native-base";
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
    { name: "Wins", quantity: 1 },
    { name: "Check Ins", quantity: 42 },
    { name: "Level", quantity: 8 },
  ];

  return (
    <VStack>
      <Heading mb={4}>Statistics</Heading>
      <View flexWrap="wrap" flexDirection={"row"}>
        {statistics.map((statistic, i) => (
          <ProfileStatistic statistic={statistic} key={i} />
        ))}
      </View>
    </VStack>
  );
};

export default ProfileStatistics;
