"use client";
import { usePathname, redirect } from "next/navigation";

export default function ProjectRedirect() {
  const pathname = usePathname();

  redirect(pathname + "/proposal");
}
