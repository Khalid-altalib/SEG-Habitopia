import { useDispatch, useSelector } from "@app/hooks";
import StatusContainer from "@components/StatusContainer/StatusContainer";
import Text from "@components/Text";
import { fetchCheckInSnippet } from "@features/chat/chatSlice";
import { Center, HStack } from "native-base";
import { ControlledPropUpdatedSelectedItem } from "native-base/lib/typescript/components/composites/Typeahead/useTypeahead/types";
import React, { useEffect } from "react";
import CheckInBox from "../CheckInBox/CheckInBox";

type Props = {};

const CheckInSlider = (props: Props) => {
  const { checkInSnippet, fetchCheckInSnippet: requestStatus } = useSelector(
    (state) => state.chats
  );

  const { loading, error } = requestStatus;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCheckInSnippet());
  }, []);

  return (
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
