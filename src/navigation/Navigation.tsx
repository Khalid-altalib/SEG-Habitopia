import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import MainNavigation from "./flows/MainNavigation";
import AuthNavigation from "./flows/AuthNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

type Props = {};

export const Stack = createNativeStackNavigator();

const Navigation = (props: Props) => {
  let isAuthenticated: boolean = false; // BACKEND PLACEHOLDER

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        {isAuthenticated ? <MainNavigation /> : <AuthNavigation />}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
