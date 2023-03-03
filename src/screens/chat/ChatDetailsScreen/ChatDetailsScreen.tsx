import { useDispatch, useSelector } from "@app/hooks";
import PaddedContainer from "@components/PaddedContainer";
import StatusContainer from "@components/StatusContainer/StatusContainer";
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

  const { loading, error } = useSelector((state) => state.chats.fetchDetails);
  const { details } = useSelector((state) => state.chats);

  useEffect(() => {
    dispatch(fetchDetails(chatId));
  }, []);

  return (
    <Box backgroundColor={"black"}>
      <PaddedContainer>
        <StatusContainer loading={loading} error={error} data={details}>
          <Header />
          <Statistics />
          <ParticipantsList />
        </StatusContainer>
      </PaddedContainer>
    </Box>
  );
};

export default ChatDetailsScreen;
