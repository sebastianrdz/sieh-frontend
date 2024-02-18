import { type ClassValue, clsx } from "clsx"
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