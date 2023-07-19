import localFont from "next/font/local";
import { Varela_Round } from "next/font/google";

export const freedomFont = localFont({
  src: "../../public/assets/fonts/Freedom.otf",
});

export const varelaRoundFont = Varela_Round({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-varelaRound",
});
