import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, TouchableOpacity } from "react-native";

const stackFactory = createStackNavigator();

export default ({ route }) => {
  const { initialRoute, customConfig } = route.params;
  return (
    <stackFactory.Navigator initialRouteName="Home">
      <stackFactory.Screen
        name={route.name}
        component={initialRoute}
        options={{ ...customConfig }}
      />
    </stackFactory.Navigator>
  );
};
