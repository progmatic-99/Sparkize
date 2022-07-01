import { createContext, useContext } from "react";

export const UserContext = createContext({});

export function useAuth() {
  return useContext(UserContext);
}
