import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MessageEnum } from "src/models";

export type RootParams = {
  Auth: undefined;
  Existing: undefined;
  Profile: undefined;
  ChallengePrompt: {
    challenge: Challenge;
  };
  Settings: undefined;
  SettingDetails: {
    settingType: string;
    defaultValue: string;
  };
  ChatDetails: undefined;
  FollowList: {
    followListMode: string;
  };
};

export type ProfileParams = {
  userId: string;
};

export type NavigationParams = {
  Home: undefined;
  Chats: undefined;
  Welcome: undefined;
  Explore: undefined;
  Leaderboard: undefined;
  You: ProfileParams;
  Profile: ProfileParams;
  Settings: undefined;
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
  ChatList: undefined;
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
  email: string;
};

export enum TextType {
  Regular,
  Subtle,
  Heading,
  Small,
  Subheading,
  Button,
  ChatName,
  ChatText,
}

export enum ButtonType {
  Primary,
  Secondary,
}
export type Challenge = {
  id: string;
  name: string;
  description: string;
  active: boolean;
};

export type Profile = {
  userId: string;
  name: string;
  email: string;
  biography: string;
  rankings: Array<object>;
  statistics: object;
  following: boolean;
  followingCount: number;
  followerCount: number;
};

export type Statistic = {
  name: string;
  quantity: number;
};

export type Chat = {
  id: string;
  name?: string;
  image?: string;
  text?: string;
  time?: string;
  messages?: Message[];
  unreadMessages: number | 0;
};

export type Settings = {
  email: string;
  name: string;
  notifications: boolean;
  password: string;
  biography: string;
  [key: string]: string | boolean;
};

export type SignInFormValues = {
  email: string;
  password: string;
};

export interface Message {
  id?: string;
  chatRoomId?: string;
  createdAt: string;
  userID: string;
  userName?: string;
  text: string;
  validationCount?: number | 0;
  isValidated?: boolean | false;
  messageType: MessageEnum;
}

export type User = {
  userId: string;
  name: string;
};

export type ChatDetails = {
  challengeName: string;
  description: string;
  statistics: {
    started: string;
    ending: string;
  };
  participants: User[];
};

export type CheckInSnippetItem = {
  challenge: Challenge
  checkedIn: boolean;
}
