import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import LeaderboardSettings from './LeaderboardSettings';
import thunk from 'redux-thunk';
import TestingWrapperNavigation from '@app/testingWrapperWithNavigation';

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
        challenges: {
          loading: false,
          error: null,
          challenges: [
            { name: 'Sleep', description: 'Sleep' },
            { name: 'Exercise', description: 'Exercise' },
            { name: 'Meditate', description: 'Meditate' },
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
