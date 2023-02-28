import { render } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import TestingWrapper from "../../../app/TestingWrapper";
import DoneButton from "./DoneButton";
import settingsMockState from "../settingsMockState";

describe("DoneButton", () => {
  const mockState = { settings: settingsMockState };
  const defaultStore = configureStore([thunk])(mockState);

  const getValuesMock = jest.fn();
  const defaultProps = {
    disabled: false,
    getValues: getValuesMock,
    valueName: "email",
  };

  it("renders correctly", () => {
    const tree = render(
      <TestingWrapper store={defaultStore}>
        <DoneButton {...defaultProps} />
      </TestingWrapper>
    );

    expect(tree).toMatchSnapshot();
  });

  it("finds the done button", () => {
    const tree = render(
      <TestingWrapper store={defaultStore}>
        <DoneButton {...defaultProps} />
      </TestingWrapper>
    );

    const button = tree.getByTestId("button");

    expect(button).toBeDefined();
  });
});
