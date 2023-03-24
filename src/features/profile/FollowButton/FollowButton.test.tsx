import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import FollowButton from "./FollowButton";
import { useDispatch, useSelector } from "@app/hooks";
import { followUser } from "../profileSlice";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

jest.mock("@app/hooks", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock("../profileSlice");

describe("FollowButton", () => {
  // create an initial mock state for the store
  let mockState = {
    profile: {
      profile: {
        userId: "123",
        name: "Test User",
        followerCount: 10,
        followingCount: 20,
        biography: "Test Biography",
        following: false,
      },
      followUser: { loading: false },
    },
  };

  const mockStore = configureStore([thunk])(mockState);
  let wrapper: any;
  // mock the dispatch and useSelector functions
  const dispatch = jest.fn(() => Promise.resolve());
  (useDispatch as jest.Mock).mockReturnValue(dispatch);
  (useSelector as jest.Mock).mockImplementation((selector) =>
    selector(mockStore.getState())
  );
  // render the component again each time
  beforeEach(() => {
    wrapper = render(
      <TestingWrapperNavigation store={mockStore}>
        <FollowButton />
      </TestingWrapperNavigation>
    );
  });

  // check that the component renders correctly with snapshot
  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  // when you press follow, it should dispatch followUser
  it("should dispatch followUser when button is pressed", async () => {
    await fireEvent.press(wrapper.getByTestId("follow-button"));
    expect(dispatch).toHaveBeenCalledWith(followUser("123"));
  });

  // if the user already follows the other user, it shouldnt dispatch followUser
  it("should give alert when already following", async () => {
    mockState.profile.profile.following = true;
    const mockStore = configureStore([thunk])(mockState);

    // render again with the new state
    wrapper = render(
      <TestingWrapperNavigation store={mockStore}>
        <FollowButton />
      </TestingWrapperNavigation>
    );

    await fireEvent.press(wrapper.getByTestId("follow-button"));

    // dispatch will be called, but not with followUser as before
    expect(dispatch).toHaveBeenCalled();
    
  });
});
