import React from 'react';
import formationData from './../../../data/formation.json';

const Formation = () => {
  return (
    <section id='formation' className='flex cover w-8/12 sm:w-10/12 m-auto pt-20 pb-5 h-auto flex-col'>
      <div className='dark:text-slate-300'>
        <h2 className='glitch font-semibold text-2xl pb-8 flex justify-center'>
          Capacitación
        </h2>
        <div className=''>
          <img className='m-auto mb-10' src='https://drive.google.com/uc?id=1pj-CjLXL9ZF7EBvpHnck8aK8kHYzShK5' alt='logos' />
        </div>
      </div >
      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8 '>
        {formationData.map((formation, index) => (
          <div key={index} className='flex flex-col justify-between'>
            <div className='dark:text-slate-300 flex flex-col h-auto pb-8 gap-3 transition-transform transform hover:scale-150 duration-500'>
              <img
                className='w-2/3 h-full m-auto'
                src={formation.imageSrc}
                alt={formation.title}
              />
            <aside className='flex-grow dark:text-slate-300'>
              <h3 className='font-semibold pb-2 text-center text-lg'>{formation.title}</h3>
              {/* <p className='pb-1 text-center text-lg'>{formation.description}</p> */}
            </aside>
          </div>
        </div>
        ))}
      </div>
    </section>
  );
}

export default Formation;