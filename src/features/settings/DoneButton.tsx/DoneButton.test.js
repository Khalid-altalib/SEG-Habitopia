import { render } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import TestingWrapper from "../../../app/TestingWrapper";
import DoneButton from "./DoneButton";
import initialState from "../settingsInitialStateMock";

const store = configureStore([thunk])({ settings: initialState });

describe("DoneButton", () => {
  const getValuesMock = jest.fn();
  const defaultProps = {
    disabled: false,
    getValues: getValuesMock,
    valueName: "email",
  };

  it("renders correctly", () => {
    const tree = render(
      <TestingWrapper store={store}>
        <DoneButton {...defaultProps} />
      </TestingWrapper>
    );

    expect(tree).toMatchSnapshot();
  });

  it("finds the done button", async () => {
    const tree = render(
      <TestingWrapper store={store}>
        <DoneButton {...defaultProps} />
      </TestingWrapper>
    );

    const button = tree.getByTestId("button");

    expect(button).toBeDefined();
  });

  // it("dispatches setSettings action when pressed", async () => {
  //   const mockPayload = { email: "test@test.com" };
  //   getValuesMock.mockReturnValue("test@test.com");
  //   store.dispatch = jest.fn().mockResolvedValueOnce(mockPayload);

  //   const button = wrapper.getByTestId("button");

  //   await act(async () => {
  //     fireEvent.press(button);
  //   });

  //   // expect(store.dispatch).toHaveBeenCalledWith(setSettings(mockPayload));
  //   // expect(navigation.goBack).toHaveBeenCalled();
  // });
});
