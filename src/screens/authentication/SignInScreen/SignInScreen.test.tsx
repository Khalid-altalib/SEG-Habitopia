// React
import React from "react";

// React Native Testing Library
import { render, screen } from "@testing-library/react-native";

// Redux
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

// Habitopia
import SignInScreen from "@screens/authentication/SignInScreen";
import TestingWrapper from "@app/testingWrapper";
import { useSelector } from "react-redux";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

it("Renders correctly.", () => {
  (useSelector as jest.Mock).mockReturnValue({
    loading: false,
  });

  const mockStore = configureStore([thunk])({});

  render(
    <TestingWrapper store={mockStore}>
      <SignInScreen />
    </TestingWrapper>
  );

  expect(screen.toJSON()).toMatchSnapshot();
});
