// React
import React from "react";

// React Native Testing Library
import { render, screen } from "@testing-library/react-native";

// Habitopia
import Background from "@components/Background";

it("Renders correctly.", () => {
  render(<Background>This is some example content.</Background>);

  expect(screen.toJSON()).toMatchSnapshot();
});
