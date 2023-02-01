import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../../screens/Home";

const MainNavigation = () => {
  const MainStack = createNativeStackNavigator();

  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigation;
