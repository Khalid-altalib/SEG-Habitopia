// React
import React from "react";

// React Native Testing Library
import { render, screen } from "@testing-library/react-native";

// Habitopia
import BoxWithShadow from "@components/BoxWithShadow";

it("Renders correctly.", () => {
  render(<BoxWithShadow>This is some example content.</BoxWithShadow>);

  expect(screen.toJSON()).toMatchSnapshot();
});
