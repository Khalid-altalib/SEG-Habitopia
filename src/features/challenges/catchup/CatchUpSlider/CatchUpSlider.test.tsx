import { render } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import CatchUpSlider from "./CatchUpSlider";

describe("CatchUpSlider", () => {
  const mockStore = configureStore([thunk])();

  it("renders the catch-up slider correctly", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <CatchUpSlider />
      </TestingWrapperNavigation>
    );

    expect(component).toMatchSnapshot();
  });

  it("finds the catch-up slider", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <CatchUpSlider />
      </TestingWrapperNavigation>
    );

    const box = component.getByTestId("catchUpSlider");

    expect(box).toBeDefined();
  });
});
