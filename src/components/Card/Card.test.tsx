// React
import React from "react";

// React Native Testing Library
import { render, screen } from "@testing-library/react-native";

// Habitopia
import Card from "@components/Card";

it("Renders correctly.", () => {
  render(<Card>This is some example content.</Card>);

  expect(screen.toJSON()).toMatchSnapshot();
});
