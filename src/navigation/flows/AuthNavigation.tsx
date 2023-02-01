import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../../screens/Welcome";
import SignUp from "../../screens/SignUp";
import LogIn from "../../screens/LogIn";

import { Stack } from "../Navigation";

const AuthNavigation = () => {
  return (
    <>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerTitle: "Sign up" }}
      />
      <Stack.Screen
        name="LogIn"
        component={LogIn}
        options={{ headerTitle: "Log in" }}
      />
    </>
  );
};

export default AuthNavigation;
