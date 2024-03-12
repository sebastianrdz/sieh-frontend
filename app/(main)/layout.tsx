import { LeftNavigationMenu } from "@/components/navigation-menu";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex ">
      <LeftNavigationMenu />
      <main className="flex-1 pt-5 h-screen ">{children}</main>
    </div>
  );
};

export default Layout;
