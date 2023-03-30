import React from "react";
import { render } from "@testing-library/react-native";
import ConfirmationCodeForm from "./ConfirmationCodeForm";
import configureStore from "redux-mock-store";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import { useSelector } from "react-redux";

const mockStore = configureStore([]);

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

describe("ConfirmationCodeForm", () => {
  let wrapper: any;
  const store = mockStore({});

  beforeEach(() => {
    (useSelector as jest.Mock).mockReturnValue({ error: null, loading: false });
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
