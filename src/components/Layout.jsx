import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout() {
  return (
    <div>
      <div className="h-screen w-screen overfow-hidden bg-neutral-100 flex flex-row">
        <Sidebar />
        <div className="flex-1">
          {" "}
          <Header />
       

      <div className="p-4">
        {" "}
        <Outlet />
      </div> </div>
      </div>
    </div>
  );
}

export default Layout;
