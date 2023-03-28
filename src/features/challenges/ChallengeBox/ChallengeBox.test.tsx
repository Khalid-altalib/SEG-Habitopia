import { fireEvent, render } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import challengesMockState from "../challengesMockState";
import ChallengeBox from "./ChallengeBox";
import { extendTheme, NativeBaseProvider } from "native-base";

describe("ChallengeBox", () => {
  const mockState = {
    challenges: challengesMockState,
  };
  const mockStore = configureStore([thunk])(mockState);

  const activeBoxProps = {
    challenge: mockState.challenges.challenges[0],
  };
  const unactiveBoxProps = {
    challenge: mockState.challenges.challenges[1],
  };

  it("renders the active challenge box correctly", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <ChallengeBox {...activeBoxProps} />
      </TestingWrapperNavigation>
    );

    expect(component).toMatchSnapshot();
  });

  it("renders the unactive challenge box correctly", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <ChallengeBox {...unactiveBoxProps} />
      </TestingWrapperNavigation>
    );

    expect(component).toMatchSnapshot();
  });

  it("finds the challenge box", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <ChallengeBox {...activeBoxProps} />
      </TestingWrapperNavigation>
    );

    const box = component.getByTestId("challengeBox");

    expect(box).toBeDefined();
  });

  it("clicking on the challenge box brings up the challenge prompt", async () => {
    const theme = extendTheme({});
    const inset = {
      frame: { x: 0, y: 0, width: 0, height: 0 },
      insets: { top: 0, left: 0, right: 0, bottom: 0 },
    };

    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <NativeBaseProvider theme={theme} initialWindowMetrics={inset}>
          <ChallengeBox {...activeBoxProps} />
        </NativeBaseProvider>
      </TestingWrapperNavigation>
    );

    const box = component.getByTestId("challengeBox");

    fireEvent(box, "press");

    const newScreen = component.getByTestId("challengePrompt");

    expect(newScreen).toBeDefined();
  });
});
