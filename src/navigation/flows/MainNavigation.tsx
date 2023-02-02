import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../../screens/Home";

const MainStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      {/* <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      /> */}
    </Tab.Navigator>
  );
};

export default MainNavigation;
