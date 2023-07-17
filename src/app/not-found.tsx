import Image from "next/image";

export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center my-12'>
      <div className="text-5xl">Work In Progress</div>
      <Image
        alt='WIP Poop'
        src='/assets/svgs/wip.svg'
        width={280}
        height={280}
      />
    </div>
  );
}