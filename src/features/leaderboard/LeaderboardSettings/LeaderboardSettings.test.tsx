import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import LeaderboardSettings from "./LeaderboardSettings";
import configureStore from "redux-mock-store";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";

const mockStore = configureStore([]);

describe("LeaderboardSettings", () => {
  let store: any;
  let component: any;

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
    component = (
      <TestingWrapperNavigation store={store}>
        <LeaderboardSettings />
      </TestingWrapperNavigation>
    );
  });

  it("renders correctly", () => {
    const { getByTestId } = render(component);
    expect(getByTestId("leaderboardSettings")).toBeDefined();
  });
});