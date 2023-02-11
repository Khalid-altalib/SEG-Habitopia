import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Profile } from "../../../types";
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

let requestPromise: any = undefined;

export const fetchProfile = createAsyncThunk<
  string,
  any,
  { rejectValue: string }
>("profile/fetch", async (userId: string, thunkAPI) => {
  try {
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
        const { profile } = action.payload;
        state.profile = profile;
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
