import { render } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import TestingWrapper from "../../../app/TestingWrapper";
import settingsMockState from "../settingsMockState";
import GenericSetting from "./GenericSetting";

describe("GenericSetting", () => {
  const mockState = { settings: settingsMockState };
  const mockStore = configureStore([thunk])(mockState);

  const defaultProps = {
    defaultValue: "example@email.com",
    settingType: "email",
  };

  it("renders correctly", () => {
    const tree = render(
      <TestingWrapper store={mockStore}>
        <GenericSetting {...defaultProps} />
      </TestingWrapper>
    );

    expect(tree).toMatchSnapshot();
  });

  it("finds the input", () => {
    const tree = render(
      <TestingWrapper store={mockStore}>
        <GenericSetting {...defaultProps} />
      </TestingWrapper>
    );

    const input = tree.getByTestId("input");

    expect(input).toBeDefined();
  });
});
