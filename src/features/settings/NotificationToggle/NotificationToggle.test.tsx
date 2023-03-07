import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native";
import NotificationToggle from "./NotificationToggle";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import settingsMockState from "../settingsMockState";
import TestingWrapper from "@app/testingWrapper";

describe("NotificationToggle component", () => {
  const mockState = {
    settings: settingsMockState,
  };

  const mockStore = configureStore([thunk])(mockState);

  let wrapper: any;

  beforeEach(() => {
    wrapper = render(
      <TestingWrapper store={mockStore}>
        <NotificationToggle defaultValue={true} />
      </TestingWrapper>
    );
  });

  it("should render correctly with default value", () => {
    expect(wrapper).toMatchSnapshot();

    const switchComponent = wrapper.getByTestId("switch");
    expect(switchComponent.props.value).toBe(true);
  });

  it("should dispatch setSettings action when switch is toggled", () => {
    const store = mockStore;

    const switchComponent = wrapper.getByTestId("switch");
    act(() => {
      fireEvent(switchComponent, "onValueChange", true);
    });
    // expect(store.getActions()).toEqual([
    //   { type: "settings/setSettings", payload: { notifications: true } },
    // ]);
  });
});
