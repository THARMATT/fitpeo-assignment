import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout() {
  return (
    <div >
      <div className="max-h-screen max-w-screen overfow-hidden bg-neutral-100 flex flex-row">
        <Sidebar />
        <div className="flex-1">
          {" "}
          <Header />
       

      <div  id="outlet " className="h-screen overflow-auto">
        {" "}
        <Outlet  />
      </div> </div>
      </div>
    </div>
  );
}

export default Layout;
