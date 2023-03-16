import { useDispatch, useSelector } from "@app/hooks";
import StatusContainer from "@components/StatusContainer/StatusContainer";
import { fetchCheckInSnippet } from "@features/chat/chatSlice";
import { HStack } from "native-base";
import React, { useEffect } from "react";
import CheckInBox from "./CheckInBox";

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
    <HStack marginLeft={25} marginTop={25} height={150}>
      <StatusContainer loading={loading} error={error} data={checkInSnippet}>
        {checkInSnippet.map((checkInSnippetItem, index) => (
          <CheckInBox key={index} checkInSnippetItem={checkInSnippetItem} />
        ))}
      </StatusContainer>
    </HStack>
  );
};

export default CheckInSlider;
