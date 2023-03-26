import { render } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import challengesMockState from "@features/challenges/challengesMockState";
import CatchUpWidget from "./CatchUpWidget";
import CatchUpWidgetLayout from "./CatchUpWidgetLayout";

describe("CatchUpWidget", () => {
  const mockState = {
    challenges: challengesMockState,
  };
  const mockStore = configureStore([thunk])(mockState);

  it("renders the catch-up widget correctly", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <CatchUpWidget />
      </TestingWrapperNavigation>
    );

    expect(component).toMatchSnapshot();
  });

  it("finds the catch-up widget", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <CatchUpWidget />
      </TestingWrapperNavigation>
    );

    const box = component.getByTestId("catchUpWidget");

    expect(box).toBeDefined();
  });
});
