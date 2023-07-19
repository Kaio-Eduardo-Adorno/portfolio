import { Projects } from "@/components/Sections/Projects";
import { Home } from "@/components/Sections/Home";
import { About } from "@/components/Sections/About";
import { Contact } from "@/components/Sections/Contact";

export default function PorfolioSPA() {
  return (
    <>
      <Home />
      <About />
      <hr className='border-main-400 border-2 m-12 border-dotted rounded-full' />
      <Projects />
      <hr className='border-main-400 border-2 m-12 border-dotted rounded-full' />
      <Contact />
    </>
  );
}
