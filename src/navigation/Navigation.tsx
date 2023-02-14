import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";

import TabNavigation from "./flows/TabNavigation";
import AuthNavigation from "./flows/AuthNavigation";
import ChatNavigation from "./flows/ChatNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LocalUser } from "../../types";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logInUserFromStorage } from "../features/auth/authSlice";

import { RootParams } from "../../types";
import ProfileComponent from "../screens/Profile";
import Modal from "../screens/Modal";
import ChallengeModal from "../features/challenges/ChallengeModal/ChallengeModal";
import { AsyncStorage } from "@aws-amplify/core";

const Stack = createNativeStackNavigator<RootParams>();

const Navigation = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(logInUserFromStorage());
  }, []);

  const localUser = useAppSelector((state) => state.auth!.user);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {localUser ? (
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
