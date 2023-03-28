import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import SignInForm from "./SignInForm";
import TestingWrapper from "@app/testingWrapper";
import { useSelector } from "react-redux";

const mockStore = configureStore([]);

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

describe("SignInForm", () => {
  it("should dispatch the logInUser action when the form is submitted", async () => {
    (useSelector as jest.Mock).mockReturnValue({ error: null, loading: false });
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
    await fireEvent.press(submitButton);

    await waitFor(() => {
      expect(store.getActions()[0].type).toEqual("auth/addLogInData");
    });
  });
});
