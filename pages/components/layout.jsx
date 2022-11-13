import React from "react";
import Header from "./header";

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

//to change
export default Layout;
