import { getUserFromDatabase, getUserFromDatabasebyID } from "@app/util";
import { DataStore } from "aws-amplify";
import {
  isFollowingQuery,
  followUserQuery,
  getFollowing,
  getFollowers,
  getCount,
} from "./profileQueries";

// Mock the util functions and DataStore query and save functions for testing
jest.mock("@app/util", () => ({
  getUserFromDatabase: jest.fn(),
  getUserFromDatabasebyID: jest.fn(),
}));

jest.mock("aws-amplify", () => ({
  DataStore: {
    query: jest.fn(),
    save: jest.fn(),
  },
}));

describe("isFollowingQuery", () => {
  // mock the getUserFromDatabase function to return an arbritrary user
  (getUserFromDatabase as jest.Mock).mockResolvedValue({
    id: "123",
    name: "Test User",
  });

  it("should return true if the user is following the profile", async () => {
    // mock the DataStore query function to return an arbritrary follow
    const followQuery = jest.fn(() => Promise.resolve([{ id: "1" }]));
    DataStore.query = followQuery;

    const checkIfFollowing = await isFollowingQuery("456", null);
    expect(checkIfFollowing).toEqual(true);
  });

  it("should return false if the user is not following the profile", async () => {
    // mock the DataStore query function to return an empty array
    const followQuery = jest.fn(() => Promise.resolve([]));
    DataStore.query = followQuery;

    const checkIfFollowing = await isFollowingQuery("456", null);
    expect(checkIfFollowing).toEqual(false);
  });
});

describe("followUserQuery", () => {
  // mock the getUserFromDatabase function to return an arbritrary user
  it("should follow the user", async () => {
    (getUserFromDatabase as jest.Mock).mockResolvedValue({
      id: "123",
      name: "Test User",
    });

    // mock the getUserFromDatabasebyID function to return a different arbritrary user
    (getUserFromDatabasebyID as jest.Mock).mockResolvedValue({
      id: "456",
      name: "Test User",
    });

    // thunkAPI is null as we have mocked the getUserFromDatabase function
    await followUserQuery("456", null);
    expect(DataStore.save).toHaveBeenCalledTimes(1);
  });
});

describe("getFollowing", () => {
  it("should return the list of people the user is following", async () => {
    // mock the getUserFromDatabasebyID function to return an arbritrary user with a following list
    (getUserFromDatabasebyID as jest.Mock).mockResolvedValue({
      id: "123",
      name: "Test User",
      Following: [{ id: "1" }, { id: "2" }, { id: "3" }],
    });
    // mock the DataStore query function to return an arbritrary follow
    const mockFollowList = [{ id: "1", name: "Test User 1" }];
    // expect the result to find the follow and return the userId and name
    const ExpectedFollowingList = [{ userId: "1", name: "Test User 1" }];

    const followingQuery = jest.fn(() => Promise.resolve(mockFollowList));
    DataStore.query = followingQuery;

    // pass in the empty array of who is following and expect the result to populate this array
    const result = await getFollowing("123", []);
    expect(result).toEqual(ExpectedFollowingList);
  });
});

describe("getFollowers", () => {
  it("should return the list of people following the user", async () => {
    // mock the getUserFromDatabasebyID function to return an arbritrary user with a followers list
    (getUserFromDatabasebyID as jest.Mock).mockResolvedValue({
      id: "123",
      name: "Test User",
      Followers: [{ id: "1" }, { id: "2" }, { id: "3" }],
    });

    const mockFollowList = [{ id: "1", name: "Test User 1" }];

    const ExpectedFollowList = [{ userId: "1", name: "Test User 1" }];
    // mock the DataStore query function to return an arbritrary followList
    const followersQuery = jest.fn(() => Promise.resolve(mockFollowList));
    DataStore.query = followersQuery;

    // pass in the empty array of who is followed, and expect the result to populate this array
    const result = await getFollowers("123", []);
    expect(result).toEqual(ExpectedFollowList);
  });
});

describe("getCount", () => {
  it("should return the number of followers and following", async () => {
    const followingCount = jest.fn(() =>
      Promise.resolve([{ id: "1" }, { id: "2" }])
    );
    const followerCount = jest.fn(() => Promise.resolve([{ id: "1" }]));
    // the first time the query function is called, return the followingCount and the second time return the followerCount
    (DataStore.query as jest.Mock)
      .mockImplementationOnce(followingCount)
      .mockImplementationOnce(followerCount);

    const result = await getCount("testUserId");
    expect(result).toEqual({ followerCount: 1, followingCount: 2 });
  });
});
