// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Challenge, ChallengeType, User, Message, ChatRoom, Checkin, ChallengeUser, UserChatRoom } = initSchema(schema);

export {
  Challenge,
  ChallengeType,
  User,
  Message,
  ChatRoom,
  Checkin,
  ChallengeUser,
  UserChatRoom
};