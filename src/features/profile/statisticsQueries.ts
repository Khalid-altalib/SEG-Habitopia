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
  const streakStart = user.streakStart;
  if (!streakStart) {
    console.log("no streak start found");
    return 0;
  }
  // convert streakStart to date object
  const streakStartDateObj = new Date(streakStart);

  console.log("streakStart", streakStart);
  // store start of streak in user

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

  if (!lastCheckInByUser || !lastCheckInByUser.createdAt || lastCheckInByUser == null || lastCheckInByUser == undefined) {
    console.log("no checkin found");
    return 0;
  }
    // check lastCheckInByUser is 24 hours before today
  console.log("lastCheckInByUser", lastCheckInByUser.createdAt);
  const lastCheckInDateObj = new Date(lastCheckInByUser.createdAt);
  const diffTime = (lastCheckInDateObj.getTime() - streakStartDateObj.getTime()) / 1000 / 60 // get in minutes the length of the streak
  console.log("diffTime", diffTime);
  // streak is 0 if last checkin was more than 24 hours ago
  // otherwise streak is difference between today and last checkin mod 24 hours
  if (diffTime > 1440) {
    newStreak = 0;
  }else{
    // check how many days its been since last check in 
    const daysSinceLastCheckIn = diffTime / 1440; 
    console.log("daysSinceLastCheckIn", daysSinceLastCheckIn);
    newStreak = Math.ceil(daysSinceLastCheckIn);
  }

  console.log("newStreak", newStreak);

  // await DataStore.save(
  //   User.copyOf(user, (updated) => {
  //     updated.streak = newStreak;
  //   })
  // );

  return newStreak;
};
