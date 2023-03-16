import React, { useEffect } from "react";
import ChatItem from "../../../features/chat/ChatItem/ChatItem";
import { useDispatch, useSelector } from "../../../app/hooks";
import { fetchChats, updateChatList } from "../../../features/chat/chatSlice";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ChatParams } from "types";
import { API, graphqlOperation } from "aws-amplify";
import { GraphQLSubscription } from "@aws-amplify/api";
import {
  OnUpdateChatRoomSubscription,
  OnUpdateChatRoomSubscriptionVariables,
} from "src/API";
import { onUpdateChatRoom } from "../../../graphql/subscriptions";
import { getMessageById } from "@features/chat/chatQueries";
import { Box, ScrollView, VStack } from "native-base";
import NoChats from "@features/chat/NoChats/NoChats";
import StatusContainer from "@components/StatusContainer/StatusContainer";
import Background from "@components/Background";

type Props = {};

const ChatListScreen = (props: Props) => {
  const { chats, fetchChats: requestStatus } = useSelector(
    (state) => state.chats
  );
  const { user } = useSelector((store) => store.auth);

  const { error, loading } = requestStatus;
  const navigation = useNavigation<NativeStackNavigationProp<ChatParams>>();

  const updateChatRoomSubscription = () => {
    const variables: OnUpdateChatRoomSubscriptionVariables = {
      userFilter: {
        id: {
          eq: user?.userId,
        },
      },
    };
    const subscription = API.graphql<
      GraphQLSubscription<OnUpdateChatRoomSubscription>
    >(graphqlOperation(onUpdateChatRoom, variables)).subscribe({
      next: async ({ value }) => {
        const data = { ...value.data?.onUpdateChatRoom };
        const lastMessage = await getMessageById(
          data.chatRoomLastMessageId || ""
        );
        dispatch(
          updateChatList({
            chatID: data.id,
            updatedAt: data.updatedAt,
            lastMessage: lastMessage.text || "",
          })
        );
      },
      error: ({ error }) => console.warn(error.errors),
    });
    return subscription;
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const subscription = updateChatRoomSubscription();
    dispatch(fetchChats());
  }, []);

  return (
    <Background>
      <StatusContainer
        loading={loading}
        error={error}
        data={chats}
        noDataDisplay={<NoChats />}
      >
        <ScrollView height="full" showsVerticalScrollIndicator={false}>
          <VStack space={25} margin={25}>
            {chats.length > 0 &&
              chats.map((item, i) => (
                <ChatItem
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  text={item.text}
                  time={item.time}
                  unreadMessages={item.unreadMessages}
                  key={i}
                />
              ))}
          </VStack>
        </ScrollView>
      </StatusContainer>
    </Background>
  );
};

export default ChatListScreen;
