import { createContext, useContext } from "react";

interface UserCtx {
  state: object;
  dispatch: any;
}

export const UserContext = createContext<UserCtx | null>(null);

export function useAuth() {
  return useContext(UserContext);
}
