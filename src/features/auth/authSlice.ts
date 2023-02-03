import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { LocalUser } from "../../../types";

type AuthState = {
  signUpData: {
    email?: string;
    password?: string;
    starterChallenges?: string[];
    name?: string;
  };
  logInData: {
    email?: string;
    password?: string;
  };
  user: LocalUser | null;
  loading: boolean;
  error: string;
};

const getLoggedInUserFromStorage = (): LocalUser | null => {
  const data = localStorage.getItem("user");

  if (data === null) {
    return null;
  }

  const user = JSON.parse(data);

  return user;
};

const logInUser = createAsyncThunk<LocalUser, void, { rejectValue: string }>(
  "auth/logIn",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`https://test/api`); //  BACKEND PLACEHOLDER
      return (await response.json()) as LocalUser;
    } catch (error: any) {
      const message = error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState: AuthState = {
  signUpData: {},
  logInData: {},
  user: getLoggedInUserFromStorage(),
  loading: false,
  error: "",
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
  extraReducers: (builder) => {
    builder.addCase(logInUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logInUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = "";
    });
    builder.addCase(logInUser.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = action.payload as string;
    });
  },
});

export const { addSignUpData, addLogInData } = authSlice.actions;

export default authSlice.reducer;
