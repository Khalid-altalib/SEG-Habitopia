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

export const getUserByIdFromDatabase = async (userId: string) => {
  const user = await DataStore.query(User, (user) => user.id.eq(userId));
  return user[0];
};
