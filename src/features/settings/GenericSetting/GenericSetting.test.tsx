import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native";
import GenericSetting from "./GenericSetting";
import TestingWrapper from "@app/testingWrapper";
import configureStore from "redux-mock-store";
import settingsMockState from "../settingsMockState";
import thunk from "redux-thunk";

describe("GenericSetting component", () => {
  const defaultValue = "John Doe";
  const settingType = "name";

  const mockState = {
    settings: settingsMockState,
  };

  const mockStore = configureStore([thunk])(mockState);

  let wrapper: any;

  beforeEach(() => {
    wrapper = render(
      <TestingWrapper store={mockStore}>
        <GenericSetting defaultValue={defaultValue} settingType={settingType} />
      </TestingWrapper>
    );
  });

  it("should render correctly", () => {
    act(() => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  it("should update the form value when input is changed", () => {
    const input = wrapper.getByTestId("input");
    act(() => {
      fireEvent.changeText(input, "New value");
    });
    expect(input.props.value).toBe("New value");
  });
});
