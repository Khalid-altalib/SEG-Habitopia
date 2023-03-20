import React from "react";
import { render } from "@testing-library/react-native";
import SettingsItem from "./SettingsItem";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import settingsMockState from "../settingsMockState";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("SettingsItem", () => {
  const entry = { name: "Email" };
  const value = "email@email.com";

  const mockState = {
    settings: settingsMockState,
  };

  const mockStore = configureStore([thunk])(mockState);

  it("renders correctly", () => {
    const wrapper = render(
      <TestingWrapperNavigation store={mockStore}>
        <SettingsItem type="text" entry={entry} value={value} />
      </TestingWrapperNavigation>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
