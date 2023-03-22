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
import { TouchableOpacity } from "react-native";
import { convertDateToTimeString } from "@app/util";

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
    <TouchableOpacity
      onPress={() => {
        navigation.push("IndividualChat", { id: chat.id });
      }}
      activeOpacity={0.7}
    >
      <Card>
        <HStack space={25 / 2}>
          <VStack width={70}>
            <Avatar userId={chat.id} />
          </VStack>
          <VStack space={25 / 4} flexShrink={1}>
            <View>
              <Text type={TextType.Small}>{chat.name}</Text>
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
            minW={9}
          >
            <Text type={TextType.Subtle}>
              {convertDateToTimeString(moment(chat.time).toDate())}
            </Text>
            <UnreadMessagesBadge noOfUnreadMessages={chat.unreadMessages} />
          </VStack>
        </HStack>
      </Card>
    </TouchableOpacity>
  );
};

export default ChatItem;
