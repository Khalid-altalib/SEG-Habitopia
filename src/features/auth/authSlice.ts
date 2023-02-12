import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { LocalUser } from "../../../types";
import { Auth } from "aws-amplify";
import { AsyncStorage } from "react-native";
import { RootState } from "../../app/store";

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
  user: LocalUser | undefined;
  loading: boolean;
  error: string;
};

export const signUpUser = createAsyncThunk<
  LocalUser,
  void,
  { rejectValue: string }
>("auth/signUp", async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState() as RootState;
    const { email, password } = state.auth.signUpData;
    console.log(email, password);
    const { user } = await Auth.signUp({
      username: email as string,
      password: password as string,
      attributes: {
        name: "Test test",
      },
    });
    return {} as LocalUser;
  } catch (error: any) {
    const message = error.message;
    console.log(error);
    return thunkAPI.rejectWithValue(message);
  }
});

export const logInUser = createAsyncThunk<
  LocalUser,
  void,
  { rejectValue: string }
>("auth/login", async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState() as RootState;
    const { email, password } = state.auth.logInData;
    const { Session } = await Auth.signIn(email as string, password); //  BACKEND PLACEHOLDER
    console.log(Session, email);
    return { authToken: Session, userId: email } as LocalUser;
  } catch (error: any) {
    const message = error.message;
    return thunkAPI.rejectWithValue(message);
  }
});

export const logInUserFromStorage = createAsyncThunk<
  LocalUser,
  void,
  { rejectValue: string }
>("auth/logInFromStorage", async (_, thunkAPI) => {
  const data = await AsyncStorage.getItem("user");
  if (data === null) {
    return thunkAPI.rejectWithValue("Please log in again");
  } else {
    return JSON.parse(data) as LocalUser;
  }
});

export const logOutUser = createAsyncThunk(
  "auth/logOutUser",
  async (_, thunkAPI) => {
    return await AsyncStorage.removeItem("user");
  }
);

const initialState: AuthState = {
  signUpData: {},
  logInData: {},
  user: undefined,
  loading: false,
  error: "",
};

const authenticationPending = (state: AuthState) => {
  state.loading = true;
};

const authenticationFulfilled = (
  state: AuthState,
  action: PayloadAction<LocalUser>
) => {
  state.loading = false;
  state.user = action.payload;
  state.error = "";
  localStorage.set("user", JSON.stringify(action.payload));
};

const authenticationRejected = (state: AuthState, action: any) => {
  state.loading = false;
  state.user = undefined;
  state.error = action.payload;
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
    builder.addCase(logInUser.pending, authenticationPending);
    builder.addCase(logInUser.fulfilled, authenticationFulfilled);
    builder.addCase(logInUser.rejected, authenticationRejected);
    builder.addCase(signUpUser.pending, authenticationPending);
    builder.addCase(signUpUser.fulfilled, authenticationFulfilled);
    builder.addCase(signUpUser.rejected, authenticationRejected);
    builder.addCase(logInUserFromStorage.pending, authenticationPending);
    builder.addCase(logInUserFromStorage.fulfilled, authenticationFulfilled);
    builder.addCase(logInUserFromStorage.rejected, authenticationRejected);
    builder.addCase(logOutUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logOutUser.fulfilled, (state) => {
      state.loading = false;
      state.user = undefined;
    });
  },
});

export const { addSignUpData, addLogInData } = authSlice.actions;

export default authSlice.reducer;
