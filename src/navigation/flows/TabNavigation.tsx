import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../../screens/Home";
import Explore from "../../screens/Explore";
import Leaderboard from "../../screens/Leaderboard";
import Profile from "../../screens/Profile";
import Settings from "../../screens/Settings/Settings";
import { NavigationParams } from "../../../types";
import ChatNavigation from "./ChatNavigation";
import { useAppSelector } from "../../app/hooks";

const Tab = createBottomTabNavigator<NavigationParams>();

const TabNavigation = () => {
  const localUser = useAppSelector((state) => state.auth!.user);

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="ChatList"
        component={ChatNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Leaderboard" component={Leaderboard} />
      {/* <Tab.Screen
        name="You"
        component={Profile}
        initialParams={{ userId: localUser!.userId }}
        options={() => ({ title: "You" })}
      /> */}
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
