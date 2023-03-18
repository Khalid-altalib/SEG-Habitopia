import { AspectRatio, Box, Heading, HStack, theme, View } from "native-base";
import Avatar from "@components/Avatar/Avatar";

import React from "react";
import Card from "../../../components/Card";
import Text from "../../../components/Text";
import { NavigationParams, TextType } from "../../../../types";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Props = {
  name: string;
  checkins: number;
  place: number;
  userId: string;
};

const rankedColors: [string, string][] = [
  [theme.colors.amber[400], theme.colors.amber[300]],
  [theme.colors.orange[400], theme.colors.orange[300]],
  [theme.colors.coolGray[400], theme.colors.coolGray[300]],
];

const LeaderboardCard = (props: Props) => {
  const { name, checkins, place, userId } = props;

  const cardColor =
    place < rankedColors.length ? rankedColors[place] : undefined;

  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationParams>>();

  const handlePress = () => navigation.push("Profile", { userId: userId });

  return (
    <TouchableOpacity onPress={handlePress}>
      <Card backgroundColorGradient={cardColor}>
        <HStack justifyContent={"space-between"} alignItems="center">
          <HStack space={25}>
            <Box boxSize={50}>
              <Avatar userId={userId} />
            </Box>
            <View>
              <Text
                type={TextType.Subheading}
                color={cardColor ? theme.colors.blueGray[900] : undefined}
              >
                {name}
              </Text>
              <Text
                type={TextType.Regular}
                color={cardColor ? theme.colors.blueGray[900] : undefined}
              >
                {checkins} Checkins
              </Text>
            </View>
          </HStack>
          <View>
            <Text
              type={TextType.Subheading}
              color={cardColor ? theme.colors.blueGray[900] : undefined}
            >
              #{place + 1}
            </Text>
          </View>
        </HStack>
      </Card>
    </TouchableOpacity>
  );
};

export default LeaderboardCard;
