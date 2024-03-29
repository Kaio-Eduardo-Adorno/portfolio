import { Progress } from "@/components/Progress";
import { skills } from "@/constants/skills";
import Image from "next/image";

export const About: React.FC = () => (
  <>
    <section id='about' className='flex flex-col p-7 mt-16 items-center'>
      <div className='flex items-center sm:items-start gap-4 sm:gap-12 flex-col sm:flex-row'>
        <div className='min-w-72 min-h-72'>
          <div className='relative w-72 h-72'>
            <Image
              alt='Photo'
              className='rounded-3xl object-contain border-main-400 border-solid border-4'
              src='https://github.com/kaio-eduardo-adorno.png'
              fill
              unoptimized
            />
          </div>
        </div>
        <div className='flex flex-col items-center sm:items-start'>
          <h1 className='leading-relaxed text-3xl'>Kaio Adorno</h1>
          <h4 className='bg-main-400 leading-none text-2xl'>
            Software Developer
          </h4>
          <p className='font-sans mt-4 text-center sm:text-left'>
            I&lsquo;m a full stack developer who hates to study, i just try my
            best to make things work. All my knowledge comes from lots of
            attempts and failures and i think this is the right way to do things
            at least for me. I hope you like my projects and my programming
            style.
          </p>
        </div>
      </div>
    </section>
    <hr className='border-main-400 border-2 m-12 border-dotted rounded-full' />
    <section id='about' className='flex flex-col p-7 mt-16 items-center'>
      <div className='leading-freedom flex-shrink text-2xl'>My Skills</div>

      <div className='flex justify-center w-full flex-wrap'>
        {skills.map((skill, i) => (
          <div
            key={i}
            className='px-1 py-2 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6'
          >
            <Progress {...skill} />
          </div>
        ))}
      </div>
    </section>
  </>
);
