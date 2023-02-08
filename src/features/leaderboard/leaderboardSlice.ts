import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import store from "../../app/store";

type LeaderboardState = {
  loading: boolean;
  error: string;
  challengeType: string;
  timeInterval: string;
  page: number;
  entries: Array<object>;
};

const initialState: LeaderboardState = {
  loading: false,
  error: "",
  challengeType: "sleep",
  timeInterval: "weekly",
  page: 1,
  entries: [{}],
};

export const fetchLeaderboard = createAsyncThunk<
  void,
  void,
  { rejectValue: string }
>("leaderboard/fetch", async (_, thunkAPI) => {
  try {
    const response = await fetch("https://test/api/leaderboard"); //  BACKEND PLACEHOLDER
    return await response.json();
  } catch (error: any) {
    const message = error.message;
    return thunkAPI.rejectWithValue(message);
  }
});

export const leaderboardSlice = createSlice({
  name: "leaderboard",
  initialState,
  reducers: {
    changeSetting: (
      state: LeaderboardState,
      action: PayloadAction<{ name: keyof LeaderboardState; value: string }>
    ) => {
      const { name, value } = action.payload;
      state[name] = value as never;
      state.page = 1;
      state.entries = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchLeaderboard.fulfilled,
      (state: LeaderboardState, action: PayloadAction<any>) => {
        state.page += 1;
        state.loading = false;
        state.error = "";
        state.entries = action.payload.entries;
      }
    );
    builder.addCase(fetchLeaderboard.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(
      fetchLeaderboard.pending,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      }
    );
  },
});

export default leaderboardSlice.reducer;
