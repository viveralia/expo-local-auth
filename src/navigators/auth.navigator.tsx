import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/home.screen";
import LogInScreen from "../screens/login.screen";

export type AuthStackParamList = {
  Home: undefined;
  LogIn: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigator: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="LogIn" component={LogInScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
