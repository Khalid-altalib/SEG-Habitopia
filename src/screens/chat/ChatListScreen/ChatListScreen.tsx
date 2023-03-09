import React, { useEffect } from "react";
import { FlatList } from "react-native";
import ChatItem from "../../../features/chat/ChatItem/ChatItem";
import { useDispatch, useSelector } from "../../../app/hooks";
import { fetchChats, updateChatList } from "../../../features/chat/chatSlice";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ChatParams } from "types";
import { API, DataStore, graphqlOperation } from "aws-amplify";
import { GraphQLSubscription } from "@aws-amplify/api";
import {
  OnUpdateChatRoomSubscription,
  OnUpdateChatRoomSubscriptionVariables,
} from "src/API";
import { onUpdateChatRoom } from "../../../graphql/subscriptions";
import { ZenObservable } from "zen-observable-ts";
import { Message } from "src/models";

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
      userFilter:{
        id: {
          eq: user?.userId
        }
      }
    };
    const subscription = API.graphql<
      GraphQLSubscription<OnUpdateChatRoomSubscription>
    >(graphqlOperation(onUpdateChatRoom, variables)).subscribe({
      next: async ({ value }) => {
        const data = {...value.data?.onUpdateChatRoom}
        const lastMessage = (await DataStore.query(Message, (message) => message.id.eq(data.chatRoomLastMessageId || "")))[0]
        dispatch(updateChatList({chatID: data.id, updatedAt: data.updatedAt, lastMessage: lastMessage.text || ""}))
      },
      error: ({error}) => console.warn(error.errors),
    });
    return subscription;
  };

  const dispatch = useDispatch();

  useEffect(() => {
    let subscription: ZenObservable.Subscription;
    navigation.addListener("focus", () => {
      dispatch(fetchChats());
      subscription = updateChatRoomSubscription()
    });
    navigation.addListener("blur", () => {
      subscription.unsubscribe();
    });
    
  }, [navigation]);

  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => (
        <ChatItem
          id={item.id}
          name={item.name}
          image={item.image}
          text={item.text}
          time={item.time}
        />
      )}
    />
  );
};

export default ChatListScreen;
