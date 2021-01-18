import React, { FC } from "react";
import { StyleSheet } from "react-native";

import Logo from "../components/logo";
import ScreenContainer from "../components/screen-container";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

const ScreenSaverScreen: FC = () => {
  return (
    <ScreenContainer style={styles.container}>
      <Logo />
    </ScreenContainer>
  );
};

export default ScreenSaverScreen;
