import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { DataStore } from "aws-amplify";
import { Profile, Statistic, User } from "../../../types";
import { getAuthTokenFromThunk, getUserByIdFromDatabase } from "../../app/util";
import { getUserFromDatabase } from "../../app/util";
import { getCheckIns } from "./statisticsQueries";

export type ProfileState = {
  profile?: Profile;
  followList?: User[];
  loading: boolean;
  error: string;
  fetchFollowList: {
    loading: boolean;
    error: string;
  };
};

const initialState: ProfileState = {
  profile: undefined,
  loading: false,
  error: "",
  followList: undefined,
  fetchFollowList: {
    loading: false,
    error: "",
  },
};

export const followUser = createAsyncThunk(
  "profile/follow",
  async (_, thunkAPI) => {}
);

export const fetchFollowList = createAsyncThunk(
  "profile/fetch-follow-list",
  async (followListMode: string) => {
    let followList = undefined;

    if (followListMode === "following") {
      followList = [
        { name: "Bob", userId: "123" },
        { name: "Tom", userId: "124" },
      ];
    } else if (followListMode === "follower") {
      followList = [
        { name: "Bob", userId: "123" },
        { name: "Tom", userId: "124" },
      ];
    }

    // BACKEND_PLACEHOLDER

    return followList;
  }
);

export const fetchProfile = createAsyncThunk<
  any,
  string,
  { rejectValue: string }
>("profile/fetch", async (userId, thunkAPI) => {
  try {
    const user = await getUserByIdFromDatabase(userId);
    const checkinCount = await getCheckIns(userId);

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
        state.error = action.payload;
      }
    );
    builder.addCase(
      fetchFollowList.fulfilled,
      (state: ProfileState, action: PayloadAction<any>) => {
        state.followList = action.payload;
        state.loading = false;
        state.error = "";
      }
    );
    builder.addCase(fetchFollowList.pending, (state: ProfileState) => {
      state.followList = undefined;
      state.loading = true;
      state.error = "";
    });
    builder.addCase(
      fetchFollowList.rejected,
      (state: ProfileState, action: PayloadAction<any>) => {
        state.followList = undefined;
        state.loading = false;
        state.error = "An error has occured";
      }
    );
  },
});

export const {} = profileSlice.actions;

export default profileSlice.reducer;
