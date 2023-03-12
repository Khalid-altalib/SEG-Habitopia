import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import LeaderboardLayout from "./LeaderboardLayout";
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
                <LeaderboardLayout children={null}/>
            </TestingWrapperNavigation>
        );
    });

    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
});