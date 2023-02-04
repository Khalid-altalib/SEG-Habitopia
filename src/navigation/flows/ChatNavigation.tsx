import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Chat from "../../screens/Chat/Chat";
import { ChatParams } from "../../../types";

export const ChatStack = createNativeStackNavigator<ChatParams>();

const ChatNavigation = () => {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown: false }}
      />
    </ChatStack.Navigator>
  );
};

export default ChatNavigation;
