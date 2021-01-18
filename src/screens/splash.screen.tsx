import React, { FC } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

import ScreenContainer from "../components/screen-container";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const SplashScreen: FC = () => {
  return (
    <ScreenContainer style={styles.container}>
      <ActivityIndicator />
    </ScreenContainer>
  );
};

export default SplashScreen;
