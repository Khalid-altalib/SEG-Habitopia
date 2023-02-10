import { LocalUser } from "../../types";

export const getAuthTokenFromThunk = (thunkAPI: any) => {
  const state = thunkAPI.getState();
  const localUser: LocalUser | null = state.auth.user;
  const authToken = localUser ? localUser.authToken : "";
  return authToken;
};
