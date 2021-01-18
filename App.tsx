import "react-native-gesture-handler";
import React, { FC, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./src/navigators/auth.navigator";
import TabNavigator from "./src/navigators/tab.navigator";
import SplashScreen from "./src/screens/splash.screen";
import UserContext, { User } from "./src/context/user.context";
import WelcomeScreen from "./src/screens/welcome.screen";
import { deleteItemSecure, getItemSecure, userKey } from "./src/utils/cache";

const App: FC = () => {
  const [user, setUser] = useState<User | null | undefined>();
  const [authToken, setAuthToken] = useState<string | null>(null);

  async function retrieveUserInfo() {
    const user = await getItemSecure<User | null>(userKey);
    setUser(user);
  }

  useEffect(() => {
    retrieveUserInfo();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, setAuthToken }}>
      {user === undefined && <SplashScreen />}
      <NavigationContainer>
        {user === null && <AuthNavigator />}
        {user && !authToken && <WelcomeScreen />}
        {user && authToken && <TabNavigator />}
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;
