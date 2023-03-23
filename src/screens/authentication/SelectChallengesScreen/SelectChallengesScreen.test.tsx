// React
import React from "react";

// React Native Testing Library
import { render, screen } from "@testing-library/react-native";

// Redux
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

// Habitopia
import SelectChallengesScreen from "@screens/authentication/SelectChallengesScreen";
import TestingWrapper from "@app/testingWrapper";

it("Renders correctly.", () => {
  const mockStore = configureStore([thunk])({});

  render(
    <TestingWrapper store={mockStore}>
      <SelectChallengesScreen />
    </TestingWrapper>
  );

  expect(screen.toJSON()).toMatchSnapshot();
});
