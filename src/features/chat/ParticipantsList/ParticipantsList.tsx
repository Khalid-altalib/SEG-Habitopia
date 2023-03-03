import { Box, FlatList, Heading, Text, VStack } from "native-base";
import React from "react";
import ParticipantEntry from "../ParticipantEntry/ParticipantEntry";

type Props = {};

const ParticipantsList = (props: Props) => {
  const data = [{ name: "bob" }, { name: "tom" }];

  return (
    <VStack>
      <Heading mb={4}>Participants</Heading>
      <FlatList
        data={data}
        renderItem={({ item }) => <ParticipantEntry participant={item} />}
      />
    </VStack>
  );
};

export default ParticipantsList;
