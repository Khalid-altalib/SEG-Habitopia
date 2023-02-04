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
      <Stack.Navigator >
        {isAuthenticated ?
          (<Stack.Screen name="Existing" component={MainNavigation} options={{headerShown: false}}/>) :
          (<Stack.Screen name="Auth" component={AuthNavigation} options={{headerShown: false}}/>)
        }
        <Stack.Screen name='Chat' component={ChatNavigation}/>
      </Stack.Navigator>
      
      
    </NavigationContainer>
  );
};

export default Navigation;
