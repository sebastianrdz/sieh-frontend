import { LeftNavigationMenu } from "@/components/navigation-menu";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-1 h-full">
      <LeftNavigationMenu />
      <div className="flex-1 flex flex-col overflow-auto ">{children}</div>
    </div>
  );
};

export default Layout;
