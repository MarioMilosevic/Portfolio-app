import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(id: string, offset = 50) {
  const section = document.getElementById(`${id}`);
  if (!section) return;
  const y = section.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: y, behavior: "smooth" });
}
