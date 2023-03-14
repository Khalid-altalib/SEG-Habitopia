import { useSelector } from "@app/hooks";
import UserList from "@components/UserList/UserList";
import { Box, Heading, Text, VStack } from "native-base";
import React from "react";

type Props = {};

const ParticipantsList = (props: Props) => {
  const participants = useSelector(
    (state) => state.chats.details?.participants
  );

  return (
    <VStack>
      <Heading mb={4}>Participants</Heading>
      <UserList users={participants} />
    </VStack>
  );
};

export default ParticipantsList;
