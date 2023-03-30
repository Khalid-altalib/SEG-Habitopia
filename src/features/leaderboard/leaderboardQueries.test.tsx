import {
  fetchLeaderboardData,
  fetchLeaderboardByUserIDAndChallengeType,
} from "./leaderboardQueries";

/**
 * This file contains tests for the leaderboardQueries.tsx file.
 * This does not cover backend queries, subscriptions or mutations.
 */

jest.mock("aws-amplify", () => ({
  DataStore: {
    query: jest.fn(),
    observe: jest.fn().mockReturnValue({ subscribe: jest.fn() }),
  },
  Auth: {
    currentAuthenticatedUser: jest.fn(),
  },
}));

jest.mock("@app/util", () => ({
  getUserFromDatabasebyID: jest.fn(() =>
    Promise.resolve({ name: "Test User" })
  ),
}));

describe("leaderboardQueries", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch leaderboard data for a given challenge type and page", async () => {
    const queryMock = jest.fn(() => {
      return Promise.resolve([
        {
          leaderboardUserId: "123",
          numberOfCheckins: 5,
        },
        {
          leaderboardUserId: "456",
          numberOfCheckins: 3,
        },
      ]);
    });
    const { DataStore } = require("aws-amplify");
    DataStore.query.mockImplementation(queryMock);
    const result = await fetchLeaderboardData("testChallengeType", 1);
    expect(result).toEqual([
      {
        userId: "123",
        checkins: 5,
      },
      {
        userId: "456",
        checkins: 3,
      },
    ]);
    expect(queryMock).toHaveBeenCalledWith(
      expect.anything(),
      expect.any(Function),
      expect.objectContaining({
        page: 1,
        limit: 10,
        sort: expect.any(Function),
      })
    );
  });

  it("should fetch leaderboard entry for a given user and challenge type", async () => {
    const queryMock = jest.fn(() => {
      return Promise.resolve([
        {
          leaderboardUserId: "123",
          numberOfCheckins: 5,
        },
      ]);
    });
    const { DataStore } = require("aws-amplify");
    DataStore.query.mockImplementation(queryMock);
    const result = await fetchLeaderboardByUserIDAndChallengeType(
      "123",
      "testChallengeType"
    );
    expect(result).toEqual({
      leaderboardUserId: "123",
      numberOfCheckins: 5,
    });
    expect(queryMock).toHaveBeenCalledWith(
      expect.anything(),
      expect.any(Function)
    );
  });
});
