// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Challenge, ChallengeType, User, Message, ChatRoom, Checkin, UserSettings, ChallengeUser, UserChatRoom } = initSchema(schema);

export {
  Challenge,
  ChallengeType,
  User,
  Message,
  ChatRoom,
  Checkin,
  UserSettings,
  ChallengeUser,
  UserChatRoom
};