import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDate = (date: string | Date) => {
  const d = new Date(date)
  return d.toLocaleDateString("fr-FR", {
    month: "numeric",
    year: "numeric"
  })
}
