import { IProject } from "@/constants/projects";
import Image from "next/image";
import Link from "next/link";

export const Project: React.FC<IProject> = ({ title, image, url }) => {
  return (
    <a
      href={url}
      target='_blank'
      className='p-1 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6'
    >
      <div className='relative h-36 border-main-400 border-solid border-4 border-b-0 rounded-t-md'>
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            unoptimized
            className='object-contain'
          />
        ) : (
          <Image
            src={"/assets/svgs/not-found.svg"}
            alt={title}
            fill
            unoptimized
            className='object-contain'
          />
        )}
      </div>
      <div className='bg-main-400 p-1 flex flex-col rounded-b-md'>
        <span className='text-sm uppercase leading-freedom'>{title}</span>
      </div>
    </a>
  );
};
