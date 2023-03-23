import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { extendTheme, NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Store } from "redux";
import ChallengePrompt from "@screens/application/ChallengePromptScreen";
import ChallengeBoxes from "@features/challenges/ChallengeBoxes/ChallengeBoxes";

const Stack = createNativeStackNavigator();

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

const theme = extendTheme({});

type Props = {
  store: Store;
  children: React.ReactNode;
};

type RouteProps = {
  route: any;
};

const TestScreen = ({ route }: RouteProps) => {
  const { children } = route.params;

  return <>{children}</>;
};

const TestingWrapperNavigation = (props: Props) => {
  const { store, children } = props;

  return (
    <NativeBaseProvider theme={theme} initialWindowMetrics={inset}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="TestScreen"
              component={TestScreen}
              initialParams={{ children }}
            />
            <Stack.Screen
              name="ChallengePrompt"
              component={ChallengePrompt}
              options={{
                animation: "slide_from_bottom",
                headerBackVisible: false,
                title: "Join Challenge?",
              }}
            />
            <Stack.Screen
              name="Explore"
              component={ChallengeBoxes}
              options={{
                animation: "slide_from_bottom",
                headerBackVisible: false,
                title: "Explore",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </NativeBaseProvider>
  );
};

export default TestingWrapperNavigation;
