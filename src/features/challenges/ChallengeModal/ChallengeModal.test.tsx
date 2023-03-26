import { fireEvent, render, screen } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import challengesMockState from "../challengesMockState";
import { extendTheme, NativeBaseProvider } from "native-base";
import ChallengeModal from "./ChallengeModal";
import ChallengeBox from "../ChallengeBox/ChallengeBox";

describe("ChallengeModal", () => {
  const mockState = {
    challenges: challengesMockState,
    joinChallenge: jest.fn(),
  };
  const mockStore = configureStore([thunk])(mockState);

  const modalProps = {
    challenge: mockState.challenges.challenges[0],
  };

  it("renders the challenge modal correctly", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <ChallengeModal {...modalProps} />
      </TestingWrapperNavigation>
    );

    expect(component).toMatchSnapshot();
  });

  it("finds the challenge modal", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <ChallengeModal {...modalProps} />
      </TestingWrapperNavigation>
    );

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

    expect(mockStore.getActions()[0].type).toEqual("challenges/join/pending");
  });

  it("navigates back when back button is pressed", async () => {
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

    const box = component.getByTestId("challengeBox");
    fireEvent(box, "press");

    const backButton = component.getByTestId("backButton");
    fireEvent.press(backButton);

    const checkChallengePrompt = screen.queryByTestId("challengePrompt");
    expect(checkChallengePrompt).toBeNull();
  });
});
