import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";

import TabNavigation from "./flows/TabNavigation";
import AuthNavigation from "./flows/AuthNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "../app/hooks";
import { logInUserFromStorage } from "../features/auth/authSlice";

import { RootParams } from "../../types";
import ProfileComponent from "../screens/application/ProfileScreen/ProfileScreen";
import ChallengePrompt from "../screens/application/ChallengePromptScreen/ChallengePromptScreen";
import SettingDetails from "../screens/application/SettingsDetailsScreen/SettingDetailsScreen";
import Settings from "../screens/application/SettingsScreen/SettingsScreen";
import { selectUser } from "../app/selectors";
import ChatDetailsScreen from "@screens/chat/ChatDetailsScreen/ChatDetailsScreen";

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
        <Stack.Screen name="Profile" component={ProfileComponent} />
        <Stack.Screen
          name="ChallengePrompt"
          component={ChallengePrompt}
          options={{
            animation: "slide_from_bottom",
            headerBackVisible: false,
            title: "Join Challenge?",
          }}
        />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen
          name="SettingDetails"
          component={SettingDetails}
          options={{
            headerTitle: "Edit",
          }}
        />
        <Stack.Screen
          name="ChatDetails"
          component={ChatDetailsScreen}
          options={{ headerTitle: "Chat Info" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
