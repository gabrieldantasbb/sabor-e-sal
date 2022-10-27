import React from "react";
import { Header, Footer } from "./index";

const layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer className="bottom-0"/>
    </>
  );
};

export default layout;
