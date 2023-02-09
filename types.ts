import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootParams = {
  Auth: undefined;
  Existing: undefined;
  Chat: undefined;
};

export type ProfileParams = {
  Home: undefined;
  Chats: undefined;
  Welcome: undefined;
  Explore: undefined;
  Leaderboard: undefined;
  You: undefined;
  Chat: undefined;
};

export type AuthParams = {
  Welcome: undefined;
  SignUp: undefined;
  LogIn: undefined;
};

export type ChatParams = {
  Chat: undefined;
};

export type LocalUser = {
  authToken: string;
  username: string;
};

export type Challenge = {
  name: string;
  description: string;
  active: boolean;
};

export type Profile = {
  username: string;
  name: string;
  rankings: Array<object>;
  statistics: object;
  friends: undefined;
  friendStatus: undefined;
};

export type Status = {
  loading: boolean;
  error: string;
};
