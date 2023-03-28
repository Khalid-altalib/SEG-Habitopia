import { render } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import challengesMockState from "../challengesMockState";
import ChallengeLayout from "./ChallengeLayout";

describe("ChallengeLayout", () => {
  const mockState = {
    challenges: challengesMockState,
  };
  const mockStore = configureStore([thunk])(mockState);

  it("renders the challenge layout correctly", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <ChallengeLayout>
          <></>
        </ChallengeLayout>
      </TestingWrapperNavigation>
    );

    expect(component).toMatchSnapshot();
  });
});
