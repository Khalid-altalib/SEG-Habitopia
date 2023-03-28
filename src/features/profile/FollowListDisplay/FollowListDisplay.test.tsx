import { useDispatch, useSelector } from "@app/hooks";
import { useNavigation } from "@react-navigation/native";
import {render, fireEvent } from '@testing-library/react-native';
import { Box, Center, theme } from "native-base";
import React from "react";
import TestingWrapperNavigation from '@app/testingWrapperWithNavigation';
import configureStore from "redux-mock-store";
import FollowListDisplay from "./FollowListDisplay";
import thunk from "redux-thunk";

const mockedDispatch = jest.fn();
const mockedUseSelector = useSelector as jest.Mock;
const mockedUseNavigation = useNavigation as jest.Mock;

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
      it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
      });

      it("should push navigation to followList when handlePress is called", () => {
        const followListButton = wrapper.getByTestId('follow-list-display');
        fireEvent.press(followListButton);
        expect(mockedUseNavigation().push).toHaveBeenCalledWith("FollowList", {followListMode: "follower"});
        expect(mockedDispatch).toHaveBeenCalled();
        expect(wrapper).toMatchSnapshot();
      });
});