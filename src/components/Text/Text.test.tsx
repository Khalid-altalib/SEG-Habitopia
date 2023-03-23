// React
import React from "react";

// React Native Testing Library
import { render, screen } from "@testing-library/react-native";

// Habitopia
import Text from "@components/Text";
import { TextType } from "types";

it("Renders correctly.", () => {
  render(<Text type={TextType.Regular}>This is some example content.</Text>);

  expect(screen.toJSON()).toMatchSnapshot();
});
