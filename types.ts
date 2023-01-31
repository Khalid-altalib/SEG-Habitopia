import type { CompositeNavigationProp } from "@react-navigation/native";
import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  SignUp: undefined;
  LogIn: undefined;
};

export type ProfileScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
