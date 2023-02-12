import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatScreen from "../../screens/Chat/ChatScreen";
import ChatList from "../../screens/Chat/ChatList";
import { ChatParams } from "../../../types";
import ContactIcon from "../../screens/Chat/ContactIcon";

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
