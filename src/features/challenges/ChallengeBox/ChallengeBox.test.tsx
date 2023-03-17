import { fireEvent, render, waitFor } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import challengesMockState from "../challengesMockState";
import ChallengeBox from "./ChallengeBox";

describe("ChallengeBox", () => {
  const mockState = {
    challenges: challengesMockState,
    auth: { user: { authToken: "token", userId: "123" } },
  };
  const mockStore = configureStore([thunk])(mockState);

  const getValuesMock = jest.fn();
  const activeBoxProps = {
    challenge: mockState.challenges.challenges[0],
  };
  const unactiveBoxProps = {
    challenge: mockState.challenges.challenges[1],
  };

  it("renders the active challenge box correctly", async () => {
    const tree = render(
      <TestingWrapperNavigation store={mockStore}>
        <ChallengeBox {...activeBoxProps} />
      </TestingWrapperNavigation>
    );

    expect(tree).toMatchSnapshot();
  });

  it("renders the unactive challenge box correctly", async () => {
    const tree = render(
      <TestingWrapperNavigation store={mockStore}>
        <ChallengeBox {...unactiveBoxProps} />
      </TestingWrapperNavigation>
    );

    expect(tree).toMatchSnapshot();
  });

  it("finds the challenge box", async () => {
    const tree = render(
      <TestingWrapperNavigation store={mockStore}>
        <ChallengeBox {...activeBoxProps} />
      </TestingWrapperNavigation>
    );

    const button = tree.getByTestId("box");

    expect(button).toBeDefined();
  });

  //   it("dispatches setSettings and updates settings when pressed", async () => {
  //     const store = mockStore;
  //     const valueName = "name";
  //     const getValues = jest.fn().mockReturnValue("Jane Doe");

  //     const wrapper = render(
  //       <TestingWrapperNavigation store={mockStore}>
  //         <ChallengeBox valueName={valueName} getValues={getValues} />
  //       </TestingWrapperNavigation>
  //     );

  //     const button = wrapper.getByTestId("button");

  //     await fireEvent.press(button);

  //     await waitFor(() => {
  //       expect(getValues).toHaveBeenCalledTimes(1);
  //       expect(getValues).toHaveBeenCalledWith("formValue");
  //       const actions = store.getActions();
  //       // console.log(actions);
  //       // expect(actions[1].type).toEqual("settings/set/fulfilled");
  //       // expect(actions[1].payload).toEqual({ name: "Jane Doe" });
  //       // expect(store.getState().settings.settings.name).toEqual("Jane Doe");
  //     });
  //   });
});
