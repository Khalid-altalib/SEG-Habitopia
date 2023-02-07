import { Avatar, Box, Card, Heading, HStack, Text, View } from "native-base";
import React from "react";

type Props = {};

const LeaderboardCard = (props: Props) => {
  return (
    <Box shadow="3">
      <Card backgroundColor="amber.200">
        <HStack justifyContent={"space-between"} alignItems="center">
          <HStack space={4}>
            <Avatar />
            <View>
              <Heading>Ihtasham</Heading>
              <Text>140 Check-ins</Text>
            </View>
          </HStack>
          <View>
            <Heading>#1</Heading>
          </View>
        </HStack>
      </Card>
    </Box>
  );
};

export default LeaderboardCard;
