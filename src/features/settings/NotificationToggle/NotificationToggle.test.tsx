import React from "react";
import { render } from "@testing-library/react-native";
import NotificationToggle from "./NotificationToggle";
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
});
