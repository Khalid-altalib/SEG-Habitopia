import { fireEvent, render, screen } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import challengesMockState from "../challengesMockState";
import { extendTheme, NativeBaseProvider } from "native-base";
import ChallengeNavigationButton from "./ChallengeNavigationButton";

describe("ChallengeBoxes", () => {
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

    expect(component).toMatchSnapshot();
  });

  it("navigates to the explore page", async () => {
    const theme = extendTheme({});
    const inset = {
      frame: { x: 0, y: 0, width: 0, height: 0 },
      insets: { top: 0, left: 0, right: 0, bottom: 0 },
    };
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <NativeBaseProvider theme={theme} initialWindowMetrics={inset}>
          <ChallengeNavigationButton />
        </NativeBaseProvider>
      </TestingWrapperNavigation>
    );
    const button = component.getByText("Discover more!");

    fireEvent.press(button);

    const check = screen.queryByText("Discover more!");
    expect(check).toBeNull();
  });
});
