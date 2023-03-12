import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import LeaderboardCards from "./LeaderboardCards";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { fetchLeaderboard } from "../leaderboardSlice";

describe("LeaderboardLayout", () => {
  jest.mock("../leaderboardSlice", () => ({
    fetchLeaderboard: jest.fn(),
  }));
  const mockState = {
    leaderboard: {
      loading: false,
      error: null,
      challengeType: "Sleep",
      timeInterval: "Weekly",
      entries: [
        { name: "Alice", checkins: 4 },
        { name: "Bob", checkins: 3 },
        { name: "Charlie", checkins: 2 },
      ],
    },
  };
  const mockStore = configureStore([thunk])(mockState);
  let wrapper: any;

  beforeEach(() => {
    wrapper = render(
      <TestingWrapperNavigation store={mockStore}>
        <LeaderboardCards />
      </TestingWrapperNavigation>
    );
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
