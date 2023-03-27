import { render } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import PasswordSetting from "./PasswordSetting";
import settingsMockState from "../settingsMockState";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";

describe("PasswordSetting", () => {
  const mockState = {
    settings: settingsMockState,
  };
  const mockStore = configureStore([thunk])(mockState);

  it("renders correctly", () => {
    const tree = render(
      <TestingWrapperNavigation store={mockStore}>
        <PasswordSetting />
      </TestingWrapperNavigation>
    );

    expect(tree).toMatchSnapshot();
  });
});
