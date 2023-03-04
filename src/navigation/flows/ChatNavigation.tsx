import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { ChatParams, RootParams } from "../../../types";
import ChatListScreen from "@screens/chat/ChatListScreen";
import ContactIcon from "../../features/chat/ContactIcon/ContactIcon";
import ChatScreen from "@screens/chat/ChatScreen";
import { Button } from "native-base";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useSelector } from "@app/hooks";

export const ChatStack = createNativeStackNavigator<ChatParams>();

const ChatNavigation = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootParams>>();

  return (
    <ChatStack.Navigator initialRouteName="Chats">
      <ChatStack.Screen
        name="Chats"
        component={ChatListScreen}
        options={{
          headerRight: () => {
            return <ContactIcon />;
          },
        }}
      />
      <ChatStack.Screen
        name="IndividualChat"
        component={ChatScreen}
        options={{
          headerRight: () => {
            return (
              <Button
                size="sm"
                onPress={() => {
                  navigation.push("ChatDetails");
                }}
              >
                Details
              </Button>
            );
          },
        }}
      />
    </ChatStack.Navigator>
  );
};

export default ChatNavigation;
