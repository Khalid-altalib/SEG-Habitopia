import { getUserFromDatabase, getUserFromDatabasebyID } from "@app/util";
import { DataStore } from "aws-amplify";
import {
  isFollowingQuery,
  followUserQuery,
  getFollowing,
  getFollowers,
  getCount,
} from "./profileQueries";

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
    const followQuery = jest.fn(() => Promise.resolve([{ id: "1" }]));
    DataStore.query = followQuery;

    const checkIfFollowing = await isFollowingQuery("456", null);
    expect(checkIfFollowing).toEqual(true);
  });

  it("should return false if the user is not following the profile", async () => {
    const followQuery = jest.fn(() => Promise.resolve([]));
    DataStore.query = followQuery;

    const checkIfFollowing = await isFollowingQuery("456", null);
    expect(checkIfFollowing).toEqual(false);
  });
});

describe("followUserQuery", () => {
  it("should follow the user", async () => {
    (getUserFromDatabase as jest.Mock).mockResolvedValue({
      id: "123",
      name: "Test User",
    });
    (getUserFromDatabasebyID as jest.Mock).mockResolvedValue({
      id: "456",
      name: "Test User",
    });
    await followUserQuery("456", null);
    expect(DataStore.save).toHaveBeenCalledTimes(1);
  });
});

describe("getFollowing", () => {
  it("should return the list of people the user is following", async () => {
    (getUserFromDatabasebyID as jest.Mock).mockResolvedValue({
      id: "123",
      name: "Test User",
      Following: [{ id: "1" }, { id: "2" }, { id: "3" }],
    });

    const mockFollowList = [{ id: "1", name: "Test User 1" }];

    const mockFollowing = [{ userId: "1", name: "Test User 1" }];

    const followingQuery = jest.fn(() => Promise.resolve(mockFollowList));
    DataStore.query = followingQuery;

    const result = await getFollowing("123", []);
    expect(result).toEqual(mockFollowing);
  });
});

describe("getFollowers", () => {
  it("should return the list of people following the user", async () => {
    (getUserFromDatabasebyID as jest.Mock).mockResolvedValue({
      id: "123",
      name: "Test User",
      Followers: [{ id: "1" }, { id: "2" }, { id: "3" }],
    });

    const mockFollowList = [{ id: "1", name: "Test User 1" }];

    const ExpectedFollowList = [{ userId: "1", name: "Test User 1" }];

    const followersQuery = jest.fn(() => Promise.resolve(mockFollowList));
    DataStore.query = followersQuery;

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
    (DataStore.query as jest.Mock)
      .mockImplementationOnce(followingCount)
      .mockImplementationOnce(followerCount);

    const result = await getCount("testUserId");
    expect(result).toEqual({ followerCount: 1, followingCount: 2 });
  });
});
