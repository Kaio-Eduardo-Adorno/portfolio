export const Home: React.FC = () => (
  <section id="home" className='flex flex-col justify-between items-center bg-main-400 h-screen pt-40 px-6 pb-4 sm:pt-28'>
    <div className='flex flex-col flex-grow justify-center items-center'>
      <h4 className='text-5xl leading-relaxed'>Welcome</h4>
      <h1 className='text-7xl leading-relaxed'>
        Im <span className='font-bold'>Kaio</span>
      </h1>
      <p className='text-2xl leading-relaxed text-center'>
        Here you going to know more about me and my projects
      </p>
    </div>

    <div className='material-symbols-rounded text-6xl animate-bounce'>
      keyboard_double_arrow_down
    </div>
  </section>
);
