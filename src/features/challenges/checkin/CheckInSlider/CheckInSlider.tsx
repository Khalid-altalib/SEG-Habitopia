// Import necessary modules and types
import { useDispatch, useSelector } from "@app/hooks";
import StatusContainer from "@components/StatusContainer/StatusContainer";
import Text from "@components/Text";
import { fetchCheckInSnippet } from "@features/chat/chatSlice";
import { Center, HStack } from "native-base";
import React, { useEffect } from "react";
import CheckInBox from "../CheckInBox/CheckInBox";

type Props = {};

const CheckInSlider = (props: Props) => {
  // Get the check-in snippet and the fetch status from the store
  const { checkInSnippet, fetchCheckInSnippet: requestStatus } = useSelector(
    (state) => state.chats
  );

  const { loading, error } = requestStatus;

  const dispatch = useDispatch();

  // Fetch the check-in snippet on mount
  useEffect(() => {
    dispatch(fetchCheckInSnippet());
  }, []);

  return (
    // Display the status of the fetch operation
    <StatusContainer
      loading={loading}
      error={error}
      data={checkInSnippet}
      noDataDisplay={
        <Center width="100%">
          <Text
            style={{ textAlign: "center", marginLeft: -10, marginRight: 12 }}
          >
            All Caught Up!
          </Text>
        </Center>
      }
    >
      {/* Render a horizontal stack of CheckInBox components */}
      <HStack marginLeft={25} marginTop={25} maxHeight={150} minWidth="100%">
        {checkInSnippet.map((checkInSnippetItem) => (
          <CheckInBox
            key={checkInSnippetItem.chatId}
            checkInSnippetItem={checkInSnippetItem}
          />
        ))}
      </HStack>
    </StatusContainer>
  );
};

export default CheckInSlider;
