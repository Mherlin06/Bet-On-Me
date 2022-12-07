import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import Summary from "../components/Summary/Summary";

export const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main>
        <Menu />
        <Outlet />
        <Summary />
      </main>
    </div>
  );
};

export default Layout;
