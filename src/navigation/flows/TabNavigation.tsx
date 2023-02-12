import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../../screens/Home";
import Explore from "../../screens/Explore";
import Leaderboard from "../../screens/Leaderboard";
import Profile from "../../screens/Profile";
import { ProfileParams } from "../../../types";
import ChatNavigation from "./ChatNavigation";
import { useAppSelector } from "../../app/hooks";

const Tab = createBottomTabNavigator<ProfileParams>();

const TabNavigation = () => {
  const { headerOption } = useAppSelector((store) => store.chats);
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Chats"
        component={ChatNavigation}
        options={{ headerShown: headerOption }}
      />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Leaderboard" component={Leaderboard} />
      <Tab.Screen name="You" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigation;