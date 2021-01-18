import React, { FC } from "react";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  logo: {
    fontSize: 32,
    fontWeight: "700",
  },
});

const Logo: FC = () => {
  return <Text style={styles.logo}>My App</Text>;
};

export default Logo;
