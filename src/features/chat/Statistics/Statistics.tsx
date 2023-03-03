import { useSelector } from "@app/hooks";
import { Box, Center, Heading, HStack, Text } from "native-base";
import React from "react";

type StatisticBoxProps = {
  timestamp: string;
  statisticType: string;
};

const StatisticBox = (props: StatisticBoxProps) => {
  const { timestamp, statisticType } = props;

  return (
    <Box
      padding={3}
      borderRadius={8}
      backgroundColor="info.600"
      margin={3}
      width="125px"
    >
      <Center>
        <Heading fontSize="xl">{timestamp}</Heading>
        <Text fontSize="lg">{statisticType}</Text>
      </Center>
    </Box>
  );
};

const Statistics = () => {
  const statistics = useSelector((state) => state.chats.details?.statistics);

  return (
    statistics && (
      <HStack space={2} justifyContent="center">
        <StatisticBox timestamp={statistics.started} statisticType="Started" />
        <StatisticBox timestamp={statistics.ending} statisticType="Ending" />
      </HStack>
    )
  );
};

export default Statistics;
