import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-100 ">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
