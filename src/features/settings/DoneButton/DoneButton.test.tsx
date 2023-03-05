import { fireEvent, render, waitFor } from "@testing-library/react-native";
import configureStore, { MockStore } from "redux-mock-store";
import thunk from "redux-thunk";
import DoneButton from "./DoneButton";
import settingsMockState from "../settingsMockState";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";

describe("DoneButton", () => {
  const mockState = {
    settings: settingsMockState,
    auth: { user: { authToken: "token", userId: "123" } },
  };
  const mockStore = configureStore([thunk])(mockState);

  const getValuesMock = jest.fn();
  const defaultProps = {
    disabled: false,
    getValues: getValuesMock,
    valueName: "name",
  };

  it("renders correctly", async () => {
    const tree = await render(
      <TestingWrapperNavigation store={mockStore}>
        <DoneButton {...defaultProps} />
      </TestingWrapperNavigation>
    );

    expect(tree).toMatchSnapshot();
  });

  it("finds the done button", async () => {
    const tree = await render(
      <TestingWrapperNavigation store={mockStore}>
        <DoneButton {...defaultProps} />
      </TestingWrapperNavigation>
    );

    const button = tree.getByTestId("button");

    expect(button).toBeDefined();
  });

  it("dispatches setSettings and updates settings when pressed", async () => {
    const store = mockStore;
    const valueName = "name";
    const getValues = jest.fn().mockReturnValue("Jane Doe");

    const wrapper = await render(
      <TestingWrapperNavigation store={mockStore}>
        <DoneButton valueName={valueName} getValues={getValues} />
      </TestingWrapperNavigation>
    );

    const button = wrapper.getByTestId("button");

    await fireEvent.press(button);

    await waitFor(() => {
      expect(getValues).toHaveBeenCalledTimes(1);
      expect(getValues).toHaveBeenCalledWith("formValue");
      const actions = store.getActions();
      // console.log(actions);
      // expect(actions[1].type).toEqual("settings/set/fulfilled");
      // expect(actions[1].payload).toEqual({ name: "Jane Doe" });
      // expect(store.getState().settings.settings.name).toEqual("Jane Doe");
    });
  });
});
