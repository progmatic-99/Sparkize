import {
  Session,
  User,
  UserCredentials,
  ApiError,
  AuthChangeEvent,
} from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

type AuthReturn = {
  user: User | null;
  session: Session | null;
  error: ApiError | null;
};

interface ContextValue {
  signUp: (data: UserCredentials) => Promise<AuthReturn>;
  signIn: (data: UserCredentials) => Promise<AuthReturn>;
  signOut: (data: UserCredentials) => Promise<{ error: ApiError | null }>;
  user: User | null;
}

const initialValue = {
  signUp: (data: UserCredentials) => supabase.auth.signUp(data),
  signIn: (data: UserCredentials) => supabase.auth.signIn(data),
  signOut: () => supabase.auth.signOut(),
  user: null,
};

const AuthContext = createContext<ContextValue>(initialValue);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const session = supabase.auth.session();

    setUser(session?.user ?? null);

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        updateSupabaseCookie(event, session);
      }
    );
    return () => {
      listener?.unsubscribe();
    };
  }, []);

  const value = {
    ...initialValue,
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  return useContext(AuthContext);
}

async function updateSupabaseCookie(
  event: AuthChangeEvent,
  session: Session | null
) {
  await fetch("/api/auth", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    credentials: "same-origin",
    body: JSON.stringify({ event, session }),
  });
}
