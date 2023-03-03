import { Box, FlatList, Heading, Text, VStack } from "native-base";
import React from "react";
import ParticipantEntry from "../ParticipantEntry/ParticipantEntry";

type Props = {};

const ParticipantsList = (props: Props) => {
  const data = [{ name: "bob" }, { name: "tom" }];

  return (
    <VStack>
      <Heading mb={4}>Participants</Heading>
      {data.map((item, i) => (
        <ParticipantEntry participant={item} key={i} />
      ))}
    </VStack>
  );
};

export default ParticipantsList;
