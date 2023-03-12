import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import LeaderboardSettings from './LeaderboardSettings';
import thunk from 'redux-thunk';
import { NativeBaseProvider } from 'native-base';

jest.mock("../../challenges/challengesSlice"), () => ({
    fetchChallenges: jest.fn(),
});
jest.mock("../leaderboardSlice"), () => ({
    changeSetting: jest.fn(),
});

describe('LeaderboardSettings', () => {
    const mockState = {
        leaderboard: {
            timeInterval: 'Weekly',
            challengeType: 'Sleep',
          },
          challenges: {
            challenges: [],
          },
    }
    const mockStore = configureStore([thunk])(mockState);
    let wrapper: any;
    beforeEach(() => {
        wrapper = render(
            <NativeBaseProvider store={mockStore}>
                <LeaderboardSettings />
            </NativeBaseProvider>
        );
    });

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
