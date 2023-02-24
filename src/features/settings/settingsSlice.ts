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
    const response = await DataStore.query(UserSettings, (c) => c.user.id.eq("b5c0baaf-9cfc-4f75-8f4c-61a39eea57d2")); //  current placeholder for user id
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

    const response = await DataStore.query(User, (c) => c.id.eq("b5c0baaf-9cfc-4f75-8f4c-61a39eea57d2")); //  current placeholder for user id
    // console.log(response[0]);
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
      email: userData[0].email,
      password: settings[0].password,
      name: userData[0].name, // gets user name from user table 
      notifications: settings[0].notifications,
      biography: userData[0].biography,
      // could add a way to represent image here next sprint
    };
   
    return (await response) as Settings;
  } catch (error: any) {
    const message = error.message;
    return thunkAPI.rejectWithValue(message);
  }
});

const updateSettingsInDB = async (thunkAPI: any, settingToChange: any) => {
  try {
    // set values from dynamodb
    var user = (await getUserFromDB(thunkAPI))[0];
    const response = await DataStore.save(
      User.copyOf(user, (updated) => {
        updated.name = settingToChange;
        })
    );
    return response;
  } catch (error: any) {
  const message = error.message;
  return thunkAPI.rejectWithValue(message);
}
}


export const setSettings = createAsyncThunk<
  void,
  object,
  { rejectValue: string }
>("settings/set", async (settings: any, thunkAPI) => {
  try {
    console.log(settings);

    const name = settings.name;
    const email = settings.email;
    const notifications = settings.notifications;
    const biography = settings.biography;
    // const image = settings.image;
    // const password = settings.password;


    var user = (await getUserFromDB(thunkAPI))[0];

    // find out which one is not null, and update that one

    if (name !== undefined) {
      // update the name in the user table
      await DataStore.save(
        User.copyOf(user, (updated) => {
          updated.name = name;
        }));
    }
    if (email !== undefined) {
      await DataStore.save(
        User.copyOf(user, (updated) => {
          updated.email = email;
        }));
    }
   
    if (notifications !== undefined) {
      await DataStore.save(
        UserSettings.copyOf(user, (updated) => {
          updated.notifications = notifications;
        }));
    }
    if (biography !== undefined) {
      await DataStore.save(
        User.copyOf(user, (updated) => {
          updated.biography = biography;
        }));
    }

    // if (image !== undefined) {
    //   // update the image in the user table
    // }
     // if (password !== undefined) {
    //   // update the password in the user settings table
    // }

    
    

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
