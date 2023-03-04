// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const MessageEnum = {
  "TEXT": "TEXT",
  "CHECKIN": "CHECKIN",
  "VALIDATION": "VALIDATION"
};

const { Leaderboard, User, Checkin, ChatRoom, Message, Challenge, ChallengeType, UserChatRoom, ChallengeUser } = initSchema(schema);

export {
  Leaderboard,
  User,
  Checkin,
  ChatRoom,
  Message,
  Challenge,
  ChallengeType,
  UserChatRoom,
  ChallengeUser,
  MessageEnum
};