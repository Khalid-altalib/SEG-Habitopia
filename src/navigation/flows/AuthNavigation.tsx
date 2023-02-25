// React Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Habitopia
import { AuthParams } from "../../../types";

import WelcomeScreen from "../../screens/authentication/WelcomeScreen";
import PasswordScreen from "../../screens/authentication/PasswordScreen";
import ConfirmationCodeScreen from "../../screens/authentication/ConfirmationCodeScreen";
import NameScreen from "../../screens/authentication/NameScreen";
import EmailScreen from "../../screens/authentication/EmailScreen";
import SelectAvatarScreen from "../../screens/authentication/SelectAvatarScreen";
import SelectChallengesScreen from "../../screens/authentication/SelectChallengesScreen";
import SelectInstagramScreen from "../../screens/authentication/SelectInstagramScreen";
import SignInScreen from "../../screens/authentication/SignInScreen";

export const AuthStack = createNativeStackNavigator<AuthParams>();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator initialRouteName="Welcome">
      <AuthStack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />

      {/* Sign Up Flow */}
      <AuthStack.Screen
        name="Password"
        component={PasswordScreen}
        options={{
          headerTitle: "Password",
        }}
      />
      <AuthStack.Screen
        name="ConfirmationCode"
        component={ConfirmationCodeScreen}
        options={{
          headerTitle: "Confirmation code",
        }}
      />
      <AuthStack.Screen
        name="Name"
        component={NameScreen}
        options={{
          headerTitle: "Name",
        }}
      />
      <AuthStack.Screen
        name="EmailAddress"
        component={EmailScreen}
        options={{
          headerTitle: "Email address",
        }}
      />
      <AuthStack.Screen
        name="SelectAvatar"
        component={SelectAvatarScreen}
        options={{
          headerTitle: "Avatar",
        }}
      />
      <AuthStack.Screen
        name="SelectInstagram"
        component={SelectInstagramScreen}
        options={{
          headerTitle: "Instagram handle",
        }}
      />
      <AuthStack.Screen
        name="SelectChallenges"
        component={SelectChallengesScreen}
        options={{
          headerTitle: "Challenges",
        }}
      />

      {/* Sign In Flow */}
      <AuthStack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerTitle: "Sign in" }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
