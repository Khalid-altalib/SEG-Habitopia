// Importing testing-related dependencies
import { render } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import CatchUpSlider from "./CatchUpSlider";

describe("CatchUpSlider", () => {
  // create a mock store using redux-mock-store and thunk middleware
  const mockStore = configureStore([thunk])();

  it("renders the catch-up slider correctly", async () => {
    // render the CatchUpSlider component inside a TestingWrapperNavigation component
    // with the mock store as a prop, and assert that it matches the snapshot
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <CatchUpSlider />
      </TestingWrapperNavigation>
    );
    expect(component).toMatchSnapshot();
  });

  it("finds the catch-up slider", async () => {
    // render the CatchUpSlider component inside a TestingWrapperNavigation component
    // with the mock store as a prop, and assert that the element with the "catchUpSlider" testID is defined
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <CatchUpSlider />
      </TestingWrapperNavigation>
    );
    const slider = component.getByTestId("catchUpSlider");
    expect(slider).toBeDefined();
  });
});
