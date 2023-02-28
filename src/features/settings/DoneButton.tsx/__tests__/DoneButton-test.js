import { mount, ReactWrapper, shallow } from "enzyme";
import { Provider } from "react-redux";
import { fireEvent, render } from "@testing-library/react-native";
import { extendTheme, NativeBaseProvider } from "native-base";
import configureStore, { MockStore } from "redux-mock-store";
import thunk from "redux-thunk";
import DoneButton from "../DoneButton";
import { NavigationContainer } from "@react-navigation/native";

//theme and inset stuff to get the nativebaseprovider to work
const newColorTheme = {
  brand: {
    900: "#5B8DF6",
    800: "#ffffff",
    700: "#cccccc",
  },
};

const theme = extendTheme({
  colors: newColorTheme,
});

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

describe("DoneButton", () => {
  const getValuesMock = jest.fn();
  const valueName = "email";
  const navigation = { goBack: jest.fn() };
  let store;
  let wrapper;

  //not sure if this is correct
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

  beforeEach(() => {
    store = configureStore([thunk])({ settings: initialState });
    wrapper = render(
      <NativeBaseProvider theme={theme} initialWindowMetrics={inset}>
        <Provider store={store}>
          <NavigationContainer>
            <DoneButton
              disabled={false}
              getValues={getValuesMock}
              valueName={valueName}
            />
          </NavigationContainer>
        </Provider>
      </NativeBaseProvider>
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
