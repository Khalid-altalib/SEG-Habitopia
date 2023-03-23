import { DataStore, SortDirection } from "@aws-amplify/datastore";
import {getUserFromDatabasebyID} from "../../app/util";
import { Challenge, ChallengeStatusEnum, Checkin, LazyUser, User } from "../../models";

export const getCheckIns = async (userId: string) => {
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
   await DataStore.save(User.copyOf(user, (updatedUser) => {
      updatedUser.streakStart = date.toISOString();
    })
  );
};

export const getLastCheckInByUserId = async (userId: string) => {
  // look in checkins to find all the validated checkins by this user, and sort it to find the most recent
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

export const checkStreak = async (userId: string) => {
  const user = await getUserFromDatabasebyID(userId);
  const streakStart = user.streakStart;

  const today = new Date();
  const lastCheckInByUser = await getLastCheckInByUserId(userId);

  //check that the user has a streak start date, and that they have checked in before
  if (!streakStart) {
    updateStreakStart(user, today);
    return 0;
  }
  if (!lastCheckInByUser || !lastCheckInByUser.createdAt) {
    updateStreakStart(user, today);
    return 0;
  }

  // convert to date objects
  const streakStartDateObj = new Date(streakStart);
  const lastCheckInDateObj = new Date(lastCheckInByUser.createdAt);
  const minutesSinceLastCheckIn = (today.getTime() - lastCheckInDateObj.getTime()) / 1000 / 60 // get in minutes the length of the streak

  // streak is 0 if last checkin was more than 24 hours ago, and we reset the streakStart to today 
  // so whenever they check in again, it will be 1
  
  // otherwise streak is difference between today and streakStart in days

  if (minutesSinceLastCheckIn > 1440) {
    updateStreakStart(user, today);
    return 0;
  }else{
    // check how many days its been since the streak started.
    const daysSinceStreakStart = (lastCheckInDateObj.getTime() - streakStartDateObj.getTime()) / 1000 / 60 / 1440; 

    if (daysSinceStreakStart < 0){
      return 0;
    }else{
      return Math.ceil(daysSinceStreakStart);
    }
  }
};

export const getWins = async (userId: string) => {
  let wins = 0;
  // query challenges where user id is in the list of users, so we get all the challenges the user is in
  const userChallenges = await DataStore.query(Challenge, (challenge) => challenge.Users.user.id.eq(userId));
  // then we check if the challenge is completed
  
  for await (const challenge of userChallenges) {
    if (challenge.status === ChallengeStatusEnum.COMPLETED) {
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