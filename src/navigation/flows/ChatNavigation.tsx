import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatScreen from "../../screens/Chat/ChatScreen";
import { ChatParams } from "../../../types";

export const ChatStack = createNativeStackNavigator<ChatParams>();

const ChatNavigation = () => {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        name="IndividualChat"
        component={ChatScreen}
        options={{ headerShown: false}}
        
      />
    </ChatStack.Navigator>
  );
};

export default ChatNavigation;
