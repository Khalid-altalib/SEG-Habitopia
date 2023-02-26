import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChatParams } from "../../../types";
import ChatList from "../../screens/application/ChatScreen/ChatList";
import ContactIcon from "../../features/chat/ContactIcon";
import ChatScreen from "../../screens/application/ChatScreen";

export const ChatStack = createNativeStackNavigator<ChatParams>();

const ChatNavigation = () => {
  return (
    <ChatStack.Navigator initialRouteName="Chats">
      <ChatStack.Screen
        name="Chats"
        component={ChatList}
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
