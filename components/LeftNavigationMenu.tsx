"use client"; // Error components must be Client Components

import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { Icons } from "@/components/assets/icons";

interface MenuItem {
  icon: JSX.Element;
  title: string;
  href: string;
}

const LeftNavigationMenu: React.FC = () => {
  const pathname = usePathname();

  const navigationItems: MenuItem[] = [
    {
      icon: <Icons.barChart width={24} />,
      title: "Resumen",
      href: "/dashboard",
    },
    {
      icon: <Icons.folder width={24} />,
      title: "Proyectos",
      href: "/project",
    },
    {
      icon: <Icons.wallet width={24} />,
      title: "Finanzas",
      href: "/finance",
    },
    {
      icon: <Icons.contact width={24} />,
      title: "Clientes",
      href: "/client",
    },
    {
      icon: <Icons.users width={24} />,
      title: "Usuarios",
      href: "/user",
    },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="flex flex-col bg-background shadow-md shadow-secondary-foreground h-screen w-[285px] pt-5 z-10">
      <h1 className="px-5 py-5">PLATAFORMA SIE&H</h1>
      <ul className="flex flex-col">
        {navigationItems.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>
              <Button
                variant={`${isActive(item.href) ? "default" : "ghost"}`}
                size="lg"
                className="w-full rounded-none justify-start text-lg py-8 gap-3"
              >
                {item.icon}
                <h2>{item.title}</h2>
              </Button>
            </Link>
          </li>
        ))}
      </ul>

      <section className="mt-auto">
        <Link href="/settings">
          <Button
            variant={`${isActive("/settings") ? "default" : "ghost"}`}
            size="lg"
            className="w-full rounded-none justify-start py-8 gap-3"
          >
            <Icons.settings width={24} />
            <h2>Ajustes</h2>
          </Button>
        </Link>

        <a href="/api/auth/logout">
          <Button
            variant="ghost"
            size="lg"
            className="w-full rounded-none justify-start py-8 gap-3"
          >
            <Icons.logOut width={24} />
            <h2>Cerrar Sesión</h2>
          </Button>
        </a>
      </section>
    </nav>
  );
};

export default LeftNavigationMenu;
