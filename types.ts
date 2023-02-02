import type { CompositeNavigationProp } from "@react-navigation/native";
import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import Welcome from "./src/screens/Welcome";
import SignUp from "./src/screens/SignUp/SignUp";
import LogIn from "./src/screens/LogIn/LogIn";
import Home from "./src/screens/Home";

export type RootStackParams = {
  Welcome: undefined;
  SignUp: undefined;
  LogIn: undefined;
  Home: undefined;
};

export type ProfileScreenNavigationProp =
  NativeStackNavigationProp<RootStackParams>;
