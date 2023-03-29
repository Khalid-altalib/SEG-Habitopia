// Import testing libraries and dependencies
import { fireEvent, render, screen } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import challengesMockState from "../challengesMockState";
import { extendTheme, NativeBaseProvider } from "native-base";

// Import the component to be tested
import ChallengeNavigationButton from "./ChallengeNavigationButton";

// Define the test suite
describe("ChallengeNavigationButton", () => {
  // Set up mock store state and store
  const mockState = {
    challenges: challengesMockState,
  };
  const mockStore = configureStore([thunk])(mockState);

  it("renders the challenge boxes correctly", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <ChallengeNavigationButton />
      </TestingWrapperNavigation>
    );

    // expect the rendered component to match the snapshot
    expect(component).toMatchSnapshot();
  });

  it("navigates to the explore page", async () => {
    // Define the theme and inset for the NativeBaseProvider
    const theme = extendTheme({});
    const inset = {
      frame: { x: 0, y: 0, width: 0, height: 0 },
      insets: { top: 0, left: 0, right: 0, bottom: 0 },
    };

    // Render the component wrapped in TestingWrapperNavigation and NativeBaseProvider
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <NativeBaseProvider theme={theme} initialWindowMetrics={inset}>
          <ChallengeNavigationButton />
        </NativeBaseProvider>
      </TestingWrapperNavigation>
    );

    // Find the button by its text content and simulate a button press
    const button = component.getByText("Discover more!");
    fireEvent.press(button);

    // Check if the button is not in the current screen anymore
    const check = screen.queryByText("Discover more!");
    expect(check).toBeNull();
  });
});
