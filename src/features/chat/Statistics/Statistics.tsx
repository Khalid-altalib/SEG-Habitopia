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
  return (
    <HStack space={2} justifyContent="center">
      <StatisticBox timestamp={"test"} statisticType="Started" />
      <StatisticBox timestamp={"test"} statisticType="Ending" />
    </HStack>
  );
};

export default Statistics;
