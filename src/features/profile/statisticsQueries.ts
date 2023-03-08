import { DataStore, SortDirection } from "@aws-amplify/datastore";
import { Challenge, Checkin, LazyUser, User } from "../../models";
import { getUserFromDatabasebyID } from "../../app/util";

const getCheckIns = async (userId: string) => {
  const user = await getUserFromDatabasebyID(userId);
  let checkinCount = 0;
  // get number of items in the array of user Checkins
  for await (const checkin of user.Checkins) {
    if (checkin.isValidated){
      checkinCount++;
    }
  }

  return checkinCount;
};

const updateStreakStart = async (user: LazyUser, date : Date) => {
  await DataStore.save(
    User.copyOf(user, (updated) => {
      updated.streakStart = date.toISOString();
    })
  );
};

const getLastCheckInByUserId = async (userId: string) => {
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
  return lastCheckInByUser;
};

const checkStreak = async (userId: string) => {
  const user = await getUserFromDatabasebyID(userId);
  const streakStart = user.streakStart;

  let newStreak = 0;
  const today = new Date();

  console.log("streakStart", streakStart);
  const lastCheckInByUser = await getLastCheckInByUserId(userId);

  if (!streakStart) {
    console.log("no streak start found");
    updateStreakStart(user, today);
    return 0;
  }
  if (!lastCheckInByUser || !lastCheckInByUser.createdAt) {
    console.log("no checkin found");
    updateStreakStart(user, today);
    return 0;
  }
  console.log("lastCheckInByUser", lastCheckInByUser.createdAt);
  // convert to date objects
  const streakStartDateObj = new Date(streakStart);
  const lastCheckInDateObj = new Date(lastCheckInByUser.createdAt);
  const minutesSinceLastCheckIn = (today.getTime() - lastCheckInDateObj.getTime()) / 1000 / 60 // get in minutes the length of the streak

  // streak is 0 if last checkin was more than 24 hours ago, and we reset the streakStart to today 
  // so whenever they check in again, it will be 1
  
  // otherwise streak is difference between today and streakStart in days

  if (minutesSinceLastCheckIn > 1440) {
    newStreak = 0;
    updateStreakStart(user, today);
  }else{
    // check how many days its been since the streak started.
    const daysSinceStreakStart = (lastCheckInDateObj.getTime() - streakStartDateObj.getTime()) / 1000 / 60 / 1440; 
    console.log("daysSinceLastCheckIn", daysSinceStreakStart);

    if (daysSinceStreakStart < 0){
      newStreak = 0;
    }else{
      newStreak = Math.ceil(daysSinceStreakStart);
    }
  }
  return newStreak;
};

const getWins = async (userId: string) => {
  const user = await getUserFromDatabasebyID(userId);
  let wins = 0;
  // query challenges where user id is in the list of users, so we get all the challenges the user is in
  const userChallenges = await DataStore.query(Challenge, (c) => c.Users.user.id.eq(userId));
  // then we check if the challenge is completed
  
  for await (const challenge of userChallenges) {
    console.log("challenge", challenge);
    if (challenge.finished) {
      wins++;
    }
  }

  return wins;
};

export const getStatistics = async (userId: string) => {
  const checkIns = await getCheckIns(userId);
  const wins = await getWins(userId);
  const streak = await checkStreak(userId);
  return { checkIns, wins, streak };
}