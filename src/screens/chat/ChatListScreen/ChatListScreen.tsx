import React, { useEffect } from "react";
import { FlatList } from "react-native";
import ChatItem from "../../../features/chat/ChatItem/ChatItem";
import { useDispatch, useSelector } from "../../../app/hooks";
import { fetchChats } from "../../../features/chat/chatSlice";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ChatParams } from "types";
import { API, graphqlOperation } from "aws-amplify";
import { GraphQLSubscription } from "@aws-amplify/api";
import {
  ModelSubscriptionChatRoomFilterInput,
  OnUpdateChatRoomSubscription,
  OnUpdateChatRoomSubscriptionVariables,
} from "src/API";
import { onUpdateChatRoom } from "../../../graphql/subscriptions";

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
      filter: {
        
      }
    };
    const subscription = API.graphql<
      GraphQLSubscription<OnUpdateChatRoomSubscription>
    >(graphqlOperation(onUpdateChatRoom, variables)).subscribe({
      next: ({ value }) => {
        console.log(value);
      },
      error: (error) => console.warn(error),
    });
    return subscription;
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const subscription = updateChatRoomSubscription();
    navigation.addListener("focus", () => {
      dispatch(fetchChats());
    });
    () => subscription.unsubscribe();
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
