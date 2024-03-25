"use client";
import { Icons } from "@/components/assets/icons";
import { LeftNavigationMenu } from "@/components/navigation-menu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const pathnameSplit = usePathname().split("/");
  let temp = "";
  const pathnameRoutes = pathnameSplit.map((route) => {
    temp += `${route}/`;
    return temp;
  });

  return (
    <div className="flex flex-1 h-full w-full">
      <LeftNavigationMenu open={open} setOpen={setOpen} />
      <div className="flex-1 flex flex-col overflow-auto">
        <div className="flex p-5 items-center gap-2.5">
          <Button size="icon" variant="ghost" onClick={() => setOpen(!open)}>
            <Icons.menu
              className={cn(
                "w-6 h-6 cursor-pointer duration-200 transition-all",
                open ? "scale-100 rotate-0" : "scale-0 rotate-180"
              )}
            />
            <Icons.chevronsLeftIcon
              className={cn(
                "w-6 h-6 cursor-pointer absolute duration-200 transition-all",
                open ? "scale-0 rotate-180" : "scale-100 rotate-0"
              )}
            />
          </Button>
          <Breadcrumb className="uppercase">
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
        </div>
        <div className="flex-1 flex flex-col overflow-auto ">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
