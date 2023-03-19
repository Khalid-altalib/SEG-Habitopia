import { useDispatch, useSelector } from "@app/hooks";
import StatusContainer from "@components/StatusContainer/StatusContainer";
import Text from "@components/Text";
import { fetchCheckInSnippet } from "@features/chat/chatSlice";
import { Center, HStack } from "native-base";
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
    <HStack marginLeft={25} marginTop={25} maxHeight={150} minWidth="100%">
      <StatusContainer
        loading={loading}
        error={error}
        data={[]}
        noDataDisplay={
          <Center width="100%">
            <Text style={{ textAlign: "center" }}>All Caught Up!</Text>
          </Center>
        }
      >
        {/* {checkInSnippet.map((checkInSnippetItem, index) => (
          <CheckInBox key={index} checkInSnippetItem={checkInSnippetItem} />
        ))} */}
      </StatusContainer>
    </HStack>
  );
};

export default CheckInSlider;
