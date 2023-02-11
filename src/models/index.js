// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Checkin } = initSchema(schema);

export {
  Checkin
};