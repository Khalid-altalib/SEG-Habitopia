import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { DataStore, Predicates, SortDirection, API, graphqlOperation } from 'aws-amplify';
import { Leaderboard, User, Checkin } from '../../models';


export type LeaderboardState = {
  loading: boolean;
  error: string;
  challengeType: string;
  timeInterval: string;
  page: number;
  page_count: number | undefined;
  entries: Array<{name: string, checkins: number}>;
};

const initialState: LeaderboardState = {
  loading: false,
  error: "",
  challengeType: "Sleep",
  timeInterval: "Weekly",
  page: 0,
  page_count: undefined,
  entries: [],
};

  /**
   * Subscribes to the checkin model and updates the leaderboard model when the user checks in
   */
const subscription = DataStore.observe(Checkin).subscribe({
  next: async (msg) => {
    if (msg.opType === 'INSERT') {
      const checkin = msg.element as Checkin;
      const { userID } = checkin;
  
      // Retrieve the current number of checkins for the user from the leaderboard
      const [leaderboardEntry] = await DataStore.query(Leaderboard, (entry) =>
        entry.leaderboardUserId.eq(userID)
      );
      const currentCheckins = leaderboardEntry?.numberOfCheckins ?? 0;

      // Update the user's checkins in the leaderboard
      const newCheckins = currentCheckins + 1;
      await DataStore.save(
        Leaderboard.copyOf(leaderboardEntry, (updated) => {
          updated.numberOfCheckins = newCheckins;
        })
      );
    }
  },
  error: (err) => console.error(err),
  complete: () => console.log('Leaderboard update complete'),
});
  
/**
 * Fetches the leaderboard entries from the database
 * @returns {Promise<GraphQLResult<Leaderboard>>} The leaderboard entries as  {name: string, checkins: number}
 * @throws {Error} If the leaderboard entries could not be fetched
 * @async
 */
export const fetchLeaderboard = createAsyncThunk<
  any,
  void,
  { rejectValue: string }
>("leaderboard/fetch", async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;
      const { challengeType, page } = state.leaderboard;
      const data = await DataStore.query(Leaderboard, Predicates.ALL, {
        page: page as number,
        limit: 10,
        sort: (s) => s.numberOfCheckins(SortDirection.DESCENDING)
      });

      const leaderboard = data.map((entry) => {
        return {
          id: entry.leaderboardUserId,
          checkins: entry.numberOfCheckins,
        };
      }); //filters the data to only include the id and number of checkins
      const result = await Promise.all(leaderboard.map(async (entry) => {
        const user = await DataStore.query(User, entry.id);
        return {
          name: user?.name,
          checkins: entry.checkins,
        };
      })); //maps the leaderboard to include the name of the user
      console.log(result);
      result.forEach((item) => {console.log(item)});
      const serializableResult = [...result.map((item) => {
        return {checkins: item.checkins, name: item.name}})];
      console.log(serializableResult);
      return serializableResult;
      
    } catch (error: any) {
      const message = error.message;
      return thunkAPI.rejectWithValue(message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { leaderboard } = getState() as RootState;
      if (
        leaderboard.page_count &&
        leaderboard.page == leaderboard.page_count
      ) {
        return false;
      }

      if (leaderboard.error.length > 0) {
        return false;
      }
    },
  }
);

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
        console.log(action.payload);
        state.entries = action.payload;
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
