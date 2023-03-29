// Imports the necessary dependencies for testing
import { render } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import challengesMockState from "@features/challenges/challengesMockState";

// Imports the component to be tested
import ChallengeWidget from "./ChallengeWidget";

describe("ChallengeWidget", () => {
  const mockState = {
    challenges: challengesMockState,
  };

  // create a mock store with the initial state
  const mockStore = configureStore([thunk])(mockState);

  it("finds the challenge widget", async () => {
    // render the ChallengeWidget component with the mock store
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <ChallengeWidget />
      </TestingWrapperNavigation>
    );

    // find the component by its testID
    const box = component.getByTestId("challengeWidget");

    // expect the component to be defined
    expect(box).toBeDefined();
  });
});
