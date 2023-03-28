import { LocalUser } from "../../types";
import { DataStore } from "@aws-amplify/datastore";
import { User } from "../models";

export const getAuthTokenFromThunk = (thunkAPI: any) => {
  const state = thunkAPI.getState();
  const localUser: LocalUser | undefined = state.auth.user;
  const authToken = localUser ? localUser.authToken : "";
  return authToken;
};

export const getUserIdFromThunk = (thunkAPI: any) => {
  const state = thunkAPI.getState();
  const localUser: LocalUser | undefined = state.auth.user;
  const userId = localUser ? localUser.userId : "";
  return userId;
};

export const getUserFromDatabase = async (thunkAPI: any) => {
  const state = thunkAPI.getState();
  const localUser: LocalUser | undefined = state.auth.user;
  const userId = localUser ? localUser.userId : "";
  const user = await DataStore.query(User, (user) => user.id.eq(userId));
  return user[0];
};

export const getUserFromDatabasebyID = async (userID: string) => {
  const user = await DataStore.query(User, (user) => user.id.eq(userID));
  return user[0];
};

export const convertDateToTimeString = (date: Date) => {
  const elapsedTimeInMilliseconds: number = Date.now() - date.getTime();

  const ONE_SECOND = 1000;
  const ONE_MINUTE = ONE_SECOND * 60;
  const ONE_HOUR = ONE_MINUTE * 60;
  const ONE_DAY = ONE_HOUR * 24;
  const ONE_WEEK = ONE_DAY * 7;

  // Dealing with a matter of seconds
  if (elapsedTimeInMilliseconds < ONE_MINUTE) {
    return Math.round(elapsedTimeInMilliseconds / ONE_SECOND) + "s"; // E.g. '13s'
  }
  // Dealing with minutes
  else if (elapsedTimeInMilliseconds < ONE_HOUR) {
    return Math.round(elapsedTimeInMilliseconds / ONE_MINUTE) + "m"; // E.g. '4m'
  }
  // Dealing with hours
  else if (elapsedTimeInMilliseconds < ONE_DAY) {
    return Math.round(elapsedTimeInMilliseconds / ONE_HOUR) + "h"; // E.g. '3h'
  }
  // Dealing with days
  else if (elapsedTimeInMilliseconds < ONE_WEEK) {
    return Math.round(elapsedTimeInMilliseconds / ONE_DAY) + "d"; // E.g. '3d'
  }
  // Dealing with weeks
  else {
    return Math.round(elapsedTimeInMilliseconds / ONE_WEEK) + "w"; // E.g. '4w'
  }
};
