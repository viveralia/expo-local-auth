import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const userKey = "local_auth_user_practice";
export const tokenKey = "local_auth_token_practice";

const stringify = (value: unknown) => {
  if (typeof value !== "string") {
    value = JSON.stringify(value);
  }

  return value;
};

export const saveItemSecure = (key: string, value: any): Promise<void> => {
  value = stringify(value);
  return SecureStore.setItemAsync(key, value);
};

export const getItemSecure = async <T>(key: string): Promise<T | null> => {
  const value = await SecureStore.getItemAsync(key);
  if (!value) return null;
  return JSON.parse(value) as T;
};

export const saveItem = (key: string, value: any) => {
  value = stringify(value);
  return AsyncStorage.setItem(key, value);
};

export const getItem = async <T>(key: string): Promise<T | null> => {
  const value = await AsyncStorage.getItem(key);
  if (!value) return null;
  return JSON.parse(value) as T;
};

export const deleteItemSecure = (key: string): Promise<void> => {
  return SecureStore.deleteItemAsync(key);
};
