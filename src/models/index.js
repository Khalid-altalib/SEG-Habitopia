// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const MessageEnum = {
  "TEXT": "TEXT",
  "CHECKIN": "CHECKIN",
  "VALIDATION": "VALIDATION"
};

const { Follow, User, Checkin, ChallengeType, ChatRoom, Message, Challenge, Leaderboard, UserChatRoom, ChallengeUser, UserValidatedCheckIn } = initSchema(schema);

export {
  Follow,
  User,
  Checkin,
  ChallengeType,
  ChatRoom,
  Message,
  Challenge,
  Leaderboard,
  UserChatRoom,
  ChallengeUser,
  UserValidatedCheckIn,
  MessageEnum
};