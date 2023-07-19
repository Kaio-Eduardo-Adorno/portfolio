import { Project } from "@/components/Project";
import { projects } from "@/constants/projects";

export const Projects: React.FC = () => (
  <section
    id='projects'
    className='flex flex-col p-3 items-center leading-freedom text-2xl'
  >
    <div className='leading-freedom flex-shrink text-2xl'>Projects</div>

    <div className='flex flex-wrap w-full justify-center max-w-screen-2xl'>
      {projects.map((project, i) => (
        <Project key={i} {...project} />
      ))}
    </div>
  </section>
);
