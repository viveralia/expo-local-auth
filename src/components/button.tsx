import React, { FC } from "react";
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  StyleSheet,
} from "react-native";

const styles = StyleSheet.create({
  primaryContainer: {
    backgroundColor: "blue",
    borderRadius: 4,
  },
  primaryText: {
    color: "white",
  },
  secondaryText: {
    color: "blue",
  },
  container: {
    paddingVertical: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
  },
});

export interface ButtonProps extends Omit<TouchableOpacityProps, "style"> {
  type: "primary" | "secondary";
}

const Button: FC<ButtonProps> = ({ children, type, ...rest }) => {
  return (
    <TouchableOpacity
      style={[styles.container, styles[`${type}Container`]]}
      {...rest}
    >
      <Text style={[styles.text, styles[`${type}Text`]]}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
