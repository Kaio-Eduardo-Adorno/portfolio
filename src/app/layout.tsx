import Image from "next/image";
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { HeaderLink } from "@/components/HeaderLink";
import { freedomFont, varelaRoundFont } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "The Life Shit",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${varelaRoundFont.variable} scroll-smooth`}>
      <body style={freedomFont.style} className='flex flex-col min-h-screen'>
        <header className='fixed w-full top-0 z-50 flex gap-2 justify-center flex-col sm:flex-row sm:justify-between items-center p-4 bg-main-400 shadow-sm'>
          <Link href='/'>
            <Image
              src='/assets/svgs/logo.svg'
              alt='Logo'
              width={268}
              height={60}
              priority
            />
          </Link>
          <nav className='flex gap-4'>
            <HeaderLink href='/#home'>Home</HeaderLink>
            <HeaderLink href='/#about'>About</HeaderLink>
            <HeaderLink href='/#projects'>Projects</HeaderLink>
            <HeaderLink href='/#contact'>Contact</HeaderLink>
          </nav>
        </header>
        <main className='flex-grow bg-main-400 pb-12 bg-opacity-25'>{children}</main>
        <footer className='px-4 py-2 flex justify-end items-center text-xs h-13 gap-2 shadow-sm'>
          <Image
            src='/assets/svgs/poop.svg'
            width={20}
            height={20}
            alt='Poop'
          />
          <p className='leading-freedom'>
            © {new Date().getFullYear()} The Life Shit
          </p>
        </footer>
      </body>
    </html>
  );
}
