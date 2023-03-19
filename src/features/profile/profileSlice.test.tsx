import configureStore, { MockStore } from "redux-mock-store";
import thunk from "redux-thunk";
import {ProfileState, fetchProfile, profileSlice, followUser} from "./profileSlice";
import { getStatistics } from "./statisticsQueries";
import { getUserFromDatabasebyID } from "../../app/util";
import { applyMiddleware } from "redux";
import {followUserQuery, getFollowers, getFollowing} from "./profileQueries";

jest.mock("./statisticsQueries", () => ({
      getStatistics: jest.fn(),
  }));

jest.mock("../../app/util", () => ({
    getUserFromDatabasebyID: jest.fn(),
}));

jest.mock('./profileQueries', () => ({
    followUserQuery: jest.fn( () => Promise.resolve("Test")),
    getFollowers: jest.fn(),
    getFollowing: jest.fn(),
}));



// const mockState: ProfileState = {
//   profile: undefined,
//   followList: undefined,
//   fetchProfile: {
//     loading: false,
//     error: "",
//   },
//   fetchFollowList: {
//     loading: false,
//     error: "",
//   },
//   followUser: {
//     loading: false,
//     error: "",
//   },
// };


// describe("profileSlice", () => {
//   let store: any;

//   const mockGetStatistics = {
//     checkIns: 100,
//     wins: 43,
//     streak: 5,
//   };

//   const mockStatistics =  [
//     { name: "Streak", quantity: 5 },
//     { name: "Wins", quantity: 43}, 
//     { name: "Check Ins", quantity: 100 },
//   ];


//   const mockProfile = {
//     userId : "123",
//     name: "Test User",
//     biography: "This is a test biography",
//     followerCount: 0,
//     followingCount: 0,
//     following: false,
//     statistics: mockStatistics,
//   };

//   const mockUser = {
//     id: "123",
//     name: "Test User",
//     biography: "This is a test biography",
//   };
    
//   beforeEach(() => 
//     store = configureStore([thunk])({
//       reducer:
//       {
//         profile: profileSlice.reducer,
//       },
//       middleware: [thunk],
//     })
//   );
   


//   afterEach(() => {
//     jest.resetAllMocks();
//   });

//   describe("fetchProfile", () => {   
    
//     it ("should handle fetchProfile correctly", async () => {

//       const expectedActions = [
//         { type: "profile/fetch/pending" },
//         { type: "profile/fetch/fulfilled", payload: mockProfile }
//       ];
      
//       (getUserFromDatabasebyID as jest.Mock).mockResolvedValue(mockUser);
//       (getStatistics as jest.Mock).mockResolvedValue(mockGetStatistics);

//       await store.dispatch(fetchProfile("123"));

//       expect(getUserFromDatabasebyID).toHaveBeenCalledWith("123");
//       expect(getStatistics).toHaveBeenCalledWith("123");


//       expect(store.getActions()[0].type).toEqual(expectedActions[0].type);
//       expect(store.getActions()[1].type).toEqual(expectedActions[1].type);

//       expect(store.getActions()[1].payload).toEqual(expectedActions[1].payload); // returns correct user?
//     });

    
//     it ("should handle fetchProfile error correctly", async () => {
//       const error = "Error fetching profile";
//       // if getUserFromDatabasebyID throws an error, fetchProfile should return an error
//       (getUserFromDatabasebyID as jest.Mock).mockRejectedValue(
//         new Error(error)
//       );
  
//       await expect(store.dispatch(fetchProfile("123"))).resolves.toMatchObject({
//         error: expect.objectContaining({ message: "Rejected" }),
//       });
//     });


//     it ("should handle fetchProfile.fulfilled", async () => {
//       // ensure that the reducer handles the fulfilled action correctly and returns the correct state
//       const expectedAction = {
//         type: "profile/fetch/fulfilled",
//         payload: mockProfile,
//       };

//       const state = profileSlice.reducer(mockState, expectedAction);
//       expect(state.fetchProfile.loading).toEqual(false);
//       expect(state.fetchProfile.error).toEqual("");
//       expect(state.profile).toEqual(mockProfile);
//     });
  

//     it("should handle fetchProfile.pending", async () => {
//       const expectedAction = {
//         type: "profile/fetch/pending",
//       };

//       const state = profileSlice.reducer(mockState, expectedAction);
//       expect(state.fetchProfile.loading).toEqual(true);
//       expect(state.fetchProfile.error).toEqual("");
//       expect(state.profile).toEqual(undefined);
//     });



//     it ("should handle fetchProfile.rejected", async () => {
//       // ensure that the reducer handles the rejected action correctly and returns the correct state
//       const expectedAction = {
//         type: "profile/fetch/rejected",
//         payload: "Error fetching profile",
//       };
  
//       const state = profileSlice.reducer(mockState, expectedAction);
//       expect(state.fetchProfile.loading).toEqual(false);
//       expect(state.fetchProfile.error).toEqual("Error fetching profile");
//       expect(state.profile).toEqual(undefined);
//     });

//    }
   
//   );

// });


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
