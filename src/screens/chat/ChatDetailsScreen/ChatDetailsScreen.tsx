import PaddedContainer from "@components/PaddedContainer";
import Header from "@features/chat/Header/Header";
import ParticipantsList from "@features/chat/ParticipantsList/ParticipantsList";
import Statistics from "@features/chat/Statistics/Statistics";
import { Box } from "native-base";
import React from "react";

type Props = {};

const ChatDetailsScreen = (props: Props) => {
  return (
    <Box backgroundColor={"black"}>
      <PaddedContainer>
        <Header />
        <Statistics />
        <ParticipantsList />
      </PaddedContainer>
    </Box>
  );
};

export default ChatDetailsScreen;
