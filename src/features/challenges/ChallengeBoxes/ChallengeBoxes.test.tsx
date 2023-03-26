import { render } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import challengesMockState from "../challengesMockState";
import ChallengeBoxes from "./ChallengeBoxes";

describe("ChallengeBoxes", () => {
  const mockState = {
    challenges: challengesMockState,
  };
  const mockStore = configureStore([thunk])(mockState);

  it("renders the challenge boxes correctly", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <ChallengeBoxes />
      </TestingWrapperNavigation>
    );

    expect(component).toMatchSnapshot();
  });

  it("finds the challenge boxes", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <ChallengeBoxes />
      </TestingWrapperNavigation>
    );

    const box = component.getByTestId("challengeBoxes");

    expect(box).toBeDefined();
  });
});
