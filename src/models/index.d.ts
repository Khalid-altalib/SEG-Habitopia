import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerLeaderboard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Leaderboard, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Checkins?: (Checkin | null)[] | null;
  readonly numberOfCheckins: number;
  readonly User: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly leaderboardUserId: string;
}

type LazyLeaderboard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Leaderboard, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Checkins: AsyncCollection<Checkin>;
  readonly numberOfCheckins: number;
  readonly User: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly leaderboardUserId: string;
}

export declare type Leaderboard = LazyLoading extends LazyLoadingDisabled ? EagerLeaderboard : LazyLeaderboard

export declare const Leaderboard: (new (init: ModelInit<Leaderboard>) => Leaderboard) & {
  copyOf(source: Leaderboard, mutator: (draft: MutableModel<Leaderboard>) => MutableModel<Leaderboard> | void): Leaderboard;
}

type EagerCheckin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Checkin, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly timeStamp?: string | null;
  readonly userID: string;
  readonly chatroomID: string;
  readonly leaderboardID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCheckin = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Checkin, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly timeStamp?: string | null;
  readonly userID: string;
  readonly chatroomID: string;
  readonly leaderboardID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Checkin = LazyLoading extends LazyLoadingDisabled ? EagerCheckin : LazyCheckin

export declare const Checkin: (new (init: ModelInit<Checkin>) => Checkin) & {
  copyOf(source: Checkin, mutator: (draft: MutableModel<Checkin>) => MutableModel<Checkin> | void): Checkin;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly biography?: string | null;
  readonly email?: string | null;
  readonly notifications?: boolean | null;
  readonly Messages?: (Message | null)[] | null;
  readonly ChatRooms?: (UserChatRoom | null)[] | null;
  readonly Checkins?: (Checkin | null)[] | null;
  readonly challenges?: (ChallengeUser | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly biography?: string | null;
  readonly email?: string | null;
  readonly notifications?: boolean | null;
  readonly Messages: AsyncCollection<Message>;
  readonly ChatRooms: AsyncCollection<UserChatRoom>;
  readonly Checkins: AsyncCollection<Checkin>;
  readonly challenges: AsyncCollection<ChallengeUser>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text?: string | null;
  readonly chatroomID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text?: string | null;
  readonly chatroomID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

type EagerChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Messages?: (Message | null)[] | null;
  readonly users?: (UserChatRoom | null)[] | null;
  readonly Checkins?: (Checkin | null)[] | null;
  readonly LastMessage?: Message | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatRoomLastMessageId?: string | null;
}

type LazyChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Messages: AsyncCollection<Message>;
  readonly users: AsyncCollection<UserChatRoom>;
  readonly Checkins: AsyncCollection<Checkin>;
  readonly LastMessage: AsyncItem<Message | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatRoomLastMessageId?: string | null;
}

export declare type ChatRoom = LazyLoading extends LazyLoadingDisabled ? EagerChatRoom : LazyChatRoom

export declare const ChatRoom: (new (init: ModelInit<ChatRoom>) => ChatRoom) & {
  copyOf(source: ChatRoom, mutator: (draft: MutableModel<ChatRoom>) => MutableModel<ChatRoom> | void): ChatRoom;
}

type EagerChallenge = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Challenge, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ChallengeType: ChallengeType;
  readonly Users?: (ChallengeUser | null)[] | null;
  readonly started?: string | null;
  readonly ChatRoom?: ChatRoom | null;
  readonly userCount?: number | null;
  readonly finished?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly challengeChallengeTypeId: string;
  readonly challengeChatRoomId?: string | null;
}

type LazyChallenge = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Challenge, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ChallengeType: AsyncItem<ChallengeType>;
  readonly Users: AsyncCollection<ChallengeUser>;
  readonly started?: string | null;
  readonly ChatRoom: AsyncItem<ChatRoom | undefined>;
  readonly userCount?: number | null;
  readonly finished?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly challengeChallengeTypeId: string;
  readonly challengeChatRoomId?: string | null;
}

export declare type Challenge = LazyLoading extends LazyLoadingDisabled ? EagerChallenge : LazyChallenge

export declare const Challenge: (new (init: ModelInit<Challenge>) => Challenge) & {
  copyOf(source: Challenge, mutator: (draft: MutableModel<Challenge>) => MutableModel<Challenge> | void): Challenge;
}

type EagerChallengeType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChallengeType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly active: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChallengeType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChallengeType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly active: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ChallengeType = LazyLoading extends LazyLoadingDisabled ? EagerChallengeType : LazyChallengeType

export declare const ChallengeType: (new (init: ModelInit<ChallengeType>) => ChallengeType) & {
  copyOf(source: ChallengeType, mutator: (draft: MutableModel<ChallengeType>) => MutableModel<ChallengeType> | void): ChallengeType;
}

type EagerUserChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly chatRoomId?: string | null;
  readonly user: User;
  readonly chatRoom: ChatRoom;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly chatRoomId?: string | null;
  readonly user: AsyncItem<User>;
  readonly chatRoom: AsyncItem<ChatRoom>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserChatRoom = LazyLoading extends LazyLoadingDisabled ? EagerUserChatRoom : LazyUserChatRoom

export declare const UserChatRoom: (new (init: ModelInit<UserChatRoom>) => UserChatRoom) & {
  copyOf(source: UserChatRoom, mutator: (draft: MutableModel<UserChatRoom>) => MutableModel<UserChatRoom> | void): UserChatRoom;
}

type EagerChallengeUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChallengeUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly challengeId?: string | null;
  readonly user: User;
  readonly challenge: Challenge;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChallengeUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChallengeUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly challengeId?: string | null;
  readonly user: AsyncItem<User>;
  readonly challenge: AsyncItem<Challenge>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ChallengeUser = LazyLoading extends LazyLoadingDisabled ? EagerChallengeUser : LazyChallengeUser

export declare const ChallengeUser: (new (init: ModelInit<ChallengeUser>) => ChallengeUser) & {
  copyOf(source: ChallengeUser, mutator: (draft: MutableModel<ChallengeUser>) => MutableModel<ChallengeUser> | void): ChallengeUser;
}