import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../../screens/Home";
import Explore from "../../screens/Explore";
import Leaderboard from "../../screens/Leaderboard";
import Profile from "../../screens/Profile";
import ChatList from "../../screens/Chat/ChatList";
import { ProfileParams } from "../../../types";

const Tab = createBottomTabNavigator<ProfileParams>();

const MainNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chats" component={ChatList} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Leaderboard" component={Leaderboard} />
      <Tab.Screen name="You" component={Profile} />
    </Tab.Navigator>
  );
};

export default MainNavigation;
