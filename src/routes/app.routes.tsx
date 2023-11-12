import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import History from "../screens/History";
import Profile from "../screens/Profile";
import Exercise from "../screens/Exercise";
import HomeSvg from "../assets/home.svg";
import HistorySvg from "../assets/history.svg";
import ProfileSvg from "../assets/profile.svg";
import { useTheme } from "native-base";

type TabRoutes = {
  Home: undefined;
  History: undefined;
  Profile: undefined;
  Exercise: undefined;
};

export type TabNavigatorRoutesProps = BottomTabNavigationProp<TabRoutes>;

const Stack = createBottomTabNavigator<TabRoutes>();

export function AppRoutes() {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.green[500],
        tabBarInactiveTintColor: colors.gray[300],
        tabBarStyle: {
          backgroundColor: colors.gray[600],
          borderTopWidth: 0,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={30} height={30} />
          ),
        }}
      />

      <Stack.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <HistorySvg fill={color} width={30} height={30} />
          ),
        }}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileSvg fill={color} width={30} height={30} />
          ),
        }}
      />

      <Stack.Screen
        name="Exercise"
        component={Exercise}
        options={{ tabBarButton: () => null }}
      />
    </Stack.Navigator>
  );
}
