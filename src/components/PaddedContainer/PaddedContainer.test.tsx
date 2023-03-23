// React
import React from "react";

// React Native Testing Library
import { render, screen } from "@testing-library/react-native";

// Habitopia
import PaddedContainer from "@components/PaddedContainer";

it("Renders correctly.", () => {
  render(<PaddedContainer>This is some example content.</PaddedContainer>);

  expect(screen.toJSON()).toMatchSnapshot();
});
