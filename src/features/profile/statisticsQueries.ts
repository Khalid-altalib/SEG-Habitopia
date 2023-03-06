import { DataStore, SortDirection } from "@aws-amplify/datastore";
import { Checkin, User } from "../../models";
import { getUserFromDatabase, getUserFromDatabasebyID } from "../../app/util";

export const getCheckIns = async (userId: string) => {
  const user = await getUserFromDatabasebyID(userId);
  var checkinCount = 0;
  // get number of items in the array of user Checkins
  for await (const checkin of user.Checkins) {
    if (checkin.isValidated){
      checkinCount++;
    }
  }

  return checkinCount;
};

export const checkStreak = async (userId: string) => {
  const user = await getUserFromDatabasebyID(userId);
  let newStreak = 0;
  
  var currentStreak = user.streak;
  if (currentStreak == null || currentStreak == undefined) {
    currentStreak = 0;
  }

  // look in checkins to find all the checkins by this user, and sort it to find the most recent
  const lastCheckInByUser = (
    await DataStore.query(
      Checkin,
      (checkIn) =>
        checkIn.and((checkIn) => [
          checkIn.userID.eq(userId),
          checkIn.isValidated.eq(true),
        ]),
      {
        sort: (checkIn) => checkIn.createdAt(SortDirection.DESCENDING),
      }
    )
  )[0];
  
  // get today's date in AWS format
  const today = new Date();
  const todayAWS = today.toISOString().split("T")[0];
  // if last check in is 24 hours before today, then return 1

  if (!lastCheckInByUser || !lastCheckInByUser.createdAt || lastCheckInByUser == null || lastCheckInByUser == undefined) {
    console.log("no checkin found");
    return 0;
  }
    // check lastCheckInByUser is 24 hours before today
  console.log("lastCheckInByUser", lastCheckInByUser.createdAt);
  const lastCheckInDateObj = new Date(lastCheckInByUser.createdAt);
  const diffTime = Math.abs(today.getTime() - lastCheckInDateObj.getTime());

  if (diffTime > 86400000) {
    newStreak = 0;
  }else{
    // if we are here, then the last checkin was within 24 hours, so update the streak
    newStreak = currentStreak + 1;
    //PROBLEM everytime we call this function, it updates the streak if it has been less than 24 hours
  }

  await DataStore.save(
    User.copyOf(user, (updated) => {
      updated.streak = newStreak;
    })
  );

  return newStreak;
};
