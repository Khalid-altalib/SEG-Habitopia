import { LocalUser } from "../../types";

export const getAuthToken = (thunkAPI: any) => {
  const state = thunkAPI.getState();
  const localUser: LocalUser | null = state.auth.user;
  const authToken = localUser ? localUser.authToken : "";
  return authToken;
};
