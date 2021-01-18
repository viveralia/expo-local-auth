import React, { FC, useContext, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as LocalAuthentication from "expo-local-authentication";

import ScreenContainer from "../components/screen-container";
import UserContext from "../context/user.context";
import Logo from "../components/logo";
import Input from "../components/input";
import Button from "../components/button";
import { getItemSecure } from "../utils/cache";

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 32,
  },
});

const WelcomeScreen: FC = () => {
  const { user } = useContext(UserContext);
  const { setAuthToken } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      try {
        const hasHardware = await LocalAuthentication.hasHardwareAsync();
        const isEnrolled = await LocalAuthentication.isEnrolledAsync();
        console.log({ hasHardware, isEnrolled });
        if (hasHardware) {
          authenticate();
        }
      } catch (error) {
        alert(error.message);
      }
    })();
  }, []);

  async function authenticate() {
    try {
      const authenticated = await LocalAuthentication.authenticateAsync();
      console.log(authenticated);
      if (authenticated.success) {
        const password = await getItemSecure("pass");
        console.log(password);
        await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const token = "qwertyuiop123456";
        setAuthToken(token);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  async function logIn() {}

  return (
    <ScreenContainer>
      <Logo />
      <Text style={styles.welcomeText}>{user?.name}, welcome back!</Text>
      <Input secureTextEntry placeholder="Password" />
      <Button type="primary" onPress={logIn}>
        Log In
      </Button>
    </ScreenContainer>
  );
};

export default WelcomeScreen;
