import { render } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import challengesMockState from "@features/challenges/challengesMockState";
import ChallengeWidget from "./ChallengeWidget";

describe("ChallengeWidget", () => {
  const mockState = {
    challenges: challengesMockState,
  };
  const mockStore = configureStore([thunk])(mockState);

  it("finds the challenge widget", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <ChallengeWidget />
      </TestingWrapperNavigation>
    );

    const box = component.getByTestId("challengeWidget");

    expect(box).toBeDefined();
  });
});
