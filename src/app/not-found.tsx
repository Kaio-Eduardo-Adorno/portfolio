import { freedomFont } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={freedomFont.style}
      className='flex flex-col justify-center min-h-screen items-center p-4'
    >
      <div className='text-5xl leading-freedom'>Page not Found</div>
      <Image
        alt='WIP Poop'
        src='/assets/svgs/not-found.svg'
        width={280}
        height={280}
      />

      <Link
        href='/'
        className='text-2xl items-center leading-freedom uppercase hover:opacity-50'
      >
        « &nbsp;<span className='font-bold'>GO BACK</span>
      </Link>
    </main>
  );
}
