import React from "react";
import { render } from "@testing-library/react-native";
import ProfileStatistics from "./ProfileStatistics";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

// Mock the useSelector hook and return arbitrary profile data with some statistics
jest.mock("@app/hooks", () => ({
  useSelector: jest.fn(() => ({
    profile: {
      statistics: [
        { name: "Followers", quantity: 100 },
        { name: "Following", quantity: 50 },
      ],
    },
  })),
}));

describe("ProfileStatistics", () => {
  const mockState = {
    profile: {
      profile: {
        userId: "123",
        name: "Test User",
        followerCount: 10,
        followingCount: 20,
        biography: "Test Biography",
      },
    },
  };
  // Mock the store and wrap the component in the TestingWrapperNavigation for testing

  const mockStore = configureStore([thunk])(mockState);
  let wrapper: any;
  beforeEach(() => {
    wrapper = render(
      <TestingWrapperNavigation store={mockStore}>
        <ProfileStatistics />
      </TestingWrapperNavigation>
    );
  });
  // test that the component renders correctly with snapshot testing
  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
