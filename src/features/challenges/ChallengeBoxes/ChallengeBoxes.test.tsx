// Importing necessary dependencies/modules/packages for the test file
import { render } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import challengesMockState from "../challengesMockState";
import ChallengeBoxes from "./ChallengeBoxes";

// Create a test suite for the ChallengeBoxes component
describe("ChallengeBoxes", () => {
  // Define the mock state for the component
  const mockState = {
    challenges: challengesMockState,
  };

  // Use the configureStore function to create a mock store with the given state
  const mockStore = configureStore([thunk])(mockState);

  it("renders the challenge boxes correctly", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <ChallengeBoxes />
      </TestingWrapperNavigation>
    );

    // Take a snapshot of the component and ensure that it matches the stored snapshot
    expect(component).toMatchSnapshot();
  });

  it("finds the challenge boxes", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <ChallengeBoxes />
      </TestingWrapperNavigation>
    );

    // Use the getByTestId function to find the challenge boxes element and ensure that it is defined
    const box = component.getByTestId("challengeBoxes");
    expect(box).toBeDefined();
  });
});
