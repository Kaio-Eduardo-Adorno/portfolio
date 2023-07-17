import Image from "next/image";
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { CustomLink } from "@/components/CustomLink";

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
    <html lang='en'>
      <body className='flex flex-col min-h-screen'>
        <header className='flex justify-between items-center p-4 bg-main-400 shadow-sm'>
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
            <CustomLink href='/'>Home</CustomLink>
            <CustomLink href='/projects'>Projects</CustomLink>
            <CustomLink href='/about'>About</CustomLink>
          </nav>
        </header>
        <main className='p-4 flex-grow bg-main-400 bg-opacity-25 '>
          {children}
        </main>
      </body>
    </html>
  );
}
