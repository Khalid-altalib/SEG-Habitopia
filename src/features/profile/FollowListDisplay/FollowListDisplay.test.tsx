import { useDispatch, useSelector } from "@app/hooks";
import { useNavigation } from "@react-navigation/native";
import {render, fireEvent } from '@testing-library/react-native';
import { Box, Center, theme } from "native-base";
import React from "react";
import TestingWrapperNavigation from '@app/testingWrapperWithNavigation';
import configureStore from "redux-mock-store";
import FollowListDisplay from "./FollowListDisplay";
import thunk from "redux-thunk";

// Mock the useDispatch and useSelector hooks and useNavigation 
const mockedDispatch = jest.fn();
const mockedUseSelector = useSelector as jest.Mock;
const mockedUseNavigation = useNavigation as jest.Mock;

//return arbitrary profile data
mockedUseSelector.mockReturnValue({
  profile: {
    userId: "123",
  },
});

mockedUseNavigation.mockReturnValue({
  push: jest.fn(),
});

jest.mock('../../../app/hooks', () => ({
    useSelector: jest.fn(),
    useDispatch: () => mockedDispatch,
}));

jest.mock('@react-navigation/native', () => ({
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: jest.fn(),
}));


describe('FollowListDisplay', () => {

    const mockState = {
        profile: {
          profile: {
            userId: '123',
            name: 'Test User',
            followerCount: 10,
            followingCount: 20,
            biography: 'Test Biography',
          },
        },
      };
     // Mock the store and wrap the component in the TestingWrapperNavigation for testing
      const mockStore = configureStore([thunk])(mockState);
      let wrapper: any;
      beforeEach(() => {
        (useSelector as jest.Mock).mockImplementation((selector) => selector(mockStore.getState()));
        wrapper = render(
          <TestingWrapperNavigation store={mockStore}>
            <FollowListDisplay followListMode={"follower"} followCount={10} />
          </TestingWrapperNavigation>
        );
      });
      // test that the component renders correctly with snapshot testing
      it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
      });
      // test that the navigation is pushed to the FollowList screen when the followListDisplay button is pressed
      it("should push navigation to followList when handlePress is called", () => {
        const followListButton = wrapper.getByTestId('follow-list-display');
        fireEvent.press(followListButton);
        expect(mockedUseNavigation().push).toHaveBeenCalledWith("FollowList", {followListMode: "follower"});
        expect(mockedDispatch).toHaveBeenCalled();
        expect(wrapper).toMatchSnapshot();
      });
});