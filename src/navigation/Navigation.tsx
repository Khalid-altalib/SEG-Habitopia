import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import MainNavigation from "./flows/MainNavigation";
import AuthNavigation from "./flows/AuthNavigation";

function Navigation() {
  let isAuthenticated: boolean = false; // BACKEND PLACEHOLDER

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
}

export default Navigation;
