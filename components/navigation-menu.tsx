"use client"; // Error components must be Client Components

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import { Icons } from "@/components/assets/icons";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils";

interface IMenuItem {
  icon?: JSX.Element;
  text?: string;
  href?: string;
  className?: string;
}

const navigationItems: IMenuItem[] = [
  {
    icon: <Icons.logo width={24} className="min-w-6" />,
    text: "PLATAFORMA SIE&H",
    href: "",
    className: "border-b border-secondary-foreground",
  },
  {
    icon: <Icons.barChart width={24} className="min-w-6" />,
    text: "Resumen",
    href: "dashboard",
  },
  {
    icon: <Icons.folder width={24} className="min-w-6" />,
    text: "Proyectos",
    href: "project",
  },
  {
    icon: <Icons.wallet width={24} className="min-w-6" />,
    text: "Finanzas",
    href: "finance",
  },
  {
    icon: <Icons.contact width={24} className="min-w-6" />,
    text: "Clientes",
    href: "client",
  },
  {
    icon: <Icons.users width={24} className="min-w-6" />,
    text: "Usuarios",
    href: "user",
  },
  {
    icon: <Icons.helpCircle width={24} className="min-w-6" />,
    text: "Ayuda",
    href: "help",
  },
  {
    icon: <Icons.settings width={24} className="min-w-6" />,
    text: "Ajustes",
    href: "settings",
  },
];

interface NavigationMenuButtonProps {
  menuItem: IMenuItem;
  onClick?: () => void;
}

const NavigationMenuButton = ({
  menuItem,
  onClick,
}: NavigationMenuButtonProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = (href?: string) => {
    return pathname.split("/")[1] === href;
  };

  return (
    <Button
      variant={`${isActive(menuItem?.href) ? "default" : "ghost"}`}
      size="lg"
      className={cn(
        "w-full flex rounded-none justify-start text-md font-bold py-8 gap-3",
        menuItem.className
      )}
      onClick={onClick ?? (() => router.push(`/${menuItem.href}`))}
    >
      {menuItem.icon}
      <h3>{menuItem.text}</h3>
    </Button>
  );
};

interface LeftNavigationMenuProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const LeftNavigationMenu = ({
  open,
  setOpen,
}: LeftNavigationMenuProps) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={cn(
        "flex flex-col transition-all duration-500 overflow-hidden bg-background border-r w-[250px] min-w-[250px] pt-2.5 z-10",
        open && "min-w-0 w-0"
      )}
    >
      <ul className="flex flex-col">
        {navigationItems
          .filter((item) => item.href !== "settings")
          .map((item, index) => (
            <li key={index}>
              <NavigationMenuButton menuItem={item} />
            </li>
          ))}
      </ul>

      <section className="mt-auto">
        <NavigationMenuButton
          menuItem={navigationItems[navigationItems.length - 1]}
        />
        <NavigationMenuButton
          menuItem={{
            icon: <Icons.logOut width={24} className="min-w-6" />,
            text: "Cerrar Sesión",
          }}
          onClick={() => signOut()}
        />
      </section>
    </nav>
  );
};
