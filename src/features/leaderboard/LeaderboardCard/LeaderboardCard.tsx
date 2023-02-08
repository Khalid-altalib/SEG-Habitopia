import { Avatar, Box, Card, Heading, HStack, Text, View } from "native-base";
import React from "react";

type Props = {
  name: string;
  wins: number;
  place: number;
};

const rankedColors = ["amber.200", "light.200", "orange.200"];

const LeaderboardCard = (props: Props) => {
  const { name, wins, place } = props;

  const cardColor =
    place < rankedColors.length ? rankedColors[place] : "light.100";

  return (
    <Box shadow="3">
      <Card backgroundColor={cardColor}>
        <HStack justifyContent={"space-between"} alignItems="center">
          <HStack space={4}>
            <Avatar />
            <View>
              <Heading>{name}</Heading>
              <Text>{wins} wins</Text>
            </View>
          </HStack>
          <View>
            <Heading>#{place + 1}</Heading>
          </View>
        </HStack>
      </Card>
    </Box>
  );
};

export default LeaderboardCard;
