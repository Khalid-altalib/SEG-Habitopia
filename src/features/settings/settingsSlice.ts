import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Settings } from "../../../types";
import { getAuthTokenFromThunk } from "../../app/util";

export type SettingsState = {
  settings: Settings;
  loading: boolean;
  error: string;
};

const initialState: SettingsState = {
  settings: {
    email: "",
    password: "",
    notifications: false,
    name: "",
  },
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
    return thunkAPI.rejectWithValue(message);
  }
});

export const setSettings = createAsyncThunk<
  void,
  object,
  { rejectValue: string }
>("settings/set", async (settings: any, thunkAPI) => {
  try {
    await fetch("https://test/api/settings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: getAuthTokenFromThunk(thunkAPI),
      },
    }); //  BACKEND PLACEHOLDER
    return settings;
  } catch (error: any) {
    const message = error.message;
    return thunkAPI.rejectWithValue(message);
  }
});

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchSettings.fulfilled,
      (state: SettingsState, action: PayloadAction<Settings>) => {
        state.settings = action.payload;
        state.loading = false;
        state.error = "";
      }
    );
    builder.addCase(fetchSettings.pending, (state: SettingsState) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(
      fetchSettings.rejected,
      (state: SettingsState, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload.message;
      }
    );
    builder.addCase(
      setSettings.fulfilled,
      (state: SettingsState, action: PayloadAction<any>) => {
        state.settings = { ...state.settings, ...action.payload };
      }
    );
  },
});

export const {} = settingsSlice.actions;

export default settingsSlice.reducer;
