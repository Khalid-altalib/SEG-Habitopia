import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export type LeaderboardState = {
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
  challengeType: "Sleep",
  timeInterval: "Weekly",
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
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      const { name, value } = action.payload;

      if (state[name as keyof LeaderboardState] == value) {
        return;
      }

      state[name as keyof LeaderboardState] = value as never;
      state.page = 1;
      state.entries = [];
      state.loading = false;
      state.error = "";
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
      fetchLeaderboard.rejected,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      }
    );
  },
});

export const { changeSetting } = leaderboardSlice.actions;

export default leaderboardSlice.reducer;
