import { render } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import challengesMockState from "@features/challenges/challengesMockState";
import CheckInWidget from "./CheckInWidget";

describe("CheckInWidget", () => {
  const mockState = {
    challenges: challengesMockState,
  };
  const mockStore = configureStore([thunk])(mockState);

  it("renders the check-in widget correctly", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <CheckInWidget />
      </TestingWrapperNavigation>
    );

    expect(component).toMatchSnapshot();
  });

  it("finds the check-in widget", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <CheckInWidget />
      </TestingWrapperNavigation>
    );

    const box = component.getByTestId("checkInWidget");

    expect(box).toBeDefined();
  });
});
