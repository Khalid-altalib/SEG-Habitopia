import React from "react";
import { render } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import chatMockState from "../chatMockState";
import Header from "./Header";

describe("Header", () => {
    const mockState = {chat: chatMockState,};
    // create a mock Redux store with the mock state and middleware
    const mockStore = configureStore([thunk])(mockState);
    const Props = {
        name: 'Fitness Chat',
        description: 'Be active',
    };

    it("renders the header component correctly", async () => {
      const component = render(
        <TestingWrapperNavigation store={mockStore}>
          <Header {...Props} />
        </TestingWrapperNavigation>
    );
      // expect the rendered component to match the snapshot
      expect(component).toMatchSnapshot();
    });
  });