import { useSelector } from "@app/hooks";
import { Box, Center, Heading, HStack, Text } from "native-base";
import React from "react";

type StatisticBoxProps = {
  statisticValue: string;
  statisticType: string;
};

/**
 * A generic components that can be used to display statistics for a challenge/chat room
 *
 * @param props - The properties passed to the component.
 * @returns - The box component.
 */
const StatisticBox = (props: StatisticBoxProps) => {
  const { statisticValue, statisticType } = props;

  return (
    <Box
      padding={3}
      borderRadius={8}
      backgroundColor="info.600"
      margin={3}
      width="125px"
    >
      <Center>
        <Heading fontSize="xl">{statisticValue}</Heading>
        <Text fontSize="lg">{statisticType}</Text>
      </Center>
    </Box>
  );
};

const Statistics = () => {
  const statistics = useSelector((state) => state.chats.details?.statistics);

  return statistics ? (
    <HStack space={2} justifyContent="center">
      <StatisticBox
        statisticValue={statistics.num.toString()}
        statisticType="Users"
      />
      <StatisticBox statisticValue={statistics.status} statisticType="Status" />
    </HStack>
  ) : (
    <HStack space={1} justifyContent="center">
      <Box
        padding={3}
        borderRadius={8}
        backgroundColor="info.600"
        margin={3}
        width="150px"
      >
        <Center>
          <Text fontSize="lg">No info found</Text>
        </Center>
      </Box>
    </HStack>
  );
};

export default Statistics;
