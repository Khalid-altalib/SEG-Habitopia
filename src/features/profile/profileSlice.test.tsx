import configureStore, { MockStore } from "redux-mock-store";
import thunk from "redux-thunk";
import {ProfileState, fetchProfile, profileSlice} from "./profileSlice";
import { getStatistics } from "./statisticsQueries";
import { getUserFromDatabasebyID } from "../../app/util";
import { applyMiddleware } from "redux";

jest.mock("./statisticsQueries", () => ({
      getStatistics: jest.fn(),
  }));

jest.mock("../../app/util", () => ({
    getUserFromDatabasebyID: jest.fn(),
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

// export const getStatistics = async (userId: string) => {
//   const checkIns = await getCheckIns(userId);
//   const wins = await getWins(userId);
//   const streak = await checkStreak(userId);
//   return { checkIns, wins, streak };
// }


describe("profileSlice", () => {
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
    followerCount: 0,
    followingCount: 0,
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

  describe("fetchProfile", () => {   
    
    it ("should handle fetchProfile correctly", async () => {

      const expectedActions = [
        { type: "profile/fetch/pending" },
        { type: "profile/fetch/fulfilled", payload: mockProfile }
      ];
      
      (getUserFromDatabasebyID as jest.Mock).mockResolvedValue(mockUser);
      (getStatistics as jest.Mock).mockResolvedValue(mockGetStatistics);

      await store.dispatch(fetchProfile("123"));

      expect(getUserFromDatabasebyID).toHaveBeenCalledWith("123");
      expect(getStatistics).toHaveBeenCalledWith("123");


      expect(store.getActions()[0].type).toEqual(expectedActions[0].type);
      expect(store.getActions()[1].type).toEqual(expectedActions[1].type);

      expect(store.getActions()[1].payload).toEqual(expectedActions[1].payload); // returns correct user?
    });


    it ("should handle fetchProfile error correctly", async () => {
      const error = "Error fetching profile";
      (getUserFromDatabasebyID as jest.Mock).mockRejectedValue(
        new Error(error)
      );
  
      await expect(store.dispatch(fetchProfile("123"))).resolves.toMatchObject({
        error: expect.objectContaining({ message: "Rejected" }),
      });
    });


    it ("should handle fetchProfile.fulfilled", async () => {
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
      const expectedAction = {
        type: "profile/fetch/rejected",
        payload: "Error fetching profile",
      };
  
      const state = profileSlice.reducer(mockState, expectedAction);
      expect(state.fetchProfile.loading).toEqual(false);
      expect(state.fetchProfile.error).toEqual("Error fetching profile");
      expect(state.profile).toEqual(undefined);
    });

   }
   
  );

});
