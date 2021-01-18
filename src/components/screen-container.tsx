import React, { FC } from "react";
import { SafeAreaView, StyleSheet, View, ViewProps } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  safeArea: {
    flex: 1,
  },
});

const ScreenContainer: FC<ViewProps> = ({ children, style, ...rest }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, style]} {...rest}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default ScreenContainer;
