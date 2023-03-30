import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { DataStore } from "aws-amplify";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { Settings } from "../../../types";
import { getUserFromDatabase } from "../../app/util";
import { User } from "../../models";
import { updatePassword } from "../auth/authSlice";

export type SettingsState = {
  settings: Settings;
  fetchSettings: {
    loading: boolean;
    error: string;
  };
  setSettings: {
    loading: boolean;
    error: string;
  };
};

const initialState: SettingsState = {
  settings: {
    email: "",
    password: "",
    notifications: false,
    name: "",
    biography: "",
  },
  fetchSettings: {
    loading: false,
    error: "",
  },
  setSettings: {
    loading: false,
    error: "",
  },
};

// Async thunk to retrieve the user's settings from a database
export const fetchSettings = createAsyncThunk<
  Settings,
  void,
  { rejectValue: string }
>("settings/fetch", async (_, thunkAPI) => {
  try {
    // Call an external API to get the user data
    const userData = await getUserFromDatabase(thunkAPI);

    // Map the user data to the Settings shape
    const response = {
      email: userData.email,
      name: userData.name,
      notifications: userData.notifications,
      biography: userData.biography,
    };

    // Return the settings as a payload
    return (await response) as Settings;
  } catch (error: any) {
    // If there's an error, reject the thunk with an error message
    const message = error.message;
    return thunkAPI.rejectWithValue(message);
  }
});

// Async thunk to update the user's settings in a database
export const setSettings = createAsyncThunk<
  void,
  object,
  { rejectValue: string }
>("settings/set", async (settings: any, thunkAPI) => {
  try {
    const { name, notifications, biography, password, oldPassword } = settings;

    // Call an external API to get the user data
    const user = await getUserFromDatabase(thunkAPI);

    // Update the user data with the new settings
    await DataStore.save(
      User.copyOf(user, (updated) => {
        if (name !== undefined) {
          updated.name = name;
        }
        if (notifications !== undefined) {
          updated.notifications = notifications;
        }
        if (biography !== undefined) {
          updated.biography = biography;
        }
        if (password !== undefined) {
          updatePassword(password, oldPassword);
        }
      })
    );

    // Show a success message to the user
    Toast.show({ type: "success", text1: "Your new setting has been saved! ✅" });

    // Return the updated settings as a payload
    return settings;
  } catch (error: any) {
    // If there's an error, reject the thunk with an error message
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
        state.fetchSettings.loading = false;
        state.fetchSettings.error = "";
      }
    );
    builder.addCase(fetchSettings.pending, (state: SettingsState) => {
      state.fetchSettings.loading = true;
      state.fetchSettings.error = "";
    });
    builder.addCase(
      fetchSettings.rejected,
      (state: SettingsState, action: PayloadAction<any>) => {
        state.fetchSettings.loading = false;
        state.fetchSettings.error = action.payload.message;
      }
    );
    builder.addCase(
      setSettings.fulfilled,
      (state: SettingsState, action: PayloadAction<any>) => {
        state.settings = { ...state.settings, ...action.payload };
        state.setSettings.loading = false;
      }
    );
    builder.addCase(setSettings.pending, (state: SettingsState) => {
      state.setSettings.loading = true;
    });
    builder.addCase(setSettings.rejected, (state: SettingsState) => {
      state.setSettings.loading = false;
    });
  },
});

export const {} = settingsSlice.actions;

export default settingsSlice.reducer;
