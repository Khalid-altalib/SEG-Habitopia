import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { DataStore } from "aws-amplify";
import { Profile } from "../../../types";
import { getAuthTokenFromThunk } from "../../app/util";
import { User } from "../../models";

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

let requestPromise: any = undefined;

export const fetchProfile = createAsyncThunk<
  string,
  any,
  { rejectValue: string }
>("profile/fetch", async (thunkAPI) => {
  try {
    // fetch profile from backend, possibly use props?
    const user = (await DataStore.query(User, (c) => c.id.eq("b5c0baaf-9cfc-4f75-8f4c-61a39eea57d2")))[0]; // PLACEHOLDER PROFILE


    const profile = {
      userId: user.id,
      name: user.name,
      biography: user.biography,
      // profilePicture: user.profilePicture,
      }; 

    return profile;

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
        state.profile = action.payload;
        state.loading = false;
        state.error = "";
      }
    );
    builder.addCase(fetchProfile.pending, (state: ProfileState) => {
      state.profile = undefined;
      state.loading = true;
      state.error = "";
    });
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

export const {} = profileSlice.actions;

export default profileSlice.reducer;
