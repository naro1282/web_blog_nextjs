import React from "react";
import Header from "./header";

export const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);
