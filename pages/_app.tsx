import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { useReducer } from "react";
import Layout from "@/layout";
import { initialState, reducer } from "@/utils/userReducer";
import { AuthProvider } from "@/utils/authContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Layout>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Layout>
  );
}

export default MyApp;
