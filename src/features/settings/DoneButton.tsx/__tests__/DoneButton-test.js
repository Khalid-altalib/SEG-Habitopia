import { Provider } from "react-redux";
import { render } from "@testing-library/react-native";
import { extendTheme, NativeBaseProvider } from "native-base";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import DoneButton from "../DoneButton";
import { NavigationContainer } from "@react-navigation/native";

const initialState = {
  settings: {
    email: "example@gmail.com",
    password: "",
    notifications: true,
    name: "John Doe",
    biography: "hello my name is john doe and i have severe autism",
  },
  fetchSettings: {
    loading: false,
    error: "",
  },
  setSettings: {
    loading: false,
    error: "",
  },
};

describe("DoneButton", () => {
  const getValuesMock = jest.fn();
  const valueName = "email";
  const navigation = { goBack: jest.fn() };
  let store;
  let wrapper;

  //not sure if this is correct

  beforeEach(() => {
    store = configureStore([thunk])({ settings: initialState });
    wrapper = render(
      <DoneButton
        disabled={false}
        getValues={getValuesMock}
        valueName={valueName}
      />
    );
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
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

  it("finds the done button", async () => {
    const button = wrapper.getByTestId("button");

    expect(button).toBeDefined();
  });
});
