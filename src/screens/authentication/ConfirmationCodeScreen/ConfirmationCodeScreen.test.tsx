// React
import React from "react";

// React Native Testing Library
import { render, screen } from "@testing-library/react-native";

// Redux
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

// Habitopia
import ConfirmationCodeScreen from "@screens/authentication/ConfirmationCodeScreen";
import TestingWrapper from "@app/testingWrapper";
import { useSelector } from "react-redux";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

it("Renders correctly.", () => {
  (useSelector as jest.Mock).mockReturnValue({
    error: null,
    loading: false,
  });

  const mockStore = configureStore([thunk])({});

  render(
    <TestingWrapper store={mockStore}>
      <ConfirmationCodeScreen />
    </TestingWrapper>
  );

  expect(screen.toJSON()).toMatchSnapshot();
});
