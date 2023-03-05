import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Profile, User } from "../../../types";
import { getUserByIdFromDatabase } from "../../app/util";
import { getCheckIns } from "./statisticsQueries";

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

export const followUser = createAsyncThunk(
  "profile/follow",
  async (_, thunkAPI) => {
    // Check if local user is following profile user id (get profile user id from thunkAPI)
    return true;
  }
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
      following: false,
      followerCount: 0,
      followingCount: 0,
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
