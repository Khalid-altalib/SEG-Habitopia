import PaddedContainer from "@components/PaddedContainer";
import ParticipantsList from "@features/chat/ParticipantsList/ParticipantsList";
import { Box } from "native-base";
import React from "react";

type Props = {};

const ChatDetailsScreen = (props: Props) => {
  return (
    <Box backgroundColor={"black"}>
      <PaddedContainer>
        <ParticipantsList />
      </PaddedContainer>
    </Box>
  );
};

export default ChatDetailsScreen;
