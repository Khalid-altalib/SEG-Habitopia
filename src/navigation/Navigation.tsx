import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import MainNavigation from "./flows/MainNavigation";
import AuthNavigation from "./flows/AuthNavigation";
import ChatNavigation from "./flows/ChatNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootParams } from "../../types";

const Stack = createNativeStackNavigator<RootParams>()

const Navigation = () => {
  let isAuthenticated: boolean = true; // BACKEND PLACEHOLDER

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isAuthenticated ?
          (<Stack.Screen name="Existing" component={MainNavigation}/>) :
          (<Stack.Screen name="Auth" component={AuthNavigation}/>)
        }
        <Stack.Screen name='Other' component={ChatNavigation}/>
      </Stack.Navigator>
      
      
    </NavigationContainer>
  );
};

export default Navigation;
