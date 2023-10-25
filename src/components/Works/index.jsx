import React from 'react';
import worksData from './../../../data/works.json';

const Works = () => {
  return (
    <section id='works' className='flex w-8/12 m-auto pt-20 pb-5 h-auto flex-col'>
      <div className='dark:text-slate-300'>
        <h2 className='font-semibold text-xl pb-8 flex justify-center'>Trabajos Realizados</h2>
      </div >
      <div className='grid lg:grid-cols-2 gap-8 '>
        {worksData.map((work, index) => (
          <div key={index} className='flex flex-col justify-between'>
          <div className='flex flex-col h-full pb-8 gap-3 dark:text-slate-300'>
            <img
              className='w-52 h-48 m-auto'
              src={work.imageSrc}
              alt={work.title}
            />
            <aside className='flex-grow dark:text-slate-300'>
              <h3 className='font-semibold pb-2 text-center text-lg'>{work.title}</h3>
              <p className='pb-1 text-center text-lg'>{work.description}</p>
            </aside>
          </div>
          <button className=' w-20 mx-auto mb-4'>
            <a
              className='bg-slate-400 dark:bg-slate-600 hover:bg-slate-600 dark:text-white font-semibold dark:hover:bg-slate-700 text-white rounded block text-center py-2 '
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
