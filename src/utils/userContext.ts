import { createContext, useContext } from "react";

interface UserCtx {
  state: object;
  dispatch: React.Dispatch<any>;
}

export const UserContext = createContext<UserCtx>({
  state: {},
  dispatch: () => null,
});

export function useAuth() {
  return useContext(UserContext);
}
