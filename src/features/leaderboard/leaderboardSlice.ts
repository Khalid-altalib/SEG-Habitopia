import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { DataStore, Predicates, SortDirection, API, graphqlOperation } from 'aws-amplify';
import { Leaderboard, User } from '../../models';
import { GraphQLResult } from '@aws-amplify/api-graphql';

export type LeaderboardState = {
  loading: boolean;
  error: string;
  challengeType: string;
  timeInterval: string;
  page: number;
  page_count: number | undefined;
  entries: Array<object>;
};

const initialState: LeaderboardState = {
  loading: false,
  error: "",
  challengeType: "Sleep",
  timeInterval: "Weekly",
  page: 0,
  page_count: undefined,
  entries: [{}],
};

async function countLeaderboardEntries(): Promise<number> {
  const query = `
    query CountLeaderboardEntries {
      countLeaderboard {
        count
      }
    }
  `;
  const response = await API.graphql(graphqlOperation(query)) as GraphQLResult<{ countLeaderboard: { count: number } }>;
  return response.data?.countLeaderboard?.count || 0;
}

export const fetchLeaderboard = createAsyncThunk<
  any,
  void,
  { rejectValue: string }
>("leaderboard/fetch", async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;
      const { challengeType, timeInterval, page } = state.leaderboard;
      const fetchedLeaderboard = await DataStore.query(Leaderboard, Predicates.ALL, {
        page: page as number,
        limit: 10,
        sort: (s) => s.numberOfCheckins(SortDirection.DESCENDING)
      });

      const mappedLeaderboard = fetchedLeaderboard.map((entry) => {
        return {
          id: entry.leaderboardUserId,
          checkins: entry.numberOfCheckins,
        };
      });
      const namedPeopleLeaderboard = await Promise.all(mappedLeaderboard.map(async (entry) => {
        const user = await DataStore.query(User, entry.id);
        return {
          name: user?.name,
          checkins: entry.checkins,
        };
      }));
      console.log(namedPeopleLeaderboard);
      return namedPeopleLeaderboard;

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
