import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { DataStore } from "aws-amplify";
import { Settings } from "../../../types";
import { getAuthTokenFromThunk } from "../../app/util";
import { getUserSettings } from "../../graphql/queries";
import { UserSettings, User } from "../../models";


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
const getUserSettingsFromDB = async (thunkAPI: any) => {
  try {
    // get values from dynamodb
    const response = await DataStore.query(UserSettings, (c) => c.user.id.eq("13b0df6d-d214-42dc-a5f9-d649fa3fd3e1")); //  current placeholder for user id
    // console.log(response[0]);
    return response;
  } catch (error: any) {
  const message = error.message;
  return thunkAPI.rejectWithValue(message);
}    
}

const getUserFromDB = async (thunkAPI: any) => {
  try {
    // get values from dynamodb

    const response = await DataStore.query(User, (c) => c.id.eq("13b0df6d-d214-42dc-a5f9-d649fa3fd3e1")); //  current placeholder for user id
    // console.log(response);
    return response;

  } catch (error: any) {
  const message = error.message;
  return thunkAPI.rejectWithValue(message);
}
}

export const fetchSettings = createAsyncThunk<
  Settings,
  void,
  { rejectValue: string }
>("settings/fetch", async (_, thunkAPI) => {
  try {
    const settings = await getUserSettingsFromDB(thunkAPI);
    const userData  = await getUserFromDB(thunkAPI);

    const response =  {
      email: settings[0].email,
      password: settings[0].password,
      name: userData[0].name, // gets user name from user table 
      notifications: settings[0].notifications,
      biography: settings[0].biography,
      // could add a way to represent image here next sprint
    };
   
    return (await response) as Settings;
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
    // console.log(settings);
    return settings; // BACKEND_PLACEHOLDER
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
