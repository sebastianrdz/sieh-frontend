"use client"; // Error components must be Client Components

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { Icons } from "@/components/assets/icons";
import { signOut } from "next-auth/react";

interface MenuItem {
  icon: JSX.Element;
  title: string;
  href: string;
}

const navigationItems: MenuItem[] = [
  {
    icon: <Icons.barChart width={24} className="min-w-6" />,
    title: "Resumen",
    href: "dashboard",
  },
  {
    icon: <Icons.folder width={24} className="min-w-6" />,
    title: "Proyectos",
    href: "project",
  },
  {
    icon: <Icons.wallet width={24} className="min-w-6" />,
    title: "Finanzas",
    href: "finance",
  },
  {
    icon: <Icons.contact width={24} className="min-w-6" />,
    title: "Clientes",
    href: "client",
  },
  {
    icon: <Icons.users width={24} className="min-w-6" />,
    title: "Usuarios",
    href: "user",
  },
  {
    icon: <Icons.helpCircle width={24} className="min-w-6" />,
    title: "Ayuda",
    href: "help",
  },
];

const LeftNavigationMenu: React.FC = () => {
  const pathname = usePathname();
  const [isMenuCompact, setIsMenuCompact] = useState(false);

  const isActive = (href: string) => {
    return pathname.split("/")[1] === href;
  };

  return (
    <nav
      className={`flex-col transition-all duration-200 overflow-hidden bg-background shadow-md shadow-secondary-foreground h-screen w-[250px] pt-5 z-10  hidden sm:flex ${
        isMenuCompact && "w-[80px]"
      }`}
    >
      <h3
        className={`p-5 w-full text-nowrap  ${
          isMenuCompact ? "px-0 flex justify-center " : ""
        }`}
      >
        {isMenuCompact ? "PS" : "PLATAFORMA SIE&H"}
      </h3>
      <ul className="flex flex-col">
        {navigationItems.map((item, index) => (
          <li key={index}>
            <Link href={"/" + item.href}>
              <Button
                variant={`${isActive(item.href) ? "default" : "ghost"}`}
                size="lg"
                className={`w-full flex rounded-none justify-start text-md font-bold py-8 gap-3 ${
                  isMenuCompact ? "px-0 justify-center" : ""
                }`}
              >
                {item.icon}
                <h3 className={isMenuCompact ? "hidden" : "flex"}>
                  {item.title}
                </h3>
              </Button>
            </Link>
          </li>
        ))}
      </ul>

      <Button
        variant="outline"
        size="icon"
        className="rounded-full mt-auto mx-auto"
        onClick={() => setIsMenuCompact(!isMenuCompact)}
      >
        <Icons.ChevronLeft
          className={`min-w-6 ${isMenuCompact && "rotate-180"}`}
        />
      </Button>

      <section className="mt-auto">
        <Link href="/settings">
          <Button
            variant={`${isActive("settings") ? "default" : "ghost"}`}
            size="lg"
            className={`w-full flex rounded-none justify-start text-md font-bold py-8 gap-3 ${
              isMenuCompact ? "px-0 justify-center" : ""
            }`}
          >
            <Icons.settings width={24} className="min-w-6" />
            <h3 className={isMenuCompact ? "hidden" : "flex"}>Ajustes</h3>
          </Button>
        </Link>

        <Button
          variant="ghost"
          size="lg"
          className={`w-full flex rounded-none justify-start text-md font-bold py-8 gap-3 ${
            isMenuCompact ? "px-0 justify-center" : ""
          }`}
          onClick={() => signOut()}
        >
          <Icons.logOut width={24} className="min-w-6" />
          <h3 className={isMenuCompact ? "hidden" : "flex"}>Cerrar Sesión</h3>
        </Button>
      </section>
    </nav>
  );
};

export default LeftNavigationMenu;
