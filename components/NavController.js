import React from "react";
import { View } from "react-native";
import { useIsLoggedIn } from "../AuthContext";
import AuthNavigation from "../navigation/AuthNavigation";
import MainNavigation from "../navigation/MainNavigation";

export default () => {
<<<<<<< HEAD
  const isLoggedIn = useIsLoggedIn();
=======
  const isLoggedIn = true;
>>>>>>> 0d932958f95b5cd36b6f679c3863b29edcac3c60
  return (
    <View style={{ flex: 1 }}>
      {isLoggedIn ? <MainNavigation /> : <AuthNavigation />}
    </View>
  );
};
