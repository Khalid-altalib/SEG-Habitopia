// Importing necessary dependencies/modules/packages for the test file
import { render } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import challengesMockState from "../challengesMockState";
import ChallengeLayout from "./ChallengeLayout";

describe("ChallengeLayout", () => {
  const mockState = {
    // create a mock state for the Redux store
    challenges: challengesMockState,
  };

  // create a mock Redux store with the mock state and middleware
  const mockStore = configureStore([thunk])(mockState);

  it("renders the challenge layout correctly", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <ChallengeLayout>
          <></>
        </ChallengeLayout>
      </TestingWrapperNavigation>
    );

    // expect the rendered component to match the snapshot
    expect(component).toMatchSnapshot();
  });
});
