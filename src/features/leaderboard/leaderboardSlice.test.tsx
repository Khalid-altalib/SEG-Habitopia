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
      pageCount: 2,
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

    // not implemented yet
    it("should not update state when fetch fails", async () => {});
    it("should update state when fetch succeeds", async () => {});
    it("should not update state when page is out of bounds", async () => {});
    it("should update state when page is in bounds", async () => {});
  });
});
