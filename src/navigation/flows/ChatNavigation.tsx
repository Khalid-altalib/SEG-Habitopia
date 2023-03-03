import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChatParams } from "../../../types";
import ChatListScreen from "@screens/chat/ChatListScreen";
import ContactIcon from "../../features/chat/ContactIcon";
import ChatScreen from "@screens/chat/ChatScreen";

export const ChatStack = createNativeStackNavigator<ChatParams>();

const ChatNavigation = () => {
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
      <ChatStack.Screen name="IndividualChat" component={ChatScreen} />
    </ChatStack.Navigator>
  );
};

export default ChatNavigation;
