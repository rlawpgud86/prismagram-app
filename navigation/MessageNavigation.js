import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Messages from "../screens/Messages/Messages";
import Message from "../screens/Messages/Message";

const MessageNavigation = createStackNavigator();

export default () => {
  return (
    <MessageNavigation.Navigator>
      <MessageNavigation.Screen
        name="Messages"
        component={Messages}
        options={{ headerTitleAlign: "center" }}
      />
      <MessageNavigation.Screen name="Message" component={Message} />
    </MessageNavigation.Navigator>
  );
};
