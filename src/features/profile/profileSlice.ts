import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Profile, Status } from "../../../types";
import { RootState } from "../../app/store";
import { getAuthTokenFromThunk } from "../../app/util";

export type ProfileState = {
  profile?: Profile;
  loading: boolean;
  error: string;
};

const initialState: ProfileState = {
  profile: undefined,
  loading: false,
  error: "",
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
        state.profile = profile;
        state.loading = false;
        state.error = "";
      }
    );
    builder.addCase(
      fetchProfile.pending,
      (state: ProfileState, action: PayloadAction<any>) => {
        state.profile = undefined;
        state.loading = true;
        state.error = "";
      }
    );
    builder.addCase(
      fetchProfile.rejected,
      (state: ProfileState, action: PayloadAction<any>) => {
        state.profile = undefined;
        state.loading = false;
        state.error = action.payload.message;
      }
    );
  },
});
