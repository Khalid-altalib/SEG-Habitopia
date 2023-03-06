import { DataStore } from "@aws-amplify/datastore";
import { getUserFromDatabase, getUserFromDatabasebyID } from "../../app/util";

export const getCheckIns = async (userId: string) => {
  const user = await getUserFromDatabasebyID(userId);
  var checkinCount = 0;
  // get number of items in the array of user Checkins
  for await (const checkin of user.Checkins) {
    checkinCount++;
  }

  return checkinCount;
};
