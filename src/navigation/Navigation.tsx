import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import MainNavigation from "./flows/MainNavigation";
import AuthNavigation from "./flows/AuthNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

type Props = {};

const Navigation = (props: Props) => {
  let isAuthenticated: boolean = true; // BACKEND PLACEHOLDER

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default Navigation;
