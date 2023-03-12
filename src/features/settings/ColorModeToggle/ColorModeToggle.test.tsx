import { fireEvent, render, waitFor } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import ColorModeToggle from "./ColorModeToggle";
import settingsMockState from "../settingsMockState";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";

describe("ColorModeToggle", () => {
  const mockState = {
    settings: settingsMockState,
  };
  const mockStore = configureStore([thunk])(mockState);

  it("renders correctly", () => {
    const tree = render(
      <TestingWrapperNavigation store={mockStore}>
        <ColorModeToggle />
      </TestingWrapperNavigation>
    );

    expect(tree).toMatchSnapshot();
  });
});
