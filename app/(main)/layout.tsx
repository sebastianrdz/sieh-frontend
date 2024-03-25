"use client";
import { LeftNavigationMenu } from "@/components/navigation-menu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathnameSplit = usePathname().split("/");
  let temp = "";
  const pathnameRoutes = pathnameSplit.map((route) => {
    temp += `${route}/`;
    return temp;
  });

  return (
    <div className="flex flex-1 h-full">
      <LeftNavigationMenu />
      <div className="flex-1 flex flex-col">
        <Breadcrumb className="p-5 uppercase">
          <BreadcrumbList>
            {pathnameSplit.map((path, index) => {
              if (path === "") return;
              else if (pathnameSplit[1] === "project" && index === 2)
                return (
                  <BreadcrumbItem key={index}>
                    <BreadcrumbPage>
                      <h1>{path}</h1>
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                );
              else if (pathnameSplit[1] === "project" && index === 3) return;
              else if (path === pathnameSplit[pathnameSplit.length - 1])
                return (
                  <BreadcrumbItem key={index}>
                    <BreadcrumbPage>
                      <h1>{pathnameSplit.pop()}</h1>
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                );
              else
                return (
                  <>
                    <BreadcrumbItem key={index}>
                      <BreadcrumbLink href={pathnameRoutes[index]}>
                        {path}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                  </>
                );
            })}
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex-1 flex flex-col overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
