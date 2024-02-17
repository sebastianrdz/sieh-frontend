import React from "react";
import LeftNavigationMenu from "@/components/LeftNavigationMenu";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <LeftNavigationMenu />
      <main className="flex-1 pt-5">{children}</main>
    </div>
  );
};

export default Layout;
