import React from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      layout new
      <Outlet />
    </div>
  );
};

export default Layout;
