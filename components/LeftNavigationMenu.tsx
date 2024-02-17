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
      icon: <Icons.gitHub width={24} />,
      title: "Dashboard",
      href: "/dashboard",
    },
    { icon: <Icons.gitHub width={24} />, title: "Settings", href: "/settings" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="bg-background shadow-md shadow-secondary-foreground h-screen w-[400px] py-5 z-10">
      <h2 className="text-bold font-bold text-xl px-5 py-5">
        PLATAFORMA SIE&H
      </h2>
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
                {item.title}
              </Button>
            </Link>
          </li>
        ))}
      </ul>

      <a href="/api/auth/logout">
        <Button
          variant="ghost"
          size="lg"
          className="w-full rounded-none justify-start text-lg py-8 gap-3"
        >
          <Icons.gitHub width={24} />
          Logout
        </Button>
      </a>
    </nav>
  );
};

export default LeftNavigationMenu;
