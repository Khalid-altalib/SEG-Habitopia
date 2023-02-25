import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";

import TabNavigation from "./flows/TabNavigation";
import AuthNavigation from "./flows/AuthNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "../app/hooks";
import { logInUserFromStorage } from "../features/auth/authSlice";

import { RootParams } from "../../types";
import ProfileScreen from "@screens/application/ProfileScreen";
import ChallengePromptScreen from "@screens/application/ChallengePromptScreen";
import SettingsScreen from "@screens/application/SettingsScreen";
import SettingDetailsScreen from "@screens/application/SettingsDetailsScreen";
import ChallengeModal from "@features/challenges/ChallengeModal/ChallengeModal";
import { AsyncStorage } from "@aws-amplify/core";
import { selectUser } from "../app/selectors";

const Stack = createNativeStackNavigator<RootParams>();

const Navigation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logInUserFromStorage());
  }, []);

  const localUser = useSelector(selectUser);

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
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen
          name="ChallengePrompt"
          component={ChallengePromptScreen}
          options={{
            animation: "slide_from_bottom",
            headerBackVisible: false,
            title: "Join Challenge?",
          }}
        />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen
          name="SettingDetails"
          component={SettingDetailsScreen}
          options={{
            headerTitle: "Edit",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
