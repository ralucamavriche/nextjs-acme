import { Inter, Lusitana } from "next/font/google";

// Importing the Inter font from Google Fonts using Next.js font optimization
export const inter = Inter({
  subsets: ["latin"],
});

export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});
