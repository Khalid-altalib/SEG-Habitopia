// Imports the neccesary dependencies for testing
import { render } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import challengesMockState from "@features/challenges/challengesMockState";

// Imports the componenet to be tested
import CatchUpWidget from "./CatchUpWidget";

describe("CatchUpWidget", () => {
  // Set up the mock state for the Redux store
  const mockState = {
    challenges: challengesMockState,
  };
  const mockStore = configureStore([thunk])(mockState);

  it("renders the catch-up widget correctly", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <CatchUpWidget />
      </TestingWrapperNavigation>
    );

    // Take a snapshot of the rendered component and compare it to the stored snapshot
    expect(component).toMatchSnapshot();
  });

  it("finds the catch-up widget", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <CatchUpWidget />
      </TestingWrapperNavigation>
    );

    const box = component.getByTestId("catchUpWidget");

    // Find the catch-up widget using its testID and ensure it is defined
    expect(box).toBeDefined();
  });
});
