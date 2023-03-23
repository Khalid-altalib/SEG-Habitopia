// React
import React from "react";

// React Native Testing Library
import { render, screen } from "@testing-library/react-native";

// Habitopia
import Button from "@components/Button";
import { ButtonType } from "types";

it("Renders correctly.", () => {
  render(
    <Button type={ButtonType.Primary} isLoading={false}>
      This is some example content.
    </Button>
  );

  expect(screen.toJSON()).toMatchSnapshot();
});
