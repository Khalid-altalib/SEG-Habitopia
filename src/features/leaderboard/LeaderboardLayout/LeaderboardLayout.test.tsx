import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native";
import LeaderboardLayout from "./LeaderboardLayout";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { ScrollView } from "react-native";
import { fetchLeaderboard } from "../leaderboardSlice";
import { useDispatch } from "../../../app/hooks";

jest.mock("../leaderboardSlice", () => ({
  fetchLeaderboard: jest.fn(),
}));

jest.mock("../../../app/hooks", () => ({
  useDispatch: jest.fn(),
}));

describe("LeaderboardLayout", () => {
  const mockState = {
    leaderboard: {
      leaderboard: [],
      leaderboardLoading: false,
      leaderboardError: null,
    },
  };
  const mockStore = configureStore([thunk])(mockState);
  let wrapper: any;
  let mockDispatch: any;

  beforeEach(() => {
    mockDispatch = jest.fn(() => Promise.resolve());
    useDispatch.mockReturnValue(mockDispatch);
    wrapper = render(
      <TestingWrapperNavigation store={mockStore}>
        <LeaderboardLayout>
          <div>Test</div>
        </LeaderboardLayout>
      </TestingWrapperNavigation>
    );
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should fetch leaderboard when scroll to bottom", async () => {
    const scrollView = wrapper.getByTestId("scroll-view");
    await act(async () => {
      await fireEvent.scroll(scrollView, {
        nativeEvent: {
          layoutMeasurement: { height: 100 },
          contentOffset: { y: 150 },
          contentSize: { height: 200 },
        },
      });
    });
    expect(mockDispatch).toHaveBeenCalledWith(fetchLeaderboard());
  });

  it("should not fetch leaderboard when not scrolled to bottom", async () => {
    const scrollView = wrapper.getByTestId("scroll-view");
    await fireEvent.scroll(scrollView, {
      nativeEvent: {
        layoutMeasurement: { height: 100 },
        contentOffset: { y: 50 },
        contentSize: { height: 200 },
      },
    });
    expect(mockDispatch).not.toHaveBeenCalledWith(fetchLeaderboard());
  });
});
