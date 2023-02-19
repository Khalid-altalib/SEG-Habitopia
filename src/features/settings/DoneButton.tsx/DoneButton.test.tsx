import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import { NativeBaseProvider } from "native-base";
import configureStore, { MockStore } from "redux-mock-store";
import thunk from "redux-thunk";
import { setSettings, SettingsState } from "../settingsSlice";
import DoneButton from "./DoneButton";
import { AnyAction } from "redux";

describe("DoneButton", () => {
  const getValuesMock = jest.fn();
  const valueName = "email";
  const navigation = { goBack: jest.fn() } as any;
  let store: MockStore;
  let wrapper: ReactWrapper;

  const initialState: SettingsState = {
    settings: {
      email: "example@gmail.com",
      password: "",
      notifications: true,
      name: "John Doe",
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
    wrapper = mount(
      <NativeBaseProvider>
        <Provider store={store}>
          <DoneButton
            disabled={false}
            getValues={getValuesMock}
            valueName={valueName}
          />
        </Provider>
      </NativeBaseProvider>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
    wrapper.unmount();
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("dispatches setSettings action when pressed", async () => {
    const mockPayload = { email: "test@test.com" };
    getValuesMock.mockReturnValue("test@test.com");
    store.dispatch = jest.fn().mockResolvedValueOnce(mockPayload);
    const button = wrapper.find("Button");
    console.log(button);
    await button.simulate("mouseDown");

    expect(store.dispatch).toHaveBeenCalledWith(setSettings(mockPayload));
    expect(navigation.goBack).toHaveBeenCalled();
  });

  //   it("disables button when disabled prop is true", () => {
  //     const disabledWrapper = mount(
  //       <NativeBaseProvider>
  //         <Provider store={store}>
  //           <DoneButton
  //             disabled={true}
  //             getValues={getValuesMock}
  //             valueName={valueName}
  //           />
  //         </Provider>
  //       </NativeBaseProvider>
  //     );

  //     const button = disabledWrapper.find("Button");
  //     expect(button.props().disabled).toBe(true);
  //   });
});
