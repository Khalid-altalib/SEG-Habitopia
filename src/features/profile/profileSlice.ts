import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Profile, User } from "../../../types";
import { getUserFromDatabasebyID } from "../../app/util";
import { getStatistics } from "./statisticsQueries";
import {
  followUserQuery,
  getCount,
  getFollowers,
  getFollowing,
} from "./profileQueries";
import { RootState } from "@app/store";

export type ProfileState = {
  profile?: Profile;
  followList?: User[];
  fetchProfile: {
    loading: boolean;
    error: string;
  };
  fetchFollowList: {
    loading: boolean;
    error: string;
  };
  followUser: {
    loading: boolean;
    error: string;
  };
};

const initialState: ProfileState = { 
  profile: undefined,
  fetchProfile: {
    loading: false,
    error: "",
  },
  followList: undefined,
  fetchFollowList: {
    loading: false,
    error: "",
  },
  followUser: {
    loading: false,
    error: "",
  },
};

export const followUser = createAsyncThunk<
  boolean,
  string,
  { rejectValue: string }
>("profile/follow", async (followingUserID, thunkAPI) => {
  try {
    await followUserQuery(followingUserID, thunkAPI);
    return true;
  } catch (error: any) {
    const message = error.message;
    return message;
  }
});

export const fetchFollowList = createAsyncThunk<
  any,
  any,
  { rejectValue: string }
>(
  "profile/fetch-follow-list",
  async (data: { followListMode: string; profileID: string }, thunkAPI) => {
    try {
      const { followListMode, profileID } = data;
      let followList: { name: string; userId: string }[] = [];
      if (followListMode === "following") {
        followList = await getFollowing(profileID, followList);
      } else if (followListMode === "follower") {
        followList = await getFollowers(profileID, followList);
      }

      return followList;
    } catch (error: any) {
      const message = error.message;
      return message;
    }
  }
);

export const fetchProfile = createAsyncThunk<
  any,
  string,
  { rejectValue: string }
>("profile/fetch", async (userId, thunkAPI) => {
  try {
    const user = await getUserFromDatabasebyID(userId);
    const { checkIns, streak, wins } = await getStatistics(userId);
    const { followerCount, followingCount } = await getCount(user.id);

    const statistics = [
      { name: "Streak", quantity: streak },
      { name: "Wins", quantity: wins },
      { name: "Check Ins", quantity: checkIns },
    ];

    const profile = {
      userId: user.id,
      name: user.name,
      biography: user.biography,
      statistics: statistics,
      following: false,
      followerCount: followerCount,
      followingCount: followingCount,
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
      followUser.fulfilled,
      (state: ProfileState, action: PayloadAction<boolean>) => {
        if (state.profile) {
          state.profile.following = action.payload;
          if (action.payload == true) {
            state.profile.followerCount += 1;
          } else {
            state.profile.followerCount -= 1;
          }
        }

        state.followUser.loading = false;
      }
    );
    builder.addCase(followUser.pending, (state: ProfileState) => {
      state.followUser.loading = true;
    });
    builder.addCase(
      fetchProfile.fulfilled,
      (state: ProfileState, action: PayloadAction<any>) => {
        state.profile = action.payload;
        state.fetchProfile.loading = false;
        state.fetchProfile.error = "";
      }
    );
    builder.addCase(fetchProfile.pending, (state: ProfileState) => {
      state.profile = undefined;
      state.fetchProfile.loading = true;
      state.fetchProfile.error = "";
    });
    builder.addCase(
      fetchProfile.rejected,
      (state: ProfileState, action: PayloadAction<any>) => {
        state.profile = undefined;
        state.fetchProfile.loading = false;
        state.fetchProfile.error = action.payload;
      }
    );
    builder.addCase(
      fetchFollowList.fulfilled,
      (state: ProfileState, action: PayloadAction<any>) => {
        state.followList = action.payload;
        state.fetchFollowList.loading = false;
        state.fetchFollowList.error = "";
      }
    );
    builder.addCase(fetchFollowList.pending, (state: ProfileState) => {
      state.followList = undefined;
      state.fetchFollowList.loading = true;
      state.fetchFollowList.error = "";
    });
    builder.addCase(fetchFollowList.rejected, (state: ProfileState) => {
      state.followList = undefined;
      state.fetchFollowList.loading = false;
      state.fetchFollowList.error = "An error has occured";
    });
  },
});

export const {} = profileSlice.actions;

export default profileSlice.reducer;
