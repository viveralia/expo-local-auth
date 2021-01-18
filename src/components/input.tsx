import React, { FC } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    paddingHorizontal: 4,
    paddingVertical: 4,
    marginBottom: 12,
    fontSize: 16,
  },
});

const Input: FC<TextInputProps> = ({ style, ...rest }) => {
  return <TextInput style={[styles.container, style]} {...rest} />;
};

export default Input;
