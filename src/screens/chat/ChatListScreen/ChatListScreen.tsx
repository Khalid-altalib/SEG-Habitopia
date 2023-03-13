import React, { useEffect } from "react";
import ChatItem from "../../../features/chat/ChatItem/ChatItem";
import { useDispatch, useSelector } from "../../../app/hooks";
import { fetchChats } from "../../../features/chat/chatSlice";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ChatParams } from "types";
import { Box } from "native-base";
import NoChats from "@features/chat/NoChats/NoChats";
import StatusContainer from "@components/StatusContainer/StatusContainer";

type Props = {};

const ChatListScreen = (props: Props) => {
  const { chats, fetchChats: requestStatus } = useSelector(
    (state) => state.chats
  );

  const { error, loading } = requestStatus;
  const navigation = useNavigation<NativeStackNavigationProp<ChatParams>>();

  const dispatch = useDispatch();

  useEffect(() => {
    navigation.addListener("focus", () => {
      dispatch(fetchChats());
    });
  }, [navigation]);

  return (
    <Box>
      <StatusContainer
        loading={loading}
        error={error}
        data={chats}
        noDataDisplay={<NoChats />}
      >
        {chats.length > 0 &&
          chats.map((item, i) => (
            <ChatItem
              id={item.id}
              name={item.name}
              image={item.image}
              text={item.text}
              time={item.time}
              key={i}
            />
          ))}
      </StatusContainer>
    </Box>
  );
};

export default ChatListScreen;
