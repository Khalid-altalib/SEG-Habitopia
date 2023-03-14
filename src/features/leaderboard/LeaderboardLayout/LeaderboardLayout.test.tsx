import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import LeaderboardLayout from "./LeaderboardLayout";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { ScrollView } from "react-native";
import { fetchLeaderboard } from "../leaderboardSlice";
import { useDispatch } from "react-redux";

jest.mock("../leaderboardSlice", () => ({
  fetchLeaderboard: jest.fn(),
}));

describe("LeaderboardLayout", () => {
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
        <LeaderboardLayout>
          <div data-testid="child">Child component</div>
        </LeaderboardLayout>
      </TestingWrapperNavigation>
    );
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should not fetch leaderboard when scroll to top", () => {
    const scrollView = wrapper.getByTestId("scrollView");
    fireEvent.scroll(scrollView, { nativeEvent: { contentOffset: { y: -100 } } });
    expect(fetchLeaderboard).not.toHaveBeenCalled();
  });

  it("should fetch leaderboard when scroll to bottom", () => {
    const scrollView = wrapper.getByTestId("scrollView");
    fireEvent.scroll(scrollView, { nativeEvent: { contentOffset: { y: 100 } } });
    expect(fetchLeaderboard).toHaveBeenCalled();
  });
});
