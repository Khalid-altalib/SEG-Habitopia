// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Message, ChatRoom, Checkin, UserChatRoom } = initSchema(schema);

export {
  User,
  Message,
  ChatRoom,
  Checkin,
  UserChatRoom
};