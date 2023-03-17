import { fireEvent, render, waitFor } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import DoneButton from "./DoneButton";
import settingsMockState from "../settingsMockState";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";

describe("DoneButton", () => {
  const mockState = {
    settings: settingsMockState,
  };
  const mockStore = configureStore([thunk])(mockState);

  const getValuesMock = jest.fn();
  const defaultProps = {
    disabled: false,
    getValues: getValuesMock,
    valueName: "name",
  };

  it("renders correctly", () => {
    const tree = render(
      <TestingWrapperNavigation store={mockStore}>
        <DoneButton {...defaultProps} />
      </TestingWrapperNavigation>
    );

    expect(tree).toMatchSnapshot();
  });

  it("finds the done button", () => {
    const tree = render(
      <TestingWrapperNavigation store={mockStore}>
        <DoneButton {...defaultProps} />
      </TestingWrapperNavigation>
    );

    const button = tree.getByTestId("button");

    expect(button).toBeDefined();
  });

  it("dispatches the setSettings action when pressed", async () => {
    const store = mockStore;
    const valueName = "name";
    const getValues = jest.fn().mockReturnValue("Jane Doe");

    const wrapper = render(
      <TestingWrapperNavigation store={mockStore}>
        <DoneButton valueName={valueName} getValues={getValues} />
      </TestingWrapperNavigation>
    );

    const button = wrapper.getByTestId("button");

    await fireEvent.press(button);

    await waitFor(() => {
      expect(getValues).toHaveBeenCalledTimes(1);
      expect(getValues).toHaveBeenCalledWith("formValue");
      expect(store.getActions()[0].type).toEqual("settings/set/pending");
    });
  });
});
