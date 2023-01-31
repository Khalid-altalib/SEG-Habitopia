import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./flows/MainNavigation";
import AuthNavigation from "./flows/AuthNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Dummy = () => {
  return <div>#</div>;
};

const RootNavigator = () => {
  const isSignedIn = false;

  return isSignedIn ? <MainNavigation /> : <AuthNavigation />;
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
