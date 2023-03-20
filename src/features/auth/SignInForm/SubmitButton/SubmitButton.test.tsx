import React from "react";
import { render } from "@testing-library/react-native";
import SubmitButton from "./SubmitButton";
import TestingWrapper from "@app/testingWrapper";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

describe("SubmitButton", () => {
  it("renders correctly", () => {
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
