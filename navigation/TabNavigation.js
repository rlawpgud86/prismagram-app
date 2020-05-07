import "react-native-gesture-handler";
import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Tabs/Home";
import Profile from "../screens/Tabs/Profile";
import Search from "../screens/Tabs/Search";
import Notifications from "../screens/Tabs/Notifications";
import stackFactory from "./stackFactory";
import MessagesLink from "../components/MessagesLink";
import { View } from "react-native";

const TabNavigation = createBottomTabNavigator();

export default () => {
  return (
    <TabNavigation.Navigator>
      <TabNavigation.Screen
        name="Home"
        component={stackFactory}
        initialParams={{
          initialRoute: Home,
          customConfig: {
            title: "Home",
            headerTitleAlign: "center",
            headerRight: () => <MessagesLink />,
          },
        }}
      />
      <TabNavigation.Screen
        name="Profile"
        component={stackFactory}
        initialParams={{
          initialRoute: Profile,
          customConfig: {
            title: "Profile",
            headerTitleAlign: "center",
          },
        }}
      />
      <TabNavigation.Screen
        name="Add"
        component={View}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("PhotoNavigation");
          },
        })}
      />
      <TabNavigation.Screen
        name="Search"
        component={stackFactory}
        initialParams={{
          initialRoute: Search,
          customConfig: {
            title: "Search",
            headerTitleAlign: "center",
          },
        }}
      />
      <TabNavigation.Screen
        name="Notifications"
        component={stackFactory}
        initialParams={{
          initialRoute: Notifications,
          customConfig: {
            title: "Notifications",
            headerTitleAlign: "center",
          },
        }}
      />
    </TabNavigation.Navigator>
  );
};
