// React
import React from "react";

// React Native Testing Library
import { render, screen } from "@testing-library/react-native";

// Redux
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

// Habitopia
import SettingsScreen from "@screens/application/SettingsScreen";
import TestingWrapper from "@app/testingWrapper";
import { SettingsState } from "@features/settings/settingsSlice";

it("Renders correctly.", () => {
  const mockSettingsState: SettingsState = {
    settings: {
      email: "",
      password: "",
      notifications: false,
      name: "",
      biography: "",
    },
    fetchSettings: {
      loading: false,
      error: "",
    },
    setSettings: {
      loading: false,
      error: "",
    },
  };

  const mockStore = configureStore([thunk])({
    settings: mockSettingsState,
  });

  render(
    <TestingWrapper store={mockStore}>
      <SettingsScreen />
    </TestingWrapper>
  );

  expect(screen.toJSON()).toMatchSnapshot();
});
