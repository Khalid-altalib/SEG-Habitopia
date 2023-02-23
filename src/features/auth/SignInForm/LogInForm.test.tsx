import {
  render,
  fireEvent,
  waitFor,
  act,
  getByTestId,
} from "@testing-library/react";
import { Provider } from "react-redux";
import LogInForm from "../LogInForm/LogInForm";
import { shallow } from "enzyme";
import React from "react";
import store from "../../../app/store";
import { NativeBaseProvider } from "native-base";
import { Controller } from "react-hook-form";

describe("LogInForm", () => {
  it("contains a submit button", async () => {
    const { getByTestId, queryByTestId } = render(
      <NativeBaseProvider>
        <LogInForm />
      </NativeBaseProvider>
    );
    await act(async () => {
      const buttonInput = getByTestId("submitButton");
      expect(buttonInput).toBeTruthy();
    });
  });
});
// describe("LogInForm", () => {
//   it("contains an email field", async () => {
//     const { getByTestId, queryByTestId } = render(
//       <NativeBaseProvider>
//         <LogInForm onSubmit={jest.fn()} />
//       </NativeBaseProvider>
//     );
//     await act(async () => {
//       const emailInput = getByTestId("email");
//       expect(emailInput).toBeTruthy();
//     });
//   });
// });

// describe("LogInForm", () => {
//   it("submits the login form", async () => {
//     const email = "test@email.com";
//     const password = "password";

//     const { getByPlaceholderText } = render(
//       <NativeBaseProvider>
//         <Provider store={store}>
//           <LogInForm onSubmit={jest.fn()} />
//         </Provider>
//       </NativeBaseProvider>
//     );

//     const emailInput = getByPlaceholderText("Email");
//     const passwordInput = getByPlaceholderText("Password");

//     fireEvent.change(emailInput, { target: { value: email } });
//     fireEvent.change(passwordInput, { target: { value: password } });

//     const submitButton = getByPlaceholderText("Submit");
//     fireEvent.click(submitButton);

//     await waitFor(() => {
//       expect(store.getState().auth.logInData).toEqual({
//         email,
//         password,
//       });
//     });
//   });
// });

// describe("LogInForm", () => {
//   let store;

//   beforeEach(() => {
//     store = configureStore({
//       reducer: {
//         auth: authReducer,
//       },
//     });
//   });

//   it("renders the email controller", async () => {
//     let rendered;
//     await act(async () => {
//       rendered = render(<LogInForm onSubmit={jest.fn()} />);
//     });

//     expect(rendered.getByPlaceholderText("Email")).toBeDefined();
//   });
// });

// describe("LogInForm", () => {
//   it("calls onSubmit when form is submitted", () => {
//     const onSubmit = jest.fn();
//     const { getByText, getByLabelText } = render(
//       <LogInForm onSubmit={onSubmit} />
//     );

//     const usernameInput = getByLabelText("Username");
//     const passwordInput = getByLabelText("Password");
//     const submitButton = getByText("Submit");

//     fireEvent.change(usernameInput, { target: { value: "test-user" } });
//     fireEvent.change(passwordInput, { target: { value: "password" } });
//     fireEvent.click(submitButton);

//     expect(onSubmit).toHaveBeenCalledWith({
//       username: "test-user",
//       password: "password",
//     });
//   });
// });

// describe("LogInForm", () => {
//   it("calls onSubmit function when submit button is clicked", () => {
//     const onSubmit = jest.fn();
//     const wrapper = shallow(<LogInForm onSubmit={onSubmit} />);
//     wrapper.find("form").simulate("submit");
//     expect(onSubmit).toHaveBeenCalled();
//   });
// });
