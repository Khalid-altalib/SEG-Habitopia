import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import SignInForm from "./SignInForm";
import { logInUser } from "../authSlice";
import TestingWrapper from "@app/testingWrapper";
import SubmitButton from "./SubmitButton";

const mockStore = configureStore([]);

describe("SignInForm", () => {
  it("should dispatch the logInUser action when the form is submitted", async () => {
    const store = mockStore({});
    const wrapper = render(
      <TestingWrapper store={store}>
        <SignInForm />
      </TestingWrapper>
    );

    const emailInput = wrapper.getByTestId("email-input");
    const passwordInput = wrapper.getByTestId("password-input");
    const submitButton = wrapper.getByText("Continue");

    fireEvent.changeText(emailInput, "tareitaa@outlook.com");
    fireEvent.changeText(passwordInput, "Password.123");
    fireEvent.press(submitButton);

    await waitFor(() => {
      expect(store.getActions()[0].type).toEqual("auth/addLogInData");
    });
  });
});
