"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { getStatusColor } from "../components/project-card";

const tabs: ProjectTab[] = [
  {
    name: "Cotizacion",
    href: "proposal",
  },
  {
    name: "Tareas",
    href: "tasks",
  },
  {
    name: "Expediente",
    href: "files",
  },
];

const Layout: React.FC<LayoutProps> = ({ children, params }) => {
  const pathname = usePathname().split("/", 3).join("/");
  const pathnameLast = usePathname().split("/")[3];

  const isActive = (href: string) => {
    return pathnameLast === href;
  };

  return (
    <section className="flex flex-col h-full w-full">
      <header className="p-5 flex items-center gap-2.5 font-bold">
        <Link href="/project" className="uppercase">
          Proyectos
        </Link>
        <h3>/</h3>
        <h1 className="uppercase">{params.projectId}</h1>
        <Badge className="gap-1" variant="outline">
          <span className={cn("w-2 h-2 rounded", getStatusColor("Activo"))} />
          Activo
        </Badge>
      </header>
      <div className="flex text gap-2.5 p-5 border-b-[4px] border-primary">
        {tabs.map((tab: ProjectTab, index) => {
          return (
            <Link
              key={index}
              href={pathname + "/" + tab.href}
              className={` inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                isActive(tab.href) ? "text-primary" : " text-muted-foreground"
              } `}
            >
              {tab.name}
            </Link>
          );
        })}
      </div>
      {children}
    </section>
  );
};

export default Layout;
