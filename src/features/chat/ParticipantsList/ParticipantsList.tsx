import { useSelector } from "@app/hooks";
import UserList from "@components/UserList/UserList";
import { Box, Heading, Text, VStack } from "native-base";
import React from "react";

type Props = {};

/**
 * A list of all participants in that specific chat,
 *
 * @param props - The properties passed to the component.
 * @returns - The list component.
 */
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
