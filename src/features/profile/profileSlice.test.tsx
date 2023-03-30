import configureStore, { MockStore } from "redux-mock-store";
import thunk from "redux-thunk";
import {
  ProfileState,
  fetchProfile,
  profileSlice,
  followUser,
  fetchFollowList,
} from "./profileSlice";
import { getStatistics } from "./statisticsQueries";
import { getUserFromDatabasebyID } from "../../app/util";
import { applyMiddleware } from "redux";
import {
  followUserQuery,
  getFollowers,
  getFollowing,
  getCount,
  isFollowingQuery,
} from "./profileQueries";

// mock functions that wont be needed for testing
jest.mock("./statisticsQueries", () => ({
  getStatistics: jest.fn(),
}));

jest.mock("../../app/util", () => ({
  getUserFromDatabasebyID: jest.fn(),
}));

jest.mock("./profileQueries", () => ({
  followUserQuery: jest.fn(() => Promise.resolve("Test")),
  getCount: jest.fn(),
  getFollowers: jest.fn(),
  getFollowing: jest.fn(),
  isFollowingQuery: jest.fn(),
}));

// define the mock state for the store
const mockState: ProfileState = {
  profile: undefined,
  followList: undefined,
  fetchProfile: {
    loading: false,
    error: "",
  },
  fetchFollowList: {
    loading: false,
    error: "",
  },
  followUser: {
    loading: false,
    error: "",
  },
};

describe("fetchProfileBuilder", () => {
  let store: any;
  // define mock data that should be returned from the mocked functions

  const mockStatistics = [
    { name: "Streak", quantity: 5 },
    { name: "Wins", quantity: 43 },
    { name: "Check Ins", quantity: 100 },
  ];

  const mockProfile = {
    userId: "123",
    name: "Test User",
    biography: "This is a test biography",
    followerCount: undefined,
    followingCount: undefined,
    following: false,
    statistics: mockStatistics,
  };

  beforeEach(
    () =>
    // create a mock store with the mock state and thunk middleware 
      (store = configureStore([thunk])({
        reducer: {
          profile: profileSlice.reducer, 
        }, 
        middleware: [thunk], 
      }))
  );

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should handle fetchProfile error correctly", async () => {
    const error = "Error fetching profile";
    // if getUserFromDatabasebyID throws an error, fetchProfile should return an error
    (getUserFromDatabasebyID as jest.Mock).mockRejectedValue(new Error(error));

    // expect the promise to be rejected and the error to be returned
    await expect(store.dispatch(fetchProfile("123"))).resolves.toMatchObject({
      error: expect.objectContaining({ message: "Rejected" }),
    });
  });

  it("should handle fetchProfile.fulfilled", async () => {
    // ensure that the reducer handles the fulfilled action correctly and returns the correct state
    const expectedAction = {
      type: "profile/fetch/fulfilled",
      payload: mockProfile,
    };
 
    const state = profileSlice.reducer(mockState, expectedAction);
    expect(state.fetchProfile.loading).toEqual(false);
    expect(state.fetchProfile.error).toEqual("");
    expect(state.profile).toEqual(mockProfile);
  });

  it("should handle fetchProfile.pending", async () => {
    // ensure that the reducer handles the pending action correctly and returns the correct state
    const expectedAction = {
      type: "profile/fetch/pending",
    };

    const state = profileSlice.reducer(mockState, expectedAction);
    expect(state.fetchProfile.loading).toEqual(true);
    expect(state.fetchProfile.error).toEqual("");
    expect(state.profile).toEqual(undefined);
  });

  it("should handle fetchProfile.rejected", async () => {
    // ensure that the reducer handles the rejected action correctly and returns the correct state
    const expectedAction = {
      type: "profile/fetch/rejected",
      payload: "Error fetching profile",
    };

    const state = profileSlice.reducer(mockState, expectedAction);
    expect(state.fetchProfile.loading).toEqual(false);
    expect(state.fetchProfile.error).toEqual("Error fetching profile");
    expect(state.profile).toEqual(undefined);
  });
});

describe("followUser", () => {
  let store: any;

  // create a mock store with the mock state and thunk middleware 
  beforeEach(
    () =>
      (store = configureStore([thunk])({
        reducer: {
          profile: profileSlice.reducer,
        },
        middleware: [thunk],
      }))
  );

  let state: ProfileState;
  // create a mockState profile with arbritary data
  beforeEach(() => {
    mockState.profile = {
      userId: "test-id",
      name: "test-name",
      biography: "test-bio",
      email: "test-email",
      rankings: [],
      statistics: [],
      followerCount: 0,
      followingCount: 0,
      following: false,
    };
  });

  it("should set profile.following to action.payload", () => {
    // ensure that profile.following changes upon the fulfilled action
    const action = {
      payload: true,
      type: "profile/follow/fulfilled",
    };
    const state = profileSlice.reducer(mockState, action);
    expect(state.profile?.following).toBe(action.payload);
  });

  it("should increment followerCount if action.payload is true", () => {
    // ensure that profile.followerCount increases upon the fulfilled action and payload is true.
    const action = {
      payload: true,
      type: "profile/follow/fulfilled",
    };

    const state = profileSlice.reducer(mockState, action);
    expect(state.profile?.followerCount).toBe(1);
  });

  it("should decrement followerCount if action.payload is false", () => {
    mockState.profile.followerCount = 1;

    // ensure that profile.followerCount decfreases upon the fulfilled action and payload is false
    const action = {
      payload: false,
      type: "profile/follow/fulfilled",
    };
    const state = profileSlice.reducer(mockState, action);
    expect(state.profile?.followerCount).toBe(0);
  });

  it("should handle followUser.pending", () => {
    // ensure that the reducer handles the pending action correctly and returns the correct state

    const action = {
      type: "profile/follow/pending",
    };
    const state = profileSlice.reducer(mockState, action);
    expect(state.followUser.loading).toBe(true);
    expect(state.followUser.error).toBe("");
  });

  it("should return true when followUserQuery resolves", async () => {
    // ensure that the followUserQuery returns the correct value, and that the action type is correct

    (followUserQuery as jest.Mock).mockResolvedValueOnce(true);
    const result = await store.dispatch(followUser("test-id"));
    expect(result.payload).toBe(true);
    expect(result.type).toBe("profile/follow/fulfilled");
  });

  it("should return error message when followUserQuery rejects", async () => {
    // if followUserQuery gives an error, we should return an error action.
    (followUserQuery as jest.Mock).mockRejectedValueOnce(
      new Error("test error")
    );
    const result = await store.dispatch(followUser("test-id"));
    expect(result.payload).toBe("test error");
  });
});

describe("fetchFollowList", () => {
  let store: any;

  beforeEach(
    () =>
      (store = configureStore([thunk])({
        reducer: {
          profile: profileSlice.reducer,
        },
        middleware: [thunk],
      }))
  );

  it('should return following list when followListMode is "following"', async () => {
    // mock getFollowing to give arbitrary follower
    (getFollowing as jest.Mock).mockResolvedValueOnce([
      { name: "test", userId: "test-id" },
    ]);
    // expect correct result
    const result = await store.dispatch(
      fetchFollowList({ followListMode: "following", profileID: "test-id" })
    );
    expect(result.payload).toEqual([{ name: "test", userId: "test-id" }]);
  });

  it('should return followers list when followListMode is "follower"', async () => {
    // mock getFollowers to give arbitrary follower
    (getFollowers as jest.Mock).mockResolvedValueOnce([
      { name: "test", userId: "test-id" },
    ]);
    // expect correct result
    const result = await store.dispatch(
      fetchFollowList({ followListMode: "follower", profileID: "test-id" })
    );
    expect(result.payload).toEqual([{ name: "test", userId: "test-id" }]);
  });

  it("should return error message when getFollowing rejects", async () => {
    // mock getFollowing to throw an error, and expect it to reject.
    (getFollowing as jest.Mock).mockRejectedValueOnce(new Error("test error"));
    
    // expect error to be returned
    const result = await store.dispatch(
      fetchFollowList({ followListMode: "following", profileID: "test-id" })
    );
    expect(result.payload).toBe("test error");
  });

  it("should return error message when getFollowers rejects", async () => {
    // mock getFollowing to throw an error
    (getFollowers as jest.Mock).mockRejectedValueOnce(new Error("test error"));
    
    // expect error to be returned
    const result = await store.dispatch(
      fetchFollowList({ followListMode: "follower", profileID: "test-id" })
    );
    expect(result.payload).toBe("test error");
  });
});

describe("fetchFollowListBuilder", () => {
  let store: any;
  let state: ProfileState;
  // initial mockState profile
  mockState.profile = {
    userId: "test-id",
    name: "test-name",
    biography: "test-bio",
    email: "test-email",
    rankings: [],
    statistics: [],
    followerCount: 0,
    followingCount: 0,
    following: false,
  };

  // create a mock store with the mock state and thunk middleware 
  beforeEach(
    () =>
      (store = configureStore([thunk])({
        reducer: {
          profile: profileSlice.reducer,
        },
        middleware: [thunk],
      }))
  );

  it('should return following list when followListMode is "following"', async () => {
    // ensure that the reducer handles the fulfilled action correctly and returns the correct state
    const action = {
      payload: [{ name: "FollowListItem1", userId: "test-id" }],
      type: "profile/fetch-follow-list/fulfilled",
    };
    const state = profileSlice.reducer(mockState, action);
    expect(state.followList).toEqual(action.payload);
    expect(state.fetchFollowList.loading).toBe(false);
    expect(state.fetchFollowList.error).toBe("");
  });

  it("should handle fetchFollowList.pending", () => {
    // ensure that the reducer handles the pending action correctly and returns the correct state
    const action = {
      type: "profile/fetch-follow-list/pending",
    };
    const state = profileSlice.reducer(mockState, action);
    expect(state.fetchFollowList.loading).toBe(true);
    expect(state.fetchFollowList.error).toBe("");
  });

  it("should return error message when fetchFollowList rejects", async () => {
    // ensure that the reducer handles the rejected action correctly and returns the correct state
    const action = {
      payload: "An error has occured",
      type: "profile/fetch-follow-list/rejected",
    };
    const state = profileSlice.reducer(mockState, action);
    expect(state.followList).toEqual(undefined);
    expect(state.fetchFollowList.error).toBe("An error has occured");
    expect(state.fetchFollowList.loading).toBe(false);
  });
});

describe("fetchProfile", () => {
  let fetchProfileStore: any;
  // provide mock values for the complex functions

  const mockStatistics = [
    { name: "Streak", quantity: 5 },
    { name: "Wins", quantity: 43 },
    { name: "Check Ins", quantity: 100 },
  ];
  const mockGetStatistics = {
    checkIns: 100,
    wins: 43,
    streak: 5,
  };

  const mockUser = {
    id: "123",
    name: "test-name",
    biography: "test-bio",
    statistics: [],
    followerCount: 0,
    followingCount: 0,
    following: false,
  };

  const mockGetCount = {
    followingCount: 10,
    followerCount: 3,
  };

  jest.resetAllMocks();

  // create a mock store with the mock state and thunk middleware 
  beforeEach(
    () =>
      (fetchProfileStore = configureStore([thunk])({
        reducer: {
          profile: profileSlice.reducer,
        },
        middleware: [thunk],
      }))
  );

  it("should return profile when fetchProfileQuery resolves", async () => {
    // use mock values for complex functions
    (getStatistics as jest.Mock).mockResolvedValueOnce(mockGetStatistics);
    (getUserFromDatabasebyID as jest.Mock).mockResolvedValue(mockUser);
    (getCount as jest.Mock).mockResolvedValueOnce(mockGetCount);
    (isFollowingQuery as jest.Mock).mockResolvedValueOnce(true);

    const result = await fetchProfileStore.dispatch(fetchProfile("123"));
    // expect mock profile to be returned 
    expect(result.payload).toEqual({
      userId: "123",
      name: "test-name",
      biography: "test-bio",
      statistics: mockStatistics,
      followerCount: 3,
      followingCount: 10,
      following: true,
    });
    // expect action type to be fulfilled.
    expect(result.type).toBe("profile/fetch/fulfilled");
  });
});
