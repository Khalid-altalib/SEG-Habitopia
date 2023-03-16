import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Chat, ChatParams, TextType } from "../../../../types";
import moment from "moment";
import {
  View,
  Pressable,
  HStack,
  Badge,
  VStack,
  AspectRatio,
  Center,
} from "native-base";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Avatar from "@components/Avatar/Avatar";
import Card from "@components/Card";
import Text from "@components/Text";

const getTimeSinceLastChat = (chat: Chat) => {
  const dateOfLastChat: Date = moment(chat.time).toDate();
  const elapsedTimeInMilliseconds: number =
    Date.now() - dateOfLastChat.getTime();

  const ONE_SECOND = 1000;
  const ONE_MINUTE = ONE_SECOND * 60;
  const ONE_HOUR = ONE_MINUTE * 60;
  const ONE_DAY = ONE_HOUR * 24;
  const ONE_WEEK = ONE_DAY * 7;

  // Dealing with a matter of seconds
  if (elapsedTimeInMilliseconds < ONE_MINUTE) {
    return Math.round(elapsedTimeInMilliseconds / ONE_SECOND) + "s"; // E.g. '13s'
  }
  // Dealing with minutes
  else if (elapsedTimeInMilliseconds < ONE_HOUR) {
    return Math.round(elapsedTimeInMilliseconds / ONE_MINUTE) + "m"; // E.g. '4m'
  }
  // Dealing with hours
  else if (elapsedTimeInMilliseconds < ONE_DAY) {
    return Math.round(elapsedTimeInMilliseconds / ONE_HOUR) + "d"; // E.g. '3d'
  }
  // Dealing with days
  else if (elapsedTimeInMilliseconds < ONE_WEEK) {
    return Math.round(elapsedTimeInMilliseconds / ONE_DAY) + "d"; // E.g. '3d'
  }
  // Dealing with weeks
  else {
    return Math.round(elapsedTimeInMilliseconds / ONE_WEEK) + "w"; // E.g. '4w'
  }
};

const UnreadMessagesBadge = ({
  noOfUnreadMessages,
}: {
  noOfUnreadMessages: number;
}): JSX.Element => {
  if (noOfUnreadMessages === 0) {
    return <></>;
  }

  return (
    <AspectRatio ratio={1} width={9}>
      <View
        backgroundColor="red.600"
        rounded="full"
        padding={0}
        variant="solid"
      >
        <Center width="full" height="full">
          <Text type={TextType.Small} color="white">
            {noOfUnreadMessages}
          </Text>
        </Center>
      </View>
    </AspectRatio>
  );
};

const ChatItem = (chat: Chat) => {
  const navigation = useNavigation<NativeStackNavigationProp<ChatParams>>();

  return (
    <Pressable
      onPress={() => {
        navigation.push("IndividualChat", { id: chat.id });
      }}
    >
      <Card>
        <HStack space={25 / 2} overflow="hidden">
          <VStack width={70}>
            <Avatar userId={chat.id} />
          </VStack>
          <VStack flexGrow={1} space={25 / 4}>
            <View>
              <Text type={TextType.Regular}>{chat.name}</Text>
            </View>
            <View>
              <Text type={TextType.Subtle}>{chat.text}</Text>
            </View>
          </VStack>
          <VStack
            flexDirection="column"
            justifyContent="flex-start"
            space={25 / 2}
            alignItems="center"
            minWidth={9}
          >
            <Text type={TextType.Subtle}>{getTimeSinceLastChat(chat)}</Text>
            <UnreadMessagesBadge noOfUnreadMessages={chat.unreadMessages} />
          </VStack>
        </HStack>
      </Card>
    </Pressable>
  );
};

export default ChatItem;
