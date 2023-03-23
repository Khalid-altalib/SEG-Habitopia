// React
import React from "react";

// React Native Testing Library
import { render, screen } from "@testing-library/react-native";

// React Native Safe Area Context
import { SafeAreaProvider } from "react-native-safe-area-context";

// Habitopia
import SafeAreaContainer from "@components/SafeAreaContainer";

it("Renders correctly.", () => {
  render(
    <SafeAreaProvider>
      <SafeAreaContainer>This is some example content.</SafeAreaContainer>
    </SafeAreaProvider>
  );

  expect(screen.toJSON()).toMatchSnapshot();
});
