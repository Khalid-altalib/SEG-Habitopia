import configureStore, { MockStore } from "redux-mock-store";
import thunk from "redux-thunk";
import { fetchLeaderboard, leaderboardSlice } from "./leaderboardSlice";

jest.mock("./authQueries");
jest.mock("aws-amplify");

const mockStore = configureStore([thunk]);

describe("leaderboardSlice", () => {
    let store: MockStore;
    
    beforeEach(() => {
        store = mockStore({
        leaderboard: {
            leaderboardEntries: [["test", 1], ["test2", 2], ["test3", 3]],
            loading: false,
            error: "",
            page: 1,
            pageCount: 1,
        },
        });
    });
    afterEach(() => {
        jest.resetAllMocks();
      });
    });

    // describe("fetchLeaderboard", () => {
    //     it("should fetch leaderboard entries as pairs of username and score", async () => {
    //         const fetchLeaderboardMock = jest.fn();
    //         (fetchLeaderboard as jest.Mock).mockImplementation(fetchLeaderboardMock);

    //         await store.dispatch(fetchLeaderboard());

    //         expect(fetchLeaderboardMock).toHaveBeenCalledWith({

