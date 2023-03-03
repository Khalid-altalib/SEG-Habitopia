import Avatar from "@components/Avatar/Avatar";
import { Box, Card, HStack, Image, Text } from "native-base";
import React from "react";

type Props = {
  participant: any;
};

const ParticipantEntry = (props: Props) => {
  const { participant } = props;
  const { name } = participant;

  return (
    <Box backgroundColor="info.600" mb={3} padding={3} borderRadius={8}>
      <HStack justifyContent={"space-between"} alignItems="center">
        <Avatar name={name} />
        <Text fontSize="xl">{name}</Text>
      </HStack>
    </Box>
  );
};

export default ParticipantEntry;
