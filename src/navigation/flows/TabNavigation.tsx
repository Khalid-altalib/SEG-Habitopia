import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Home from "../../screens/application/HomeScreen/HomeScreen";
import Explore from "../../screens/application/ExploreScreen/ExploreScreen";
import Leaderboard from "../../screens/application/LeaderboardScreen/LeaderboardScreen";
import Profile from "../../screens/application/ProfileScreen/ProfileScreen";
import { NavigationParams } from "../../../types";
import ChatNavigation from "./ChatNavigation";
import { useSelector } from "../../app/hooks";
import { selectUser } from "../../app/selectors";
import { theme } from "native-base";

const Tab = createBottomTabNavigator<NavigationParams>();

const TabNavigation = () => {
  const localUser = useSelector(selectUser);

  const ICON_SIZE: number = 20;
  const ICON_COLOR: string = theme.colors.coolGray[400];

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Entypo name="home" size={ICON_SIZE} color={ICON_COLOR} />
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={ChatNavigation}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Entypo name="chat" size={ICON_SIZE} color={ICON_COLOR} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="explore" size={ICON_SIZE} color={ICON_COLOR} />
          ),
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={Leaderboard}
        options={{
          tabBarIcon: () => (
            <MaterialIcons
              name="leaderboard"
              size={ICON_SIZE}
              color={ICON_COLOR}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{ userId: localUser!.userId }}
        options={{
          tabBarIcon: () => (
            <Ionicons name="person" size={ICON_SIZE} color={ICON_COLOR} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
