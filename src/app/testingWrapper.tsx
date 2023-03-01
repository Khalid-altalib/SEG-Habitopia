import { NavigationContainer } from "@react-navigation/native";
import { extendTheme, NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

const theme = extendTheme({});

import React from "react";

type Props = {
  store: any;
  children: React.ReactNode;
};

const TestingWrapper = (props: Props) => {
  const { store, children } = props;

  return (
    <NativeBaseProvider theme={theme} initialWindowMetrics={inset}>
      <Provider store={store}>
        <NavigationContainer>{children}</NavigationContainer>
      </Provider>
    </NativeBaseProvider>
  );
};

export default TestingWrapper;
