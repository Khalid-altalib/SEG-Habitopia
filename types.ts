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
  PhoneNumber: undefined;
  ConfirmationCode: undefined;
  Name: undefined;
  EmailAddress: undefined;
  SelectAvatar: undefined;
  SelectInstagram: undefined;
  SelectChallenges: undefined;
  LogIn: undefined;
};

export type ChatParams = {
  Chat: undefined;
};

export type LocalUser = {
  authToken: string;
  username: string;
};

export enum TextType {
  Regular,
  Subtle,
  Heading,
  Button,
}

export enum ButtonType {
  Primary,
  Secondary,
}
export type Challenge = {
  name: string;
  description: string;
  active: boolean;
};
