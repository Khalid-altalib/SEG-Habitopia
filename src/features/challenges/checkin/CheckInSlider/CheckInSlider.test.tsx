import { render } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import CheckInSlider from "./CheckInSlider";
import challengesMockState from "@features/challenges/challengesMockState";

describe("CheckInSlider", () => {
  const mockState = {
    challenges: challengesMockState,
    checkInSnippetItem: {
      challenge: challengesMockState.challenges[0],
      endDate: "",
      chatId: "",
    },
    sendCheckIn: {
      loading: false,
      error: "",
    },
    fetchCheckInSnippet: {
      loading: false,
      error: "",
    },
  };
  const mockStore = configureStore([thunk])(mockState);

  it("renders the check-in slider correctly", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <CheckInSlider />
      </TestingWrapperNavigation>
    );

    expect(component).toMatchSnapshot();
  });

  it("finds the check-in slider", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <CheckInSlider />
      </TestingWrapperNavigation>
    );

    const box = component.getByTestId("checkInSlider");

    expect(box).toBeDefined();
  });
});
