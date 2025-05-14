import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(ref: React.RefObject<HTMLElement>) {
  ref.current.scrollIntoView({ behavior: "smooth" });
}
