import { useSelector } from "@app/hooks";
import StatusContainer from "@components/StatusContainer/StatusContainer";
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

  const requestStatus = useSelector((state) => state.chats.fetchDetails);
  const { loading, error } = requestStatus;

  return (
    <VStack>
      <Heading mb={5} mt={10}>
        Participants
      </Heading>
      <StatusContainer data={participants} loading={loading} error={error}>
        <UserList users={participants} />
      </StatusContainer>
    </VStack>
  );
};

export default ParticipantsList;
