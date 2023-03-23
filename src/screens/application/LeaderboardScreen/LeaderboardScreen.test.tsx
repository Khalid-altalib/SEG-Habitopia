// React
import React from "react";

// React Native Testing Library
import { render, screen } from "@testing-library/react-native";

// Redux
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

// Habitopia
import LeaderboardScreen from "@screens/application/LeaderboardScreen";
import TestingWrapper from "@app/testingWrapper";
import { Amplify } from "aws-amplify";
import awsExports from "src/aws-exports";

it("Renders correctly.", () => {
  const mockStore = configureStore([thunk])({
    challenges: {
      challenges: [],
      fetchChallenges: {
        loading: false,
        error: "",
      },
      joinChallenge: {
        loading: false,
        error: "",
      },
    },
    leaderboard: {
      timeInterval: "",
    },
  });

  Amplify.configure(awsExports);

  render(
    <TestingWrapper store={mockStore}>
      <LeaderboardScreen />
    </TestingWrapper>
  );

  expect(screen.toJSON()).toMatchSnapshot();
});
