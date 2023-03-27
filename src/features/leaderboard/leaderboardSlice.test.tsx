import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import leaderboardReducer, {
  leaderboardSlice,
  LeaderboardState,
  fetchLeaderboard,
  changeSetting,
} from "./leaderboardSlice";
import { RootState } from "../../app/store";
import { fetchLeaderboardData } from "./leaderboardQueries";

/**
 * This file contains tests for the leaderboardSlice.
 * The tests are split into two sections:
 * 1. Reducers
 * 2. Async actions
 */

// Mock the fetchLeaderboardData function
jest.mock("./leaderboardQueries", () => ({
  fetchLeaderboardData: jest.fn(),
}));

describe("leaderboardSlice", () => {
  let store: any;
  let initialState: LeaderboardState;

  beforeEach(() => {
    store = configureStore({
      reducer: leaderboardReducer,
      middleware: [thunk],
    });
    initialState = {
      loading: false,
      error: "",
      challengeType: "Sleep",
      timeInterval: "Weekly",
      page: 0,
      entries: [],
    };
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("reducers", () => {
    it("should handle changeSetting", () => {
      const action = changeSetting({ name: "challengeType", value: "Running" });
      const state = leaderboardSlice.reducer(initialState, action);
      expect(state.challengeType).toEqual("Running");
    });
    it("should handle fetchLeaderboard.pending", () => {
      const action = fetchLeaderboard.pending("", undefined);
      const state = leaderboardSlice.reducer(initialState, action);
      expect(state.loading).toEqual(true);
    });
    it("should handle fetchLeaderboard.fulfilled", () => {
      const action = fetchLeaderboard.fulfilled(
        [{ name: "Alice", checkins: 5 }],
        "",
        undefined
      );
      const state = leaderboardSlice.reducer(initialState, action);
      expect(state.loading).toEqual(false);
      expect(state.entries).toEqual([{ name: "Alice", checkins: 5 }]);
    });

    it("should handle fetchLeaderboard.rejected", () => {
      const error = Error("error");
      const action = fetchLeaderboard.rejected(error, "", undefined);
      const state = leaderboardSlice.reducer(initialState, action);
      expect(state.loading).toEqual(false);
      expect(state.error).toEqual(undefined);
      expect(state.entries).toEqual([]);
    });

    it("should handle when state is assigned a value", () => {
      const action = changeSetting({ name: "challengeType", value: "Sleep" });
      const state = leaderboardSlice.reducer(initialState, action);
      expect(state.challengeType).toEqual("Sleep");
    });
  });

  describe("fetchLeaderboard", () => {
    const getState = () => ({ leaderboard: initialState } as RootState);

    it("should dispatch fetchLeaderboardData and update the state on success", async () => {
      const mockData = [{ name: "Alice", checkins: 5 }];
      (fetchLeaderboardData as jest.Mock).mockResolvedValue(mockData);
      const resultAction = await fetchLeaderboard()(
        jest.fn(),
        getState,
        undefined
      );
      expect(fetchLeaderboardData).toHaveBeenCalledWith("Sleep", 0);
      expect(resultAction.type).toEqual(fetchLeaderboard.fulfilled.type);
      expect(resultAction.payload).toEqual(mockData);
    });

    it("should not update state when fetch fails", async () => {
      (fetchLeaderboardData as jest.Mock).mockRejectedValue("error");
      const resultAction = await fetchLeaderboard()(
        jest.fn(),
        getState,
        undefined
      );
      expect(resultAction.type).toEqual(fetchLeaderboard.rejected.type);
    });

    it("should catch errors from fetching the leaderboard", async () => {
      const error = Error("error");
      (fetchLeaderboardData as jest.Mock).mockRejectedValue(error);
      const resultAction = await fetchLeaderboard()(
        jest.fn(),
        getState,
        undefined
      );
      expect(resultAction.type).toEqual(fetchLeaderboard.rejected.type);
    });
  });
});
