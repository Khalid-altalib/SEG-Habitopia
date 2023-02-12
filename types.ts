import { RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootParams = {
  Auth: undefined;
  Existing: undefined;
  Chat: undefined;
};

export type ProfileParams = {
  Home: undefined;
  ChatList: undefined;
  Welcome: undefined;
  Explore: undefined;
  Leaderboard: undefined;
  You: undefined;
};

export type AuthParams = {
  Welcome: undefined;
  SignUp: undefined;
  LogIn: undefined;
};

export type ChatParams = {
  Chats: undefined;
  IndividualChat: {
    id: string;
  };
  Test: undefined;
};

export type IndividualChatScreenNavigationProp = NativeStackNavigationProp<
  ChatParams,
  "IndividualChat"
>;

export type LocalUser = {
  authToken: string;
  username: string;
};

export type Challenge = {
  name: string;
  description: string;
  active: boolean;
};

export type Chat = {
  id: string;
  name: string;
  image: string;
  text: string;
  time: string;
};
