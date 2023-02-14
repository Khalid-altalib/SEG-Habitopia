import { RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootParams = {
  Auth: undefined;
  Existing: undefined;
  MOoal: {
    name: string;
  };
  Chat: undefined;
  Modal: {
    children: React.ReactNode;
  };
};

export type ProfileParams = {
  userId: string;
};

export type NavigationParams = {
  Home: undefined;
  ChatList: undefined;
  Welcome: undefined;
  Explore: undefined;
  Leaderboard: undefined;
  You: ProfileParams;
  Profile: ProfileParams;
};

export type AuthParams = {
  Welcome: undefined;
  Password: undefined;
  ConfirmationCode: undefined;
  Name: undefined;
  EmailAddress: undefined;
  SelectAvatar: undefined;
  SelectInstagram: undefined;
  SelectChallenges: undefined;
  SignIn: undefined;
};

export type ChatParams = {
  Chats: undefined;
  IndividualChat: {
    id: string;
  };
};

export type IndividualChatScreenNavigationProp = NativeStackNavigationProp<
  ChatParams,
  "IndividualChat"
>;

export type LocalUser = {
  authToken: string;
  userId: string;
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
  color: string;
  image: string;
};

export type Profile = {
  userId: number;
  name: string;
  biography: string;
  rankings: Array<object>;
  statistics: object;
  friends: undefined;
  friendStatus: undefined;
};

export type Statistic = {
  name: string;
  quantity: number;
};

export type Chat = {
  id: string;
  name: string;
  image: string;
  text: string;
  time: string;
};

export type SignInFormValues = {
  email: string;
  password: string;
};
