import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import LeaderboardCard from "./LeaderboardCard";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import configureStore from "redux-mock-store";  
import thunk from "redux-thunk";

describe("LeaderboardLayout", () => {
    const mockState = {
        leaderboard: {
            leaderboard: [],
            loading: false,
            error: null,
        },
    };
    const mockStore = configureStore([thunk])(mockState);
    let wrapper : any;

    beforeEach(() => {
        wrapper = render(
            <TestingWrapperNavigation store={mockStore}>
                <LeaderboardCard name={"Alice"} wins={4} place={0} />
            </TestingWrapperNavigation>
        );
    });

    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
});