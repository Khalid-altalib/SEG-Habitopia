// React
import React from "react";

// React Native Testing Library
import { render, screen } from "@testing-library/react-native";

// Redux
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

// Habitopia
import HomeScreen from "@screens/application/HomeScreen";
import TestingWrapper from "@app/testingWrapper";
import { ChallengesState } from "@features/challenges/challengesSlice";

it("Renders correctly.", () => {
  const MOCK_CHALLENGES_STATE: ChallengesState = {
    challenges: [],
    fetchChallenges: {
      loading: false,
      error: "",
    },
    joinChallenge: {
      loading: false,
      error: "",
    },
  };

  const MOCK_STORE = configureStore([thunk])({
    challenges: MOCK_CHALLENGES_STATE,
  });

  render(
    <TestingWrapper store={MOCK_STORE}>
      <HomeScreen />
    </TestingWrapper>
  );

  expect(screen.toJSON()).toMatchSnapshot();
});
