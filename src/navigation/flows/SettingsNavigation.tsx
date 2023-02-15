import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SettingsParams } from "../../../types";
import Settings from "../../screens/Settings/Settings";
import SettingDetails from "../../screens/Settings/SettingDetails";

export const SettingsStack = createNativeStackNavigator<SettingsParams>();

const SettingsNavigation = () => {
  return (
    <SettingsStack.Navigator initialRouteName="Settings">
      <SettingsStack.Screen name="Settings" component={Settings} />
      <SettingsStack.Screen
        name="SettingDetails"
        component={SettingDetails}
        options={{
          headerTitle: "Edit",
        }}
      />
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigation;
