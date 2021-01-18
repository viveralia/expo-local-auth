import { StackScreenProps } from "@react-navigation/stack";
import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

import Button from "../components/button";
import Logo from "../components/logo";
import ScreenContainer from "../components/screen-container";
import { AuthStackParamList } from "../navigators/auth.navigator";

type HomeScreenProps = StackScreenProps<AuthStackParamList, "LogIn">;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    marginBottom: -10,
  },
});

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <ScreenContainer style={styles.container}>
      <Logo />
      <View>
        <Button type="primary" onPress={() => navigation.navigate("LogIn")}>
          Log In
        </Button>
        <Button type="secondary" onPress={() => null}>
          Create an account
        </Button>
      </View>
    </ScreenContainer>
  );
};

export default HomeScreen;
