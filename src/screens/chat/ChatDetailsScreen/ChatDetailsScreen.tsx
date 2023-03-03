import { useDispatch } from "@app/hooks";
import PaddedContainer from "@components/PaddedContainer";
import { fetchDetails } from "@features/chat/chatSlice";
import Header from "@features/chat/Header/Header";
import ParticipantsList from "@features/chat/ParticipantsList/ParticipantsList";
import Statistics from "@features/chat/Statistics/Statistics";
import { Box } from "native-base";
import React, { useEffect } from "react";

type Props = {
  chatId: string;
};

const ChatDetailsScreen = (props: Props) => {
  const { chatId } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetails(chatId));
  }, []);

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
