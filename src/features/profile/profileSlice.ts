import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { DataStore } from "aws-amplify";
import { Profile, Statistic } from "../../../types";
import { getAuthTokenFromThunk } from "../../app/util";
import { User } from "../../models";
import { getUserFromDatabase } from "../../app/util";
import { useState, useEffect } from "react";
import { getCheckIns } from "./statisticsQueries";

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
    const user = (await DataStore.query(User, (userProfile) => userProfile.id.eq("b5c0baaf-9cfc-4f75-8f4c-61a39eea57d2")))[0]; // PLACEHOLDER PROFILE);
    // const user = await getUserFromDatabase(thunkAPI);
    const checkinCount = await getCheckIns(thunkAPI);

    const statistics = [
      { name: "Streak", quantity: 5 },
      { name: "Wins", quantity: 1 },
      { name: "Check Ins", quantity: checkinCount },
      { name: "Level", quantity: 8 },
    ];

    const profile = {
      userId: user.id,
      name: user.name,
      biography: user.biography,
      statistics: statistics,
    }; 

    return profile;

  } catch (error: any) {
    const message = error.message;
    return thunkAPI.rejectWithValue("an error occurred");
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
        state.error = action.payload;
      }
    );
  },
});

export const {} = profileSlice.actions;

export default profileSlice.reducer;
