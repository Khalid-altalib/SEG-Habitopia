import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import SettingsPage from "./SettingsPage";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import settingsMockState from "../settingsMockState";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { act } from "react-test-renderer";
import { logOutUser } from "@features/auth/authSlice";

jest.mock("../../auth/authSlice", () => ({
  logOutUser: jest.fn(),
}));

describe("SettingsPage", () => {
  const mockState = {
    settings: settingsMockState,
  };

  const store = configureStore([thunk])(mockState);

  let wrapper: any;

  beforeEach(() => {
    wrapper = render(
      <TestingWrapperNavigation store={store}>
        <SettingsPage />
      </TestingWrapperNavigation>
    );
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls logOutUser when "Log out" button is pressed', () => {
    const button = wrapper.getByText("Log out");

    act(() => {
      fireEvent.press(button);
    });

    expect(logOutUser).toHaveBeenCalledTimes(1);
  });
});
