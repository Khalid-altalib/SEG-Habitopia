// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const MessageEnum = {
  "TEXT": "TEXT",
  "CHECKIN": "CHECKIN",
  "VALIDATION": "VALIDATION"
};

const { Leaderboard, User, Checkin, ChallengeType, ChatRoom, Message, Challenge, UserChatRoom, ChallengeUser, UserValidatedCheckIn } = initSchema(schema);

export {
  Leaderboard,
  User,
  Checkin,
  ChallengeType,
  ChatRoom,
  Message,
  Challenge,
  UserChatRoom,
  ChallengeUser,
  UserValidatedCheckIn,
  MessageEnum
};