import React from "react";
import { render } from "@testing-library/react-native";
import { useSelector } from "../../../app/hooks";
import ProfileHeader from "./ProfileHeader";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

jest.mock("../../../app/hooks", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe("ProfileHeader", () => {
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
    (useSelector as jest.Mock).mockImplementation((selector) =>
      selector(mockStore.getState())
    );
    wrapper = render(
      <TestingWrapperNavigation store={mockStore}>
        <ProfileHeader isLocalUserProfile={true} />
      </TestingWrapperNavigation>
    );
  });
  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should push navigation to Settings when Settings button is pressed", () => {
    const settingsButton = wrapper.getByTestId("settings-button");
    settingsButton.props.onPress();
    expect(wrapper).toMatchSnapshot();
  });
});
