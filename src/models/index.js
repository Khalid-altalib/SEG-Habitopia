// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Leaderboard, Checkin, User, Message, ChatRoom, Challenge, ChallengeType, UserChatRoom, ChallengeUser } = initSchema(schema);

export {
  Leaderboard,
  Checkin,
  User,
  Message,
  ChatRoom,
  Challenge,
  ChallengeType,
  UserChatRoom,
  ChallengeUser
};