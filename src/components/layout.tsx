import React from "react";
import Header from "./header";
import Footer from "./footer";

export function Layout({ children }: any) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
