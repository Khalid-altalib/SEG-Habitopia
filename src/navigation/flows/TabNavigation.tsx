import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../../screens/application/HomeScreen/HomeScreen";
import Explore from "../../screens/application/ExploreScreen/ExploreScreen";
import Leaderboard from "../../screens/application/LeaderboardScreen/LeaderboardScreen";
import Profile from "../../screens/application/ProfileScreen/ProfileScreen";
import Settings from "../../screens/application/SettingsScreen/SettingsScreen";
import { NavigationParams } from "../../../types";
import ChatNavigation from "./ChatNavigation";
import { useSelector } from "../../app/hooks";
import { selectUser } from "../../app/selectors";

const Tab = createBottomTabNavigator<NavigationParams>();

const TabNavigation = () => {
  const localUser = useSelector(selectUser);

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Chats"
        component={ChatNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Leaderboard" component={Leaderboard} />
      <Tab.Screen
        name="You"
        component={Profile}
        initialParams={{ userId: localUser!.userId }}
        options={() => ({ title: "You" })}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
