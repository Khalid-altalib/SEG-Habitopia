import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../../screens/Welcome";
import SignUp from "../../screens/SignUp";
import LogIn from "../../screens/LogIn";

const AuthNavigation = () => {
  const AuthStack = createNativeStackNavigator();

  return (
    <AuthStack.Navigator initialRouteName="Welcome">
      <AuthStack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerTitle: "Sign up" }}
      />
      <AuthStack.Screen
        name="LogIn"
        component={LogIn}
        options={{ headerTitle: "Log in" }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
