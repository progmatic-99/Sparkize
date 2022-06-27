import React from "react";
import Footer from "./footer";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className="h-screen bg-black">{children}</main>
      <Footer />
    </>
  );
}
