import React from "react";
import SidebarDetail from "./SideBarDetail";

const Layout = ({ children }) => {
  return (
    <div className="h-full flex flex-row justify-start">
      <SidebarDetail className="h-screen" />
      <div className="flex-1 bg-text-white p-4 text-black">
        {children}
      </div>
    </div>
  );
};

export default Layout;
