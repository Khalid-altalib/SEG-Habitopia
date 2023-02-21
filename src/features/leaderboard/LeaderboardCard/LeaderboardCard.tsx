import { Avatar, Box, Heading, HStack, theme, View } from "native-base";

import React from "react";
import Card from "../../../components/Card";
import Text from "../../../components/Text";
import { TextType } from "../../../../types";

type Props = {
  name: string;
  wins: number;
  place: number;
};

const rankedColors: [string, string][] = [
  [theme.colors.amber[400], theme.colors.amber[300]],
  [theme.colors.orange[400], theme.colors.orange[300]],
  [theme.colors.coolGray[400], theme.colors.coolGray[300]],
];

const LeaderboardCard = (props: Props) => {
  const { name, wins, place } = props;

  const cardColor =
    place < rankedColors.length ? rankedColors[place] : undefined;

  return (
    <Card backgroundColorGradient={cardColor}>
      <HStack justifyContent={"space-between"} alignItems="center">
        <HStack space={4}>
          <Avatar />
          <View>
            <Text type={TextType.Subheading}>{name}</Text>
            <Text type={TextType.Regular}>{wins} wins</Text>
          </View>
        </HStack>
        <View>
          <Text type={TextType.Subheading}>#{place + 1}</Text>
        </View>
      </HStack>
    </Card>
  );
};

export default LeaderboardCard;
