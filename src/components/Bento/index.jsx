import React from 'react'
import './styles.css'

const Bento = () => {
//   <div className='hidden sm:block' >
//   <ul className='flex flex-row gap-2 sm:gap-6 font-bold'>
//     <li className='cursor-pointer'><a href='#about'>Acerca de mi</a></li>
//     <li className='cursor-pointer'><a href='#service'>Servicios</a></li>
//     <li className='cursor-pointer'><a href='#works'>Trabajos</a></li>
//     <li className='cursor-pointer'><a href='#formation'>Formación</a></li>
//     <li className='cursor-pointer'><a href='#contact'>Contacto</a></li>
//   </ul>
// </div> 
  return (
    <div className='container'>
      <article className='about text-5xl text-center content-center'>
        <a href='#about'>Acerca de mi</a>
      </article>
      <article className='service'>
        <a href='#service'>Servicios</a>
      </article>
      <article className='projects'>
        <a href='#works'>Trabajos</a>
      </article>
      <article className='formation'>
        <a href='#formation'>Formación</a>
      </article>
      <article className='contact'>
        <a href='#contact'>Contacto</a>
      </article>
    </div>
  )
}

export default Bento
