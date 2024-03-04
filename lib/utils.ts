import { options } from "@/app/api/auth/[...nextauth]/options"
import { type ClassValue, clsx } from "clsx"
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function englishRoleToSpanish(role: string) {
  switch (role) {
    case "Admin":
      return "Administrador"
    case "Finance":
      return "Finanzas"
    case "Operation":
      return "Operaciones"
    default:
      return "Indefinido*"
  }
}

// Use it in server contexts
export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
  return getServerSession(...args, options)
}