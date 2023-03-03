import { useSelector } from "@app/hooks";
import { Box, FlatList, Heading, Text, VStack } from "native-base";
import React from "react";
import ParticipantEntry from "../ParticipantEntry/ParticipantEntry";

type Props = {};

const ParticipantsList = (props: Props) => {
  const data = [{ name: "bob" }, { name: "tom" }];

  const participants = useSelector(
    (state) => state.chats.details?.participants
  );

  return (
    <VStack>
      <Heading mb={4}>Participants</Heading>
      {participants &&
        participants.map((item, i) => (
          <ParticipantEntry participant={item} key={i} />
        ))}
    </VStack>
  );
};

export default ParticipantsList;
