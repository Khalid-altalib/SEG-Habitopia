// React
import React from "react";

// React Native Testing Library
import { render, screen } from "@testing-library/react-native";

// Redux
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

// Native Base
import { NativeBaseProvider } from "native-base";

// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Habitopia
import ExploreScreen from "@screens/application/ExploreScreen";

it("Renders correctly.", () => {
  const MOCK_STORE = configureStore([thunk])({});

  const Stack = createNativeStackNavigator();

  render(
    <NativeBaseProvider>
      <Provider store={MOCK_STORE}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </NativeBaseProvider>
  );

  expect(screen.toJSON()).toMatchSnapshot();
});
