import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Profile, User } from "../../../types";
import { getAuthTokenFromThunk } from "../../app/util";

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

let requestPromise: any = undefined;

export const fetchProfile = createAsyncThunk<
  string,
  any,
  { rejectValue: string }
>("profile/fetch", async (userId: string, thunkAPI) => {
  try {
    const profile = {
      userId: 1,
      name: "Ihtasham",
      biography:
        "Hi, my name is Ihtasham and this is my bio. Welcome to Habitopia.",
      statistics: { checkIns: 32, streak: 6, level: 5, wins: 0 },
    }; // BACKEND_PLACEHOLDER

    return profile;

    const endpoint = `https://test/api/profile/${userId}`; //  BACKEND PLACEHOLDER

    if (requestPromise) {
      requestPromise.abort();
    }

    requestPromise = fetch(endpoint, {
      headers: {
        "Content-Type": "application/json",
        Authorization: getAuthTokenFromThunk(thunkAPI),
      },
    });

    const response = await requestPromise;
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
