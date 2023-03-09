// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const MessageEnum = {
  "TEXT": "TEXT",
  "CHECKIN": "CHECKIN",
  "VALIDATION": "VALIDATION"
};

const { Leaderboard, Challenge, ChallengeType, User, Message, ChatRoom, Checkin, ChallengeUser, UserChatRoom, UserValidatedCheckIn } = initSchema(schema);

export {
  Leaderboard,
  Challenge,
  ChallengeType,
  User,
  Message,
  ChatRoom,
  Checkin,
  ChallengeUser,
  UserChatRoom,
  UserValidatedCheckIn,
  MessageEnum
};