import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import PasswordForm from "./PasswordForm";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import thunk from "redux-thunk";
import { addSignUpData } from "../authSlice";

const mockStore = configureStore([thunk]);
const store = mockStore({});

describe("PasswordForm", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = render(
      <TestingWrapperNavigation store={store}>
        <PasswordForm />
      </TestingWrapperNavigation>
    );
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("dispatches addSignUpData when the user submits the form", async () => {
    // Simulate user input
    const passwordInput = wrapper.getByTestId("password-input");
    fireEvent.changeText(passwordInput, "Password123");

    // Simulate submit button press
    const submitButton = wrapper.getByText("Continue");
    await fireEvent.press(submitButton);

    // Wait for any asynchronous actions to finish
    await waitFor(() => {
      expect(store.getActions()).toContainEqual(
        addSignUpData({ password: "Password123" })
      );
    });
  });
});
