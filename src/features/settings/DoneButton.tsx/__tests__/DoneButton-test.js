import { mount, ReactWrapper, shallow } from "enzyme";
import { Provider } from "react-redux";
import { NativeBaseProvider } from "native-base";
import configureStore, { MockStore } from "redux-mock-store";
import thunk from "redux-thunk";
import DoneButton from "../DoneButton";
import { NavigationContainer } from "@react-navigation/native";

describe("DoneButton", () => {
  const getValuesMock = jest.fn();
  const valueName = "email";
  const navigation = { goBack: jest.fn() };
  let store;
  let wrapper;

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
    wrapper = shallow(
      <NavigationContainer>
        <DoneButton
          disabled={false}
          getValues={getValuesMock}
          valueName={valueName}
        />
      </NavigationContainer>
    );
  });

  it("renders correctly", () => {
    wrapper = shallow(
      <DoneButton
        disabled={false}
        getValues={getValuesMock}
        valueName={valueName}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  //   it("dispatches setSettings action when pressed", async () => {
  //     const mockPayload = { email: "test@test.com" };
  //     getValuesMock.mockReturnValue("test@test.com");
  //     store.dispatch = jest.fn().mockResolvedValueOnce(mockPayload);
  //     wrapper.find("Button").simulate("click");

  //     expect(store.dispatch).toHaveBeenCalledWith(setSettings(mockPayload));
  //     expect(navigation.goBack).toHaveBeenCalled();
  //   });

  it("disables button when disabled prop is true", () => {
    const disabledWrapper = shallow(
      <DoneButton
        disabled={true}
        getValues={getValuesMock}
        valueName={valueName}
      />
    );

    const button = disabledWrapper.find("Button");
    expect(button.props().disabled).toBe(true);
  });
});
