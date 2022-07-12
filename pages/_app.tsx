import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { useReducer } from "react";
import Layout from "@/layout";
import { AuthProvider } from "@/utils/authContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Layout>
  );
}

export default MyApp;
