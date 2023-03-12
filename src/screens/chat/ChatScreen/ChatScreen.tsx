import React, { useEffect } from "react";
import { ImageBackground, StyleSheet, FlatList, Text } from "react-native";
import InputBox from "../../../features/chat/InputBox/InputBox";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { ChatParams, Message as MessageType } from "../../../../types";
import { useDispatch, useSelector } from "../../../app/hooks";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  fetchMessages,
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
import { getCheckInById, getMessageById } from "@features/chat/chatQueries";
import { ScrollView } from "native-base";

type Props = {};

const ChatScreen = (props: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<ChatParams>>();
  const route = useRoute<RouteProp<ChatParams, "IndividualChat">>();
  const { chats } = useSelector((store) => store.chats);
  const { id } = route.params;
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.auth);

  const addChatSubscription = (chatID: string) => {
    const variables: OnCreateMessageSubscriptionVariables = {
      filter: {
        chatroomID: { eq: chatID },
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
        if (data.messageType === MessageEnum.CHECKIN) {
          const checkIn = await getCheckInById(data.messageGetCheckinId || "");
          message = {
            ...data,
            validationCount: checkIn.validationCount,
            isValidated: checkIn.isValidated,
            userName: userFromDatabase.name,
          } as MessageType;
        } else {
          message = {
            ...data,
            userName: userFromDatabase.name,
          } as MessageType;
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
          ...(await getMessageById(data.id || "")),
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
    return () => {
      chatSubscription.unsubscribe();
      checkInSubscription.unsubscribe();
    };
  }, [id]);

  let reversed_messages = [] as any;

  if (chat.messages) {
    reversed_messages = [...chat.messages];
    reversed_messages.reverse();
  }

  return (
    <ImageBackground
      source={{ uri: "https://placeholder.com" }}
      style={styles.bg}
    >
      <ScrollView>
        {reversed_messages &&
          reversed_messages.map((item, i) => {
            if (item.messageType === MessageEnum.TEXT) {
              return (
                <TextMessage
                  id={item.id}
                  userName={item.userName}
                  text={item.text}
                  createdAt={item.createdAt}
                  userID={item.userID}
                  messageType={item.messageType}
                  key={i}
                />
              );
            } else if (item.messageType === MessageEnum.CHECKIN) {
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
                  key={i}
                />
              );
            } else {
              return <></>;
            }
          })}
      </ScrollView>

      <InputBox chatRoomID={chat.id} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },

  flatList: {
    padding: 10,
  },
});

export default ChatScreen;
