import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ConfirmationCodeForm from "./ConfirmationCodeForm";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { addSignUpData, sendConfirmationCode } from "../authSlice";
import TestingWrapper from "@app/testingWrapper";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import { act } from "react-test-renderer";

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

  it("dispatches addSignUpData and sendConfirmationCode actions when submitted", async () => {
    const confirmationCodeInput = wrapper.getByTestId(
      "confirmation-code-input"
    );
    const continueButton = wrapper.getByText("Continue");

    act(() => {
      fireEvent.changeText(confirmationCodeInput, "123456");
      fireEvent.press(continueButton);
      console.log(store.getActions());
    });

    expect(store.getActions()).toEqual([
      addSignUpData({ confirmationCode: "123456" }),
      sendConfirmationCode(),
    ]);
  });
});
