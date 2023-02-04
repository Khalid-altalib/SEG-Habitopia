import type { NativeStackNavigationProp } from "@react-navigation/native-stack";


export type RootParams = {
  Auth: undefined,
  Existing: undefined,
  Chat : undefined,
}

export type ProfileParams = {
  Home: undefined;
  Chats: undefined;
  Welcome: undefined;
  Explore: undefined;
  Leaderboard: undefined;
  You: undefined;
  Chat: undefined;
}

export type AuthParams = {
  Welcome: undefined;
  SignUp: undefined;
  LogIn: undefined;
};

export type ChatParams= {
  Chat: undefined;
}


export type LocalUser = {
  authToken: string;
  username: string;
};

