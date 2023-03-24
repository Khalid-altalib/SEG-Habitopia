import configureStore, { MockStore } from "redux-mock-store";
import thunk from "redux-thunk";
import {ProfileState, fetchProfile, profileSlice, followUser, fetchFollowList} from "./profileSlice";
import { getStatistics } from "./statisticsQueries";
import { getUserFromDatabasebyID } from "../../app/util";
import { applyMiddleware } from "redux";
import {followUserQuery, getFollowers, getFollowing, getCount, isFollowingQuery} from "./profileQueries";

jest.mock("./statisticsQueries", () => ({
      getStatistics: jest.fn(),
  }));

jest.mock("../../app/util", () => ({
    getUserFromDatabasebyID: jest.fn(),
}));

jest.mock('./profileQueries', () => ({
    followUserQuery: jest.fn( () => Promise.resolve("Test")),
    getCount: jest.fn(),
    getFollowers: jest.fn(),
    getFollowing: jest.fn(),
    isFollowingQuery: jest.fn(),
}));



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

  const mockGetStatistics = {
    checkIns: 100,
    wins: 43,
    streak: 5,
  };

  const mockStatistics =  [
    { name: "Streak", quantity: 5 },
    { name: "Wins", quantity: 43}, 
    { name: "Check Ins", quantity: 100 },
  ];


  const mockProfile = {
    userId : "123",
    name: "Test User",
    biography: "This is a test biography",
    followerCount: undefined,
    followingCount: undefined,
    following: false,
    statistics: mockStatistics,
  };

  const mockUser = {
    id: "123",
    name: "Test User",
    biography: "This is a test biography",
  };
    
  beforeEach(() => 
    store = configureStore([thunk])({
      reducer:
      {
        profile: profileSlice.reducer,
      },
      middleware: [thunk],
    })
  );
   


  afterEach(() => {
    jest.resetAllMocks();
  });

    
    it ("should handle fetchProfile error correctly", async () => {
      const error = "Error fetching profile";
      // if getUserFromDatabasebyID throws an error, fetchProfile should return an error
      (getUserFromDatabasebyID as jest.Mock).mockRejectedValue(
        new Error(error)
      );
  
      await expect(store.dispatch(fetchProfile("123"))).resolves.toMatchObject({
        error: expect.objectContaining({ message: "Rejected" }),
      });
    });


    it ("should handle fetchProfile.fulfilled", async () => {
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
      const expectedAction = {
        type: "profile/fetch/pending",
      };

      const state = profileSlice.reducer(mockState, expectedAction);
      expect(state.fetchProfile.loading).toEqual(true);
      expect(state.fetchProfile.error).toEqual("");
      expect(state.profile).toEqual(undefined);
    });



    it ("should handle fetchProfile.rejected", async () => {
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


describe('followUser', () => {
  let store : any;

  beforeEach(() => 
    store = configureStore([thunk])({
      reducer:
      {
        profile: profileSlice.reducer,
      },
      middleware: [thunk],
    })
  );

  // describe('followUser.fulfilled', () => {
  let state: ProfileState;
  beforeEach(() => {
    mockState.profile = {
        userId: 'test-id',
        name: 'test-name',
        biography: 'test-bio',
        email: 'test-email',
        rankings: [],
        statistics: [],
        followerCount: 0,
        followingCount: 0,
        following: false,    
    };
  });

  it('should set profile.following to action.payload', () => {
    const action = {
      payload: true,
      type: 'profile/follow/fulfilled',
    };
    const state = profileSlice.reducer(mockState, action);
    expect(state.profile?.following).toBe(action.payload);
  });

  it('should increment followerCount if action.payload is true', () => {
    
    const action = {
      payload: true,
      type: 'profile/follow/fulfilled',
    };
    const state = profileSlice.reducer(mockState, action);
    expect(state.profile?.followerCount).toBe(1);
  });
  
  it('should decrement followerCount if action.payload is false', () => {
    mockState.profile.followerCount = 1;
    const action = {
      payload: false,
      type: 'profile/follow/fulfilled',
    };
    const state = profileSlice.reducer(mockState, action);
    expect(state.profile?.followerCount).toBe(0);
  });

  it ('should handle followUser.pending', () => {
    const action = {
      type: 'profile/follow/pending',
    };
    const state = profileSlice.reducer(mockState, action);
    expect(state.followUser.loading).toBe(true);
    expect(state.followUser.error).toBe('');
  });

  it('should return true when followUserQuery resolves', async () => {
    
    (followUserQuery as jest.Mock).mockResolvedValueOnce(true);
    const result = await store.dispatch(followUser('test-id'));
    expect(result.payload).toBe(true);
    expect(result.type).toBe('profile/follow/fulfilled');
  });

  it('should return error message when followUserQuery rejects', async () => { 
    (followUserQuery as jest.Mock).mockRejectedValueOnce(new Error('test error'));
    const result = await store.dispatch(followUser('test-id'));
    expect(result.payload).toBe('test error');
  });

});



describe("fetchFollowList", () => {
    let store : any;

  beforeEach(() => 
    store = configureStore([thunk])({
      reducer:
      {
        profile: profileSlice.reducer,
      },
      middleware: [thunk],
    })
  );
    it('should return following list when followListMode is "following"', async () => {
      expect(true).toBe(true);
      (getFollowing as jest.Mock).mockResolvedValueOnce([{ name: 'test', userId: 'test-id' }]);
      const result = await store.dispatch(fetchFollowList({ followListMode: 'following', profileID: 'test-id' }));
      expect(result.payload).toEqual([{ name: 'test', userId: 'test-id' }]);
    });
  
    it('should return followers list when followListMode is "follower"', async () => {
      (getFollowers as jest.Mock).mockResolvedValueOnce([{ name: 'test', userId: 'test-id' }]);
      const result = await store.dispatch(fetchFollowList({ followListMode: 'follower', profileID: 'test-id' }));
      expect(result.payload).toEqual([{ name: 'test', userId: 'test-id' }]);
    });
  
    it('should return error message when getFollowing rejects', async () => {
      (getFollowing as jest.Mock).mockRejectedValueOnce(new Error('test error'));
      const result = await store.dispatch(fetchFollowList({ followListMode: 'following', profileID: 'test-id' }));
      expect(result.payload).toBe('test error');
    });
  
    it('should return error message when getFollowers rejects', async () => {
      (getFollowers as jest.Mock).mockRejectedValueOnce(new Error('test error'));
      const result = await store.dispatch(fetchFollowList({ followListMode: 'follower', profileID: 'test-id' }));
      expect(result.payload).toBe('test error');
    });
});

describe("fetchFollowListBuilder", () => {
  let store : any;
  let state: ProfileState;
  
  mockState.profile = {
    userId: 'test-id',
    name: 'test-name',
    biography: 'test-bio',
    email: 'test-email',
    rankings: [],
    statistics: [],
    followerCount: 0,
    followingCount: 0,
    following: false,    
};

  beforeEach(() =>

    store = configureStore([thunk])({
      reducer:
      {
        profile: profileSlice.reducer,
      },
      middleware: [thunk],
    })
   
  );

  it('should return following list when followListMode is "following"', async () => {
    const action = {
      payload: [{ name: 'FollowListItem1', userId: 'test-id' }],
      type: 'profile/fetch-follow-list/fulfilled',
    };
    const state = profileSlice.reducer(mockState, action);
    expect(state.followList).toEqual(action.payload);
    expect(state.fetchFollowList.loading).toBe(false);
    expect(state.fetchFollowList.error).toBe('');
  });
  it ('should handle fetchFollowList.pending', () => {
    const action = {
      type: 'profile/fetch-follow-list/pending',
    };
    const state = profileSlice.reducer(mockState, action);
    expect(state.fetchFollowList.loading).toBe(true);
    expect(state.fetchFollowList.error).toBe('');
  }
  );
  it('should return error message when fetchFollowList rejects', async () => {
    const action = {
      payload: 'An error has occured',
      type: 'profile/fetch-follow-list/rejected',
    };
    const state = profileSlice.reducer(mockState, action);
    expect(state.followList).toEqual(undefined);
    expect(state.fetchFollowList.error).toBe("An error has occured");
    expect(state.fetchFollowList.loading).toBe(false);
  });

  

});

describe("fetchProfile", () => {
  let fetchProfileStore : any;

  const mockStatistics =  [
    { name: "Streak", quantity: 5 },
    { name: "Wins", quantity: 43}, 
    { name: "Check Ins", quantity: 100 },
  ];
  const mockGetStatistics = {
    checkIns: 100,
    wins: 43,
    streak: 5,
  };

  const mockUser = {
    id: '123',
    name: 'test-name',
    biography: 'test-bio',
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


  beforeEach(() => 
  fetchProfileStore = configureStore([thunk])({
      reducer:
      {
        profile: profileSlice.reducer,
      },
      middleware: [thunk],
    })
  );

  it('should return profile when fetchProfileQuery resolves', async () => {
    
    (getStatistics as jest.Mock).mockResolvedValueOnce(mockGetStatistics); 
    (getUserFromDatabasebyID as jest.Mock).mockResolvedValue(mockUser);
    (getCount as jest.Mock).mockResolvedValueOnce(mockGetCount);
    (isFollowingQuery as jest.Mock).mockResolvedValueOnce(true);

    const result = await fetchProfileStore.dispatch(fetchProfile('123'));

    expect(result.payload).toEqual({
      userId: '123',
      name: 'test-name',
      biography: 'test-bio',
      statistics: mockStatistics,
      followerCount: 3,
      followingCount: 10,
      following: true,

    });
    expect(result.type).toBe('profile/fetch/fulfilled');


  });
});
