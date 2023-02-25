import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../../screens/Welcome/Welcome";

import SignUp from "../../screens/SignUp/SignUp";
import SignIn from "../../screens/SignIn";

import { AuthParams } from "../../../types";
import Password from "../../screens/SignUp/Password";
import ConfirmationCode from "../../screens/SignUp/ConfirmationCode";
import Name from "../../screens/SignUp/Name";
import EmailAddress from "../../screens/SignUp/EmailAddress";
import SelectAvatar from "../../screens/SignUp/SelectAvatar";
import SelectInstagram from "../../screens/SignUp/SelectInstagram";
import SelectChallenges from "../../screens/SignUp/SelectChallenges";

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
        name="Password"
        component={Password}
        options={{
          headerTitle: "Password",
        }}
      />
      <AuthStack.Screen
        name="ConfirmationCode"
        component={ConfirmationCode}
        options={{
          headerTitle: "Confirmation code",
        }}
      />
      <AuthStack.Screen
        name="Name"
        component={Name}
        options={{
          headerTitle: "Name",
        }}
      />
      <AuthStack.Screen
        name="EmailAddress"
        component={EmailAddress}
        options={{
          headerTitle: "Email address",
        }}
      />
      <AuthStack.Screen
        name="SelectAvatar"
        component={SelectAvatar}
        options={{
          headerTitle: "Avatar",
        }}
      />
      <AuthStack.Screen
        name="SelectInstagram"
        component={SelectInstagram}
        options={{
          headerTitle: "Instagram handle",
        }}
      />
      <AuthStack.Screen
        name="SelectChallenges"
        component={SelectChallenges}
        options={{
          headerTitle: "Challenges",
        }}
      />

      {/* Sign In Flow */}
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerTitle: "Sign in" }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
