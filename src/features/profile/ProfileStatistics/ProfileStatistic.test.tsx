import React from "react";
import { render } from "@testing-library/react-native";
import ProfileStatistic from "./ProfileStatistic";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const statistic = {
  name: "Test",
  quantity: 10,
};

describe("ProfileStatistic", () => {
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
        <ProfileStatistic statistic={statistic} />
      </TestingWrapperNavigation>
    );
  });
   // test that the component renders correctly with snapshot testing

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
