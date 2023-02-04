import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../../screens/Welcome";

import SignUp from "../../screens/SignUp/SignUp";
import LogIn from "../../screens/LogIn/LogIn";

import { AuthParams } from "../../../types";

export const AuthStack = createNativeStackNavigator<AuthParams>();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator initialRouteName="Welcome">
      <AuthStack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />

      {/* Sign Up Flow */}
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerTitle: "Sign up" }}
      />

      {/* Log In Flow */}
      <AuthStack.Screen
        name="LogIn"
        component={LogIn}
        options={{ headerTitle: "Log in" }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
