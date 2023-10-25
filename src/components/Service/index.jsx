import React from 'react';
import servicesData from './../../../data/servicesData.json';

const Service = () => {
  return (
    <section id='service' className='flex w-8/12 m-auto pt-20 pb-5'>
      <div className='grid grid-cols-1 gap-8'>
        {servicesData.map((service, index) => (
          <div key={index} className='flex gap-3 dark:text-slate-300'>
            <img className='w-52' src={service.imageSrc} alt={service.title} />
            <aside className='dark:text-slate-300'>
              <h3 className='font-semibold pb-2'>{service.title}</h3>
              <p>{service.description}</p>
            </aside>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Service;
