import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { useReducer } from "react";
import Layout from "@/layout";
import { initialState, reducer } from "@/utils/userReducer";
import { UserContext } from "@/utils/userContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Layout>
      <UserContext.Provider value={{ state, dispatch }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </Layout>
  );
}

export default MyApp;
