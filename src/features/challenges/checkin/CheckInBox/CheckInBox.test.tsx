// Importing necessary modules
import { render } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import CheckInBox from "./CheckInBox";
import challengesMockState from "@features/challenges/challengesMockState";

// Describing a test suite for the CheckInBox component
describe("CheckInBox", () => {
  // Setting up the mock state for the test
  const mockState = {
    challenges: challengesMockState,
    checkInSnippetItem: {
      challenge: challengesMockState.challenges[0],
      endDate: "",
      chatId: "",
    },
  };
  // Creating a mock store using the mock state
  const mockStore = configureStore([thunk])(mockState);
  // Setting up the props for the component
  const props = {
    checkInSnippetItem: mockState.checkInSnippetItem,
  };

  it("renders the check-in box correctly", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <CheckInBox {...props} />
      </TestingWrapperNavigation>
    );

    // Checking if the component matches the snapshot
    expect(component).toMatchSnapshot();
  });

  it("finds the check-in box", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <CheckInBox {...props} />
      </TestingWrapperNavigation>
    );

    // Finding the check-in box by its test ID
    const box = component.getByTestId("checkInBox");

    // Asserting that the box is defined
    expect(box).toBeDefined();
  });
});
