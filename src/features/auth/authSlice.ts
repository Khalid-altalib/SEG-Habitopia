import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface AuthState {
  signUpData: {
    email?: string;
    password?: string;
  };
  logInData: {
    email?: string;
    password?: string;
  };
  user: LocalUser | null;
}

interface LocalUser {
  authToken: string;
  username: string;
}

const getLoggedInUserFromStorage = (): LocalUser | null => {
  const data = localStorage.getItem("user");

  if (data === null) {
    return null;
  }

  const user = JSON.parse(data);

  return user;
};

const initialState: AuthState = {
  signUpData: {},
  logInData: {},
  user: getLoggedInUserFromStorage(),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addSignUpData: (state, action: PayloadAction<object>) => {
      state.signUpData = { ...state.signUpData, ...action.payload };
    },
    addLogInData: (state, action: PayloadAction<object>) => {
      state.logInData = { ...state.logInData, ...action.payload };
    },
  },
});

export const { addSignUpData, addLogInData } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.auth.value;

export default authSlice.reducer;
