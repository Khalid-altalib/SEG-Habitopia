import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Profile, Status } from "../../../types";
import { RootState } from "../../app/store";
import { getAuthTokenFromThunk } from "../../app/util";

export type ProfileState = {
  profiles: Array<Profile & Status>;
};

const initialState: ProfileState = {
  profiles: [],
};

export const fetchProfile = createAsyncThunk<
  string,
  any,
  { rejectValue: string }
>("profile/fetch", async (username: string, thunkAPI) => {
  try {
    const endpoint = `https://test/api/profile/${username}`;
    const response = await fetch(endpoint, {
      headers: {
        "Content-Type": "application/json",
        Authorization: getAuthTokenFromThunk(thunkAPI),
      },
    }); //  BACKEND PLACEHOLDER
    return await response.json();
  } catch (error: any) {
    const message = error.message;
    return thunkAPI.rejectWithValue(message);
  }
});

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchProfile.fulfilled,
      (state: ProfileState, action: PayloadAction<any>) => {
        const { profile } = action.payload;
        let selectedProfile = state.profiles.find(
          (p) => p.name == profile.name
        );
        selectedProfile = { ...selectedProfile };
      }
    );
  },
});
