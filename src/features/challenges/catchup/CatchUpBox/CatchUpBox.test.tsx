import { fireEvent, render, screen } from "@testing-library/react-native";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import TestingWrapperNavigation from "@app/testingWrapperWithNavigation";
import CatchUpBox from "./CatchUpBox";
import { NavigationContainer } from "@react-navigation/native";
import TestingWrapper from "@app/testingWrapper";
import { extendTheme, NativeBaseProvider } from "native-base";

describe("CatchUpBox", () => {
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

    expect(component).toMatchSnapshot();
  });

  it("finds the catch-up box", async () => {
    const component = render(
      <TestingWrapperNavigation store={mockStore}>
        <CatchUpBox {...props} />
      </TestingWrapperNavigation>
    );

    const box = component.getByTestId("catchUpBox");

    expect(box).toBeDefined();
  });

  //   it("the 'like' button changes state when pressed", async () => {
  //     const theme = extendTheme({});
  //     const inset = {
  //       frame: { x: 0, y: 0, width: 0, height: 0 },
  //       insets: { top: 0, left: 0, right: 0, bottom: 0 },
  //     };
  //     const component = render(
  //       <TestingWrapperNavigation store={mockStore}>
  //         <NativeBaseProvider theme={theme} initialWindowMetrics={inset}>
  //           <CatchUpBox {...props} />
  //         </NativeBaseProvider>
  //       </TestingWrapperNavigation>
  //     );

  //     const button = screen.getByRole("button");

  //     setTimeout(() => fireEvent(button, "press"), 1000);

  //     const box = component.getByTestId("catchUpBox");

  //     expect(box).toMatchObject(<CatchUpBox isUserLiked={true} />);
  //   });
});
