// Importing testing-related dependencies
import { render } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";

// Imports the component to be tested
import CatchUpBox from "./CatchUpBox";

// Define a test suite for the CatchUpBox component
describe("CatchUpBox", () => {
  // Create a mock store using configureStore and the thunk middleware
  const mockStore = configureStore([thunk])();

  const props = {
    isUserLiked: false,
  };

  it("renders the catch-up box correctly", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <CatchUpBox {...props} />
      </TestingWrapperNavigation>
    );

    // Take a snapshot of the rendered component and check that it matches the previous snapshot
    expect(component).toMatchSnapshot();
  });

  it("finds the catch-up box", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <CatchUpBox {...props} />
      </TestingWrapperNavigation>
    );

    // Find the catch-up box by its test ID and check that it is defined
    const box = component.getByTestId("catchUpBox");
    expect(box).toBeDefined();
  });
});
