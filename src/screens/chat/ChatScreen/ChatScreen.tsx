import React, { useEffect } from "react";
import { ImageBackground, StyleSheet, FlatList, Text } from "react-native";
import InputBox from "../../../features/chat/InputBox/InputBox";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { ChatParams, Message, Message as MessageType } from "../../../../types";
import { useDispatch, useSelector } from "../../../app/hooks";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  fetchMessages,
  resetPageNumber,
  resetUnreadMessages,
  setCurrentChatId,
  updateCheckInMessage,
} from "../../../features/chat/chatSlice";
import { GraphQLSubscription } from "@aws-amplify/api";
import {
  OnCreateMessageSubscription,
  OnCreateMessageSubscriptionVariables,
  OnUpdateCheckinSubscription,
  OnUpdateCheckinSubscriptionVariables,
} from "src/API";
import {
  onCreateMessage,
  onUpdateCheckin,
} from "../../../graphql/subscriptions";
import { addMessageToChat } from "../../../features/chat/chatSlice";
import { API, graphqlOperation } from "aws-amplify";
import { MessageEnum } from "src/models";
import TextMessage from "../../../features/chat/TextMessage/TextMessage";
import { getUserFromDatabasebyID } from "@app/util";
import CheckInMessage from "../../../features/chat/CheckInMessage/CheckInMessage";
import {
  getCheckInById,
  getMessageByCheckInId,
} from "@features/chat/chatQueries";
import { Button } from "react-native";
import { KeyboardAvoidingView } from "native-base";
import ValidationMessage from "@features/chat/ValidationMessage/ValidationMessage";
import Background from "@components/Background";
import { addCheckinSubscriptionForLeaderboard } from "@features/leaderboard/leaderboardQueries";

type Props = {};

const ChatScreen = (props: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<ChatParams>>();
  const route = useRoute<RouteProp<ChatParams, "IndividualChat">>();
  const { user } = useSelector((store) => store.auth);
  const { chats } = useSelector((store) => store.chats);
  const { id } = route.params;
  const dispatch = useDispatch();
  const addChatSubscription = (chatID: string) => {
    const variables: OnCreateMessageSubscriptionVariables = {
      filter: {
        chatroomID: { eq: chatID },
        or: [
          {
            messageType: {
              eq: MessageEnum.VALIDATION,
            },
          },
          {
            userID: {
              ne: user?.userId,
            },
          },
        ],
      },
    };
    const subscription = API.graphql<
      GraphQLSubscription<OnCreateMessageSubscription>
    >(graphqlOperation(onCreateMessage, variables)).subscribe({
      next: async ({ value }) => {
        const data = { ...value.data?.onCreateMessage };
        const userFromDatabase = await getUserFromDatabasebyID(
          data.userID || ""
        );
        let message: MessageType;
        switch (data.messageType) {
          case MessageEnum.CHECKIN:
            const checkIn = await getCheckInById(
              data.messageGetCheckinId || ""
            );
            message = {
              ...data,
              validationCount: checkIn.validationCount,
              isValidated: checkIn.isValidated,
              userName: userFromDatabase.name,
            } as MessageType;
            break;
          case MessageEnum.TEXT:
            message = {
              ...data,
              userName: userFromDatabase.name,
            } as MessageType;
            break;
          case MessageEnum.VALIDATION:
            message = {
              ...data,
              userName: userFromDatabase.name,
            } as MessageType;
            break;
          default:
            message = {} as MessageType;
            break;
        }
        dispatch(addMessageToChat({ chatID, message }));
      },
      error: (error) => console.warn(error),
    });
    return subscription;
  };

  const addCheckInSubscription = (chatID: string) => {
    const variable: OnUpdateCheckinSubscriptionVariables = {
      filter: {
        chatroomID: {
          eq: chatID,
        },
      },
    };

    const subscription = API.graphql<
      GraphQLSubscription<OnUpdateCheckinSubscription>
    >(graphqlOperation(onUpdateCheckin, variable)).subscribe({
      next: async ({ value }) => {
        const data = { ...value.data?.onUpdateCheckin };
        const user = await getUserFromDatabasebyID(data.userID || "");
        const message = {
          ...(await getMessageByCheckInId(data.id || "")),
          validationCount: data.validationCount,
          isValidated: data.isValidated,
          userName: user.name,
        } as MessageType;
        dispatch(updateCheckInMessage({ chatID, message }));
      },
      error: (error) => console.warn(error),
    });

    return subscription;
  };

  let chat = chats.filter((chat) => chat.id == id)[0];

  useEffect(() => {
    dispatch(fetchMessages(chat.id));
    dispatch(setCurrentChatId(chat.id));
    navigation.setOptions({ title: chat.name, headerShown: true });
    const chatSubscription = addChatSubscription(id);
    const checkInSubscription = addCheckInSubscription(id);
    const checkInSubscriptionForLeaderboard = addCheckinSubscriptionForLeaderboard(user?.userId || "");
    return () => {
      dispatch(resetPageNumber());
      dispatch(resetUnreadMessages({ chatId: chat.id }));
      chatSubscription.unsubscribe();
      checkInSubscription.unsubscribe();
      checkInSubscriptionForLeaderboard.unsubscribe();
    };
  }, [id]);

  const fetchMoreMessages = () => {
    dispatch(fetchMessages(chat.id));
  };

  return (
    <Background>
      <Button title="Load more" onPress={fetchMoreMessages} />
      <FlatList
        data={chat.messages}
        renderItem={({ item }) => {
          switch (item.messageType) {
            case MessageEnum.TEXT:
              return (
                <TextMessage
                  id={item.id}
                  userName={item.userName}
                  text={item.text}
                  createdAt={item.createdAt}
                  userID={item.userID}
                  messageType={item.messageType}
                />
              );
            case MessageEnum.CHECKIN:
              return (
                <CheckInMessage
                  id={item.id}
                  validationCount={item.validationCount}
                  isValidated={item.isValidated}
                  userName={item.userName}
                  text={item.text}
                  createdAt={item.createdAt}
                  userID={item.userID}
                  messageType={item.messageType}
                />
              );
            case MessageEnum.VALIDATION:
              return (
                <ValidationMessage
                  id={item.id}
                  userName={item.userName}
                  text={item.text}
                  createdAt={item.createdAt}
                  userID={item.userID}
                  messageType={item.messageType}
                />
              );
            default:
              return <></>;
          }
        }}
        style={styles.flatList}
        inverted={true}
      />
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={90}>
        <InputBox chatRoomID={chat.id} />
      </KeyboardAvoidingView>
    </Background>
  );
};

const styles = StyleSheet.create({
  flatList: {
    padding: 25,
    flex: 1,
  },
});

export default ChatScreen;
