// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Leaderboard, User, Message, ChatRoom, Checkin, Challenge, ChallengeType, UserChatRoom, ChallengeUser } = initSchema(schema);

export {
  Leaderboard,
  User,
  Message,
  ChatRoom,
  Checkin,
  Challenge,
  ChallengeType,
  UserChatRoom,
  ChallengeUser
};