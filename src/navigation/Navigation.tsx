import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import TabNavigation from "./flows/TabNavigation";
import AuthNavigation from "./flows/AuthNavigation";
import ChatNavigation from "./flows/ChatNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LocalUser } from "../../types";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logInUserFromStorage } from "../features/auth/authSlice";

import { RootParams } from "../../types";
import Modal from "../screens/Modal";
import ChallengeModal from "../features/challenges/ChallengeModal/ChallengeModal";

const Stack = createNativeStackNavigator<RootParams>();

const Navigation = () => {
  const dispatch = useAppDispatch();
  dispatch(logInUserFromStorage());

  // const localUser: LocalUser | undefined = useAppSelector(
  //   (state) => state.auth.user
  // );

  const localUser = false;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {true ? (
          <Stack.Screen
            name="Existing"
            component={TabNavigation}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Auth"
            component={AuthNavigation}
            options={{ headerShown: false }}
          />
        )}
        <Stack.Screen name="Chat" component={ChatNavigation} />
        <Stack.Screen
          name="Modal"
          component={Modal}
          options={{ animation: "slide_from_bottom" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
