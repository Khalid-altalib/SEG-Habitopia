import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Settings } from "../../../types";
import { getAuthTokenFromThunk } from "../../app/util";

export type SettingsState = {
  loading: boolean;
  error: string;
};

const initialState: SettingsState = {
  loading: false,
  error: "",
};

export const fetchSettings = createAsyncThunk<
  Settings,
  void,
  { rejectValue: string }
>("settings/fetch", async (_, thunkAPI) => {
  try {
    const response = await fetch("https://test/api/settings", {
      headers: {
        "Content-Type": "application/json",
        Authorization: getAuthTokenFromThunk(thunkAPI),
      },
    }); //  BACKEND PLACEHOLDER
    return (await response.json()) as Settings;
  } catch (error: any) {
    const message = error.message;
    return message;
  }
});

export const setSettings = createAsyncThunk<
  void,
  void,
  { rejectValue: string }
>("settings/set", async (_, thunkAPI) => {
  try {
    const response = await fetch("https://test/api/settings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: getAuthTokenFromThunk(thunkAPI),
      },
    }); //  BACKEND PLACEHOLDER
    return (await response.json()) as Settings;
  } catch (error: any) {
    const message = error.message;
    return message;
  }
});

const requestFulfilled = (state: SettingsState) => {
  state.loading = false;
  state.error = "";
};

const requestPending = (state: SettingsState) => {
  state.loading = true;
  state.error = "";
};

const requestRejected = (state: SettingsState, action: PayloadAction<any>) => {
  state.loading = false;
  state.error = action.payload.message;
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSettings.fulfilled, requestFulfilled);
    builder.addCase(fetchSettings.pending, requestPending);
    builder.addCase(fetchSettings.rejected, requestRejected);
    builder.addCase(setSettings.fulfilled, requestFulfilled);
    builder.addCase(setSettings.pending, requestPending);
    builder.addCase(setSettings.rejected, requestRejected);
  },
});
