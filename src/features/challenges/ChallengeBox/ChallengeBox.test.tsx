// Import required modules
import { fireEvent, render } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import challengesMockState from "../challengesMockState";
import ChallengeBox from "./ChallengeBox";
import { extendTheme, NativeBaseProvider } from "native-base";

// Start test suite for ChallengeBox component
describe("ChallengeBox", () => {
  // Set up mock state and store for testing
  const mockState = {
    challenges: challengesMockState,
  };
  const mockStore = configureStore([thunk])(mockState);

  // Set up props for active and inactive challenge boxes
  const activeBoxProps = {
    challenge: mockState.challenges.challenges[0],
  };
  const unactiveBoxProps = {
    challenge: mockState.challenges.challenges[1],
  };

  // Test that the active challenge box renders correctly
  it("renders the active challenge box correctly", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <ChallengeBox {...activeBoxProps} />
      </TestingWrapperNavigation>
    );

    expect(component).toMatchSnapshot();
  });

  // Test that the inactive challenge box renders correctly
  it("renders the inactive challenge box correctly", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <ChallengeBox {...unactiveBoxProps} />
      </TestingWrapperNavigation>
    );

    expect(component).toMatchSnapshot();
  });

  // Test that the challenge box can be found by test ID
  it("finds the challenge box", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <ChallengeBox {...activeBoxProps} />
      </TestingWrapperNavigation>
    );

    const box = component.getByTestId("challengeBox");

    expect(box).toBeDefined();
  });

  // Test that clicking on the challenge box opens the challenge prompt
  it("clicking on the challenge box brings up the challenge prompt", async () => {
    // Set up theme and window metrics for NativeBaseProvider
    const theme = extendTheme({});
    const inset = {
      frame: { x: 0, y: 0, width: 0, height: 0 },
      insets: { top: 0, left: 0, right: 0, bottom: 0 },
    };

    // Render the ChallengeBox component within the TestingWrapperNavigation and NativeBaseProvider
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <NativeBaseProvider theme={theme} initialWindowMetrics={inset}>
          <ChallengeBox {...activeBoxProps} />
        </NativeBaseProvider>
      </TestingWrapperNavigation>
    );

    // Get the challenge box element and simulate a press event
    const box = component.getByTestId("challengeBox");
    fireEvent(box, "press");

    // Get the challenge prompt element and test that it is defined
    const newScreen = component.getByTestId("challengePrompt");
    expect(newScreen).toBeDefined();
  });
});
