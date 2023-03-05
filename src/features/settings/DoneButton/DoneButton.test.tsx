import { fireEvent, render, waitFor } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import TestingWrapper from "@app/testingWrapper";
import DoneButton from "./DoneButton";
import settingsMockState from "../settingsMockState";
import { setSettings } from "@features/settings/settingsSlice";

describe("DoneButton", () => {
  const mockState = { settings: settingsMockState };
  const mockStore = configureStore([thunk])(mockState);
  const getValuesMock = jest.fn();
  const defaultProps = {
    disabled: false,
    getValues: getValuesMock,
    valueName: "name",
  };

  it("renders correctly", () => {
    const tree = render(
      <TestingWrapper store={mockStore}>
        <DoneButton {...defaultProps} />
      </TestingWrapper>
    );

    expect(tree).toMatchSnapshot();
  });

  it("finds the done button", () => {
    const tree = render(
      <TestingWrapper store={mockStore}>
        <DoneButton {...defaultProps} />
      </TestingWrapper>
    );

    const button = tree.getByTestId("button");

    expect(button).toBeDefined();
  });

  // it("dispatches setSettings and updates settings when pressed", async () => {
  //   const store = mockStore;
  //   const valueName = "name";
  //   const getValues = jest.fn().mockReturnValue("Jane Doe");

  //   const wrapper = render(
  //     <TestingWrapper store={mockStore}>
  //       <DoneButton valueName={valueName} getValues={getValues} />
  //     </TestingWrapper>
  //   );

  //   const button = wrapper.getByTestId("button");

  //   await fireEvent.press(button);

  //   await waitFor(() => {
  //     expect(getValues).toHaveBeenCalledTimes(1);
  //     expect(getValues).toHaveBeenCalledWith("formValue");
  //     const actions = store.getActions();
  //     console.log(actions);
  //     expect(actions[0].type).toEqual("settings/set/fulfilled");
  //     expect(actions[0].payload).toEqual({ name: "Jane Doe" });
  //   });
  //   //expect(store.getState().settings.settings.name).toEqual("Jane Doe");
  // });
  it("dispatches setSettings and updates settings when pressed", async () => {
    const valueName = "name";
    const getValues = jest.fn().mockReturnValue("Jane Doe");

    // Create a mock settings object with the required properties
    const mockSettings = {
      email: "jane.doe@example.com",
      password: "password",
      notifications: false,
      name: "Jane Doe",
      biography: "",
    };

    // Initialize the store with the mock settings
    const store = configureStore([thunk])({
      settings: {
        settings: mockSettings,
        fetchSettings: { loading: false, error: "" },
        setSettings: { loading: false, error: "" },
      },
    });

    const wrapper = render(
      <TestingWrapper store={store}>
        <DoneButton valueName={valueName} getValues={getValues} />
      </TestingWrapper>
    );

    const button = wrapper.getByTestId("button");

    await fireEvent.press(button);

    await waitFor(() => {
      expect(store.getActions()).toEqual([
        setSettings({
          ...mockSettings,
          [valueName]: getValues(),
        }),
      ]);
    });
  });
});
