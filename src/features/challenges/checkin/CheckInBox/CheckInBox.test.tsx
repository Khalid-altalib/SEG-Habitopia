import { render } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import CheckInBox from "./CheckInBox";
import challengesMockState from "@features/challenges/challengesMockState";

describe("CheckInBox", () => {
  const mockState = {
    challenges: challengesMockState,
    checkInSnippetItem: {
      challenge: challengesMockState.challenges[0],
      endDate: "",
      chatId: "",
    },
  };
  const mockStore = configureStore([thunk])(mockState);
  const props = {
    checkInSnippetItem: mockState.checkInSnippetItem,
  };

  it("renders the check-in box correctly", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <CheckInBox {...props} />
      </TestingWrapperNavigation>
    );

    expect(component).toMatchSnapshot();
  });

  it("finds the check-in box", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <CheckInBox {...props} />
      </TestingWrapperNavigation>
    );

    const box = component.getByTestId("checkInBox");

    expect(box).toBeDefined();
  });
});
