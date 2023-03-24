import React from "react";
import { render } from "@testing-library/react-native";
import ProfileStatistics from "./ProfileStatistics";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

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

  const mockStore = configureStore([thunk])(mockState);
  let wrapper: any;
  beforeEach(() => {
    wrapper = render(
      <TestingWrapperNavigation store={mockStore}>
        <ProfileStatistics />
      </TestingWrapperNavigation>
    );
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
