"use client"; // Error components must be Client Components

import React, { useEffect, useState } from "react";
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
  isMenuCompact?: boolean;
  onClick?: () => void;
}

const NavigationMenuButton = ({
  menuItem,
  isMenuCompact,
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
        menuItem.className,
        isMenuCompact && "px-0 justify-center"
      )}
      onClick={onClick ?? (() => router.push("/" + menuItem.href))}
    >
      {menuItem.icon}
      <h3 className={isMenuCompact ? "hidden" : "flex"}>{menuItem.text}</h3>
    </Button>
  );
};

export const LeftNavigationMenu: React.FC = () => {
  const [isMenuCompact, setIsMenuCompact] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMenuCompact(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={cn(
        "flex flex-col transition-all duration-500 overflow-hidden bg-background shadow-md shadow-secondary-foreground w-[250px] min-w-[250px] pt-5 z-10 ",
        isMenuCompact && "min-w-[70px] w-[70px] md:min-w-[80px]"
      )}
    >
      <ul className="flex flex-col">
        {navigationItems
          .filter((item) => item.href !== "settings")
          .map((item, index) => (
            <li key={index}>
              <NavigationMenuButton
                menuItem={item}
                isMenuCompact={isMenuCompact}
              />
            </li>
          ))}
      </ul>

      <Button
        variant="outline"
        size="icon"
        className="rounded-full mt-auto mx-auto hidden md:flex"
        onClick={() => setIsMenuCompact(!isMenuCompact)}
      >
        <Icons.chevronLeft
          className={`min-w-6 ${isMenuCompact && "rotate-180"}`}
        />
      </Button>

      <section className="mt-auto">
        <NavigationMenuButton
          menuItem={navigationItems[navigationItems.length - 1]}
          isMenuCompact={isMenuCompact}
        />
        <NavigationMenuButton
          menuItem={{
            icon: <Icons.logOut width={24} className="min-w-6" />,
            text: "Cerrar Sesión",
          }}
          isMenuCompact={isMenuCompact}
          onClick={() => signOut()}
        />
      </section>
    </nav>
  );
};
