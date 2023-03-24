import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import LeaderboardCard, { Props } from "./LeaderboardCard";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("LeaderboardCard", () => {
  const defaultProps: Props = {
    name: "Alice",
    checkins: 4,
    place: 0,
    userId: "aliceID",
  };
  const mockState = {
    leaderboard: {
      leaderboard: [],
      loading: false,
      error: null,
    },
  };
  const mockStore = configureStore([thunk])(mockState);
  let wrapper: any;

  beforeEach(() => {
    wrapper = render(
      <TestingWrapperNavigation store={mockStore}>
        <LeaderboardCard {...defaultProps} />
      </TestingWrapperNavigation>
    );
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("renders the name of the user", () => {
    expect(wrapper.getByText("Alice")).toBeDefined();
  });

  it("renders the correct place", () => {
    expect(wrapper.getByText("#1")).toBeDefined();
  });

  it("renders the correct number of checkins", () => {
    expect(wrapper.getByText("4 Checkins")).toBeDefined();
  });

  it("renders the correct color", () => {
    expect(wrapper.getByText("#1").props.style[0].color).toEqual("#0f172a");
    expect(wrapper.getByText("Alice").props.style[0].color).toEqual("#0f172a");
    expect(wrapper.getByText("4 Checkins").props.style[0].color).toEqual(
      "#0f172a"
    );
  });

  it("navigates to the profile screen when the user is pressed", async () => {
    fireEvent.press(wrapper.getByTestId("leaderboard-card"));
    const profileScreen = await waitFor(() =>
      wrapper.getByTestId("profile-screen")
    );
    expect(profileScreen).toBeDefined();
  });
});
