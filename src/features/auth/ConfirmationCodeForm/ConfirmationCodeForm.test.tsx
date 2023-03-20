import React from "react";
import { render } from "@testing-library/react-native";
import ConfirmationCodeForm from "./ConfirmationCodeForm";
import configureStore from "redux-mock-store";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";

const mockStore = configureStore([]);

describe("ConfirmationCodeForm", () => {
  let wrapper: any;
  const store = mockStore({});

  beforeEach(() => {
    wrapper = render(
      <TestingWrapperNavigation store={store}>
        <ConfirmationCodeForm />
      </TestingWrapperNavigation>
    );
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
