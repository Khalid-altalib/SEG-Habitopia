import React from "react";
import { render } from "@testing-library/react-native";
import SubmitButton from "./SubmitButton";
import TestingWrapper from "@app/testingWrapper";
import configureStore from "redux-mock-store";
import { useSelector } from "react-redux";

const mockStore = configureStore([]);

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

describe("SubmitButton", () => {
  it("renders correctly", () => {
    (useSelector as jest.Mock).mockReturnValue({
      loading: false,
    });

    const store = mockStore({});
    const handleSubmit = jest.fn();

    const wrapper = render(
      <TestingWrapper store={store}>
        <SubmitButton handleSubmit={handleSubmit} />
      </TestingWrapper>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
