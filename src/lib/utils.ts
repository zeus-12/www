import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { STIX_Two_Text} from "next/font/google"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const serifFont = STIX_Two_Text({
  subsets: ["latin"],
  display: "swap",
})
