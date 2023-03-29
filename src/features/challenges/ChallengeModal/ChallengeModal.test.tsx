// Import necessary libraries and components for testing
import { fireEvent, render, screen } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import challengesMockState from "../challengesMockState";
import { extendTheme, NativeBaseProvider } from "native-base";
import ChallengeModal from "./ChallengeModal";
import ChallengeBox from "../ChallengeBox/ChallengeBox";

describe("ChallengeModal", () => {
  // Define mock state and store for testing
  const mockState = {
    challenges: challengesMockState,
    joinChallenge: jest.fn(),
  };
  const mockStore = configureStore([thunk])(mockState);

  // Define modal props for testing
  const modalProps = {
    challenge: mockState.challenges.challenges[0],
  };

  it("renders the challenge modal correctly", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <ChallengeModal {...modalProps} />
      </TestingWrapperNavigation>
    );
    // expect the rendered component to match the snapshot
    expect(component).toMatchSnapshot();
  });

  it("finds the challenge modal", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <ChallengeModal {...modalProps} />
      </TestingWrapperNavigation>
    );

    // Use the getByTestId function to find the challenge prompt element and ensure that it is defined
    const box = component.getByTestId("challengePrompt");

    expect(box).toBeDefined();
  });

  it("dispatches a join request to join button is pressed", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <ChallengeModal {...modalProps} />
      </TestingWrapperNavigation>
    );

    const button = component.getByTestId("joinButton");

    fireEvent.press(button);

    //checks if the dispatch is called and its the correct dispatch
    expect(mockStore.getActions()[0].type).toEqual("challenges/join/pending");
  });

  it("navigates back when back button is pressed", async () => {
    // Define theme and initial window metrics for testing
    const theme = extendTheme({});
    const inset = {
      frame: { x: 0, y: 0, width: 0, height: 0 },
      insets: { top: 0, left: 0, right: 0, bottom: 0 },
    };
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <NativeBaseProvider theme={theme} initialWindowMetrics={inset}>
          <ChallengeBox {...modalProps} />
        </NativeBaseProvider>
      </TestingWrapperNavigation>
    );

    // Simulate pressing the challenge box to open the modal
    const box = component.getByTestId("challengeBox");
    fireEvent(box, "press");

    // Simulate pressing the back button to navigate back
    const backButton = component.getByTestId("backButton");
    fireEvent.press(backButton);

    // Check that the challenge prompt is no longer in the screen
    const checkChallengePrompt = screen.queryByTestId("challengePrompt");
    expect(checkChallengePrompt).toBeNull();
  });
});
