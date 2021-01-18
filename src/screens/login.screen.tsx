import React, { FC, useContext, useState } from "react";

import Button from "../components/button";
import Input from "../components/input";
import ScreenContainer from "../components/screen-container";
import UserContext from "../context/user.context";
import { saveItemSecure, userKey } from "../utils/cache";

const LogInScreen: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUser, setAuthToken } = useContext(UserContext);

  async function logIn() {
    try {
      setLoading(true);
      await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const token = "qwertyuiop123456";
      const user = { name, email };
      Promise.all([
        saveItemSecure(userKey, user),
        saveItemSecure("pass", password),
      ]);
      setUser(user);
      setAuthToken(token);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScreenContainer>
      <Input placeholder="Name" onChangeText={setName} />
      <Input
        placeholder="Email"
        autoCapitalize="none"
        onChangeText={setEmail}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button type="primary" onPress={logIn}>
        {loading ? "Loading..." : "Log In"}
      </Button>
    </ScreenContainer>
  );
};

export default LogInScreen;
