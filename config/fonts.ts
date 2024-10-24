import { Inter as FontSans } from "next/font/google";

export const fontSans = FontSans({
  weight: ["400", "600"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});
