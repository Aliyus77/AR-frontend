import React from 'react';
import worksData from './../../../data/works.json';
import './styles.css'

const Works = () => {
  return (
    <section id='works' className='flex sm:w-8/12 w-11/12 m-auto pt-20 pb-5 h-auto flex-col'>
      <div className='dark:text-slate-300'>
        <div className='font-style text-4xl text-center pt-8 text-red-900 dark:text-orange-300 pb-8'>Proyectos</div>
      </div >
      <div className='grid lg:grid-cols-2 gap-8 '>
        {worksData.map((work, index) => (
          <div key={index} className='box-shadow border border-black rounded-md bg-slate-400 dark:bg-slate-900 m-auto h-full w-full flex flex-col justify-between'>
            <div className='flex flex-col h-full pb-8 gap-3 dark:text-slate-300 mt-8'>
              <img
                className='w-60 h-48 m-auto'
                src={work.imageSrc}
                alt={work.title}
              />
              <aside className='flex-grow dark:text-slate-300 w-4/5 m-auto'>
                <h3 className='font-semibold pb-2 text-center text-lg'>{work.title}</h3>
                <p className='pb-1 text-center text-lg'>{work.description}</p>
              </aside>
            </div>
            <button className='w-20 mx-auto mb-4 cursor-pointer'>
              <a
                className='bg-slate-500 border border-slate-700 dark:bg-slate-600 hover:bg-slate-600 dark:text-white dark:hover:bg-slate-700 font-semibold transition-colors duration-500 text-white rounded block text-center py-2'
                href={work.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                Visitar
              </a>
            </button>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Works;
