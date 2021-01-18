import React, { createContext, Dispatch, SetStateAction } from "react";

export interface User {
  name: string;
  email: string;
}

export interface UserContextValues {
  user: User | undefined | null;
  setUser: Dispatch<SetStateAction<User | undefined | null>>;
  setAuthToken: Dispatch<SetStateAction<string | null>>;
}

const UserContext = createContext({} as UserContextValues);

export default UserContext;
