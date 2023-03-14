import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import LeaderboardSettings from "./LeaderboardSettings";
import configureStore from "redux-mock-store";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";

const mockStore = configureStore([]);
jest.mock("@features/challenges/challengesSlice", () => ({
  fetchChallenges: jest.fn(),
}));
describe("LeaderboardSettings", () => {
  let store: any;
  let wrapper: any;

  beforeEach(() => {
    store = mockStore({
      leaderboard: {
        timeInterval: "Weekly",
      },
      challenges: {
        challenges: [
          { name: "Challenge 1" },
          { name: "Challenge 2" },
          { name: "Challenge 3" },
        ],
        fetchChallenges: {
          loading: false,
          error: null,
        },
      },
    });
    wrapper = (
      <TestingWrapperNavigation store={store}>
        <LeaderboardSettings />
      </TestingWrapperNavigation>
    );
  });

  it("renders leaderboardSettings", () => {
    const { getByTestId } = render(wrapper);
    expect(getByTestId("leaderboardSettings")).toBeDefined();
  });

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
