import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import LeaderboardSettings from './LeaderboardSettings';
import thunk from 'redux-thunk';
import { NativeBaseProvider } from 'native-base';
import TestingWrapper from '@app/testingWrapper';
import TestingWrapperNavigation from '@app/testingWrapperWithNavigation';

// jest.mock("../../challenges/challengesSlice"), () => ({
//     fetchChallenges: jest.fn(),
// });
// jest.mock("../leaderboardSlice"), () => ({
//     changeSetting: jest.fn(),
// });

describe('LeaderboardSettings', () => {
    const mockState = {
        leaderboard: {
          loading: false,
          error: null,
          challengeType: 'Sleep',
          timeInterval: 'Weekly',
          entries: [
            { name: 'Alice', checkins: 4 },
            { name: 'Bob', checkins: 3 },
            { name: 'Charlie', checkins: 2 },
          ],
        },
      };
    const mockStore = configureStore([thunk])(mockState);
    let wrapper: any;
    beforeEach(() => {
        wrapper = render(
            <TestingWrapperNavigation store={mockStore}>
                <LeaderboardSettings />
            </TestingWrapperNavigation>
        );
    });

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
