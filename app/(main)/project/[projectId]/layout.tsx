"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    <section className="flex flex-col">
      <div className="p-5 flex items-center gap-2.5 font-bold uppercase">
        <Link href="/project">Proyectos</Link>
        <h3>/</h3>
        <h1>{params.projectId}</h1>
      </div>

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
      <main className="flex-1 p-5">{children}</main>
    </section>
  );
};

export default Layout;