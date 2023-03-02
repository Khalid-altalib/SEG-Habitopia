import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { LocalUser } from "../../../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootState } from "../../app/store";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { createUserInDatabase } from "./authQueries";
import { Auth } from "aws-amplify";

type AuthState = {
  signUpData: {
    email: string;
    password: string;
    name: string;
    confirmationCode: string;
  };
  logInData: {
    email: string;
    password: string;
  };
  user: LocalUser | undefined;
  loading: boolean;
  error: string;
};

export const signUpUser = createAsyncThunk<void, void, { rejectValue: string }>(
  "auth/signUp",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;
      const { email, password, name } = state.auth.signUpData;
      await Auth.signUp({
        username: email as string,
        password: password as string,
        attributes: {
          name: name,
        },
      });
    } catch (error: any) {
      const message = error.message;
      console.log(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const sendConfirmationCode = createAsyncThunk<
  LocalUser,
  void,
  { rejectValue: string }
>("auth/confirmation", async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState() as RootState;
    const { email, password, confirmationCode, name } = state.auth.signUpData;
    await Auth.confirmSignUp(email, confirmationCode);
    const user = await logInHelper(email, password, name);
    return user as LocalUser;
  } catch (error: any) {
    const message = error.message;
    console.log(error);
    return thunkAPI.rejectWithValue(message);
  }
});

export const updatePassword = async (password: string, thunkAPI: any) => {
  console.log("updating password");
  console.log(password);
  const oldPassword = "Password.123";
  const state = thunkAPI.getState() as RootState;
  // console.log(state);
  const email = state.settings.settings.email;
  console.log(email);

  Auth.currentAuthenticatedUser()
  .then((user) => {
    return Auth.changePassword(user, oldPassword, password);
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
  
};

const logInHelper = async (email: string, password: string, name?: string) => {
  const { signInUserSession, attributes } = await Auth.signIn(email, password);
  const user = {
    authToken: signInUserSession.idToken.jwtToken,
    userId: attributes.sub,
  };

  await AsyncStorage.setItem("user", JSON.stringify(user));
  await createUserInDatabase(attributes.sub, email, name);
  return user;
};

export const logInUser = createAsyncThunk<
  LocalUser,
  void,
  { rejectValue: string }
>("auth/login", async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState() as RootState;
    const { email, password } = state.auth.logInData;
    const user = await logInHelper(email, password);
    return user as LocalUser;
  } catch (error: any) {
    const message = error.message;
    console.log(message);
    return thunkAPI.rejectWithValue(message);
  }
});

export const logInUserFromStorage = createAsyncThunk<
  LocalUser,
  void,
  { rejectValue: string }
>("auth/logInFromStorage", async (_, thunkAPI) => {
  const data = await AsyncStorage.getItem("user");

  if (data) {
    Toast.show({
      type: "success",
      text1: "Welcome back! 👋",
      text2: "We've logged you in from your previous session",
    });
    return JSON.parse(data) as LocalUser;
  } else {
    return thunkAPI.rejectWithValue("Please log in again");
  }
});

export const logOutUser = createAsyncThunk("auth/logOutUser", async () => {
  await AsyncStorage.removeItem("user");
  return undefined;
});

const initialState: AuthState = {
  signUpData: { email: "", password: "", name: "", confirmationCode: "" },
  logInData: { email: "", password: "" },
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
      console.log(state, action);
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
    builder.addCase(sendConfirmationCode.pending, authenticationPending);
    builder.addCase(sendConfirmationCode.fulfilled, authenticationFulfilled);
    builder.addCase(sendConfirmationCode.rejected, authenticationRejected);
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
