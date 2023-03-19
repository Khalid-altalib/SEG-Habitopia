// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ChallengeType } = initSchema(schema);

export {
  ChallengeType
};