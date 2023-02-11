import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatScreen from "../../screens/Chat/ChatScreen";
import ChatList from "../../screens/Chat/ChatList";
import { ChatParams } from "../../../types";
import Profile from "../../screens/Profile";

export const ChatStack = createNativeStackNavigator<ChatParams>();

const ChatNavigation = () => {
  return (
    <ChatStack.Navigator initialRouteName="ChatList">
      <ChatStack.Screen
        name="ChatList"
        component={ChatList}
        options={{ headerShown: false}}
      />
      <ChatStack.Screen
        name="IndividualChat"
        component={ChatScreen}
        options={{ headerShown: false}}
      />
      <ChatStack.Screen
        name="Test"
        component={Profile}
        options={{ headerShown: false}}
      />
    </ChatStack.Navigator>
  );
};

export default ChatNavigation;
