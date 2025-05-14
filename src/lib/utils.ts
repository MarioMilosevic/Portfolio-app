import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(id:string) {
  const section = document.getElementById(`${id}`)
  section?.scrollIntoView({ behavior: "smooth" });
}
