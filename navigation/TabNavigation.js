import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";

const TabNavigation = createBottomTabNavigator();

export default () => {
  return (
    <NavigationContainer>
      <TabNavigation.Navigator>
        <TabNavigation.Screen name="Home" component={Home} />
        <TabNavigation.Screen name="Profile" component={Profile} />
        <TabNavigation.Screen
          name="Add"
          component={View}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              console.log("add");
            },
          }}
        />
        <TabNavigation.Screen name="Search" component={Search} />
        <TabNavigation.Screen name="Notifications" component={Notifications} />
      </TabNavigation.Navigator>
    </NavigationContainer>
  );
};
