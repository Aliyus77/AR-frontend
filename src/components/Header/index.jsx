import { useEffect, useState } from 'react';
import React from 'react'
import { FaMoon, FaBars, FaX } from "react-icons/fa6";
import { HiOutlineSun } from "react-icons/hi2";



const Header = () => {

  // DARK MODE
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const handleChangeTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };
  
  // const [theme, setTheme] = useState('light')
  // const handleChangeTheme = () => {
  //   setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  // }
  // const [open, setOpen] = useState(false)
  
  // AÑADIR CLASE AL HTML PARA MODO NOCHE

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark')      
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])

  // TOGGLE DE ICONO MODO DIA Y NOCHE

  useEffect(() => {
    if (theme === 'dark') {
      document.getElementById('moon').classList.add('hidden')      
    } else {
      document.getElementById('moon').classList.remove('hidden')
    }
  }, [theme])

  useEffect(() => {
    if (theme === 'dark') {
      document.getElementById('sun').classList.remove('hidden')      
    } else {
      document.getElementById('sun').classList.add('hidden')
    }
  }, [theme])

  // TOGGLE DE ICONO MENU DESPLEGABLE

  useEffect(() => {
    if (open === true) {
      document.getElementById('xMark').classList.remove('hidden')      
    } else {
      document.getElementById('xMark').classList.add('hidden')
    }
  })

  useEffect(() => {
    if (open === false) {
      document.getElementById('bars').classList.remove('hidden')      
    } else {
      document.getElementById('bars').classList.add('hidden')
    }
  })

  useEffect(() => {
    const element = document.querySelector('.go-to-top');

    window.addEventListener('scroll', () => {
      if (window.scrollY > window.innerHeight) {
        element.classList.add('fixed');
        element.classList.remove('hidden');
      } else {
        element.classList.remove('fixed');
        element.classList.add('hidden');
      }
    });
  }, []);

  return (
    <header id='landing-header' className='fixed z-10'> 
      <div className='container go-to-top hidden'>
        <button className='fixed bottom-10 right-7'>
          <a href="#bento">subir</a>
        </button>
      </div>
      <div className={`${!open && 'hidden'} flex bg-slate-600/50 min-h-screen sm:hidden w-full fixed top-14 left-0 right-0 backdrop-blur-sm z-40`}>
      </div>     
      
        <div className='text-xl ml-4 flex gap-8 ' >
          <FaMoon className='cursor-pointer z-20 mt-4' id='moon' onClick={handleChangeTheme} />
          <HiOutlineSun className='cursor-pointer z-20 mt-4' id='sun' onClick={handleChangeTheme} />
          <FaBars
            id='bars' 
            className='cursor-pointer text-xl z-20 sm:hidden mt-4' 
            onClick={() => setOpen(!open)}  
          />
          <FaX
            id='xMark'
            className='cursor-pointer z-20 sm:hidden mt-4' 
            onClick={() => setOpen(!open)} 
          />          
        </div>
        <nav className='flex justify-between sm:hidden bg-slate-400/60 dark:bg-slate-600/70 backdrop-blur-sm p-4 fixed w-full h-14 top-0 z-10'></nav>
          <div className={`${open ? 'w-2/3' : 'w-0' } bg-slate-600 min-h-screen fixed top-14 left-0 sm:hidden transition-all duration-300`}>        
            <ul className={`${!open && 'hidden'} sm:hidden [&>li>a]:px-4 [&>li>a]:transition-colors [&>li>a]:duration-500 font-semibold text-2xl text-center text-white py-8`}>
              <li 
                className='py-3 mb-2 cursor-pointer  hover:text-slate-300'
                onClick={() => setOpen(false)}
              ><a href='#about'>Acerca de mi</a></li>
              <li 
                className='py-3 mb-2 cursor-pointer hover:text-slate-300'
                onClick={() => setOpen(false)}><a href='#service'>Servicios</a></li>
              <li 
                className='py-3 mb-2 cursor-pointer hover:text-slate-300'
                onClick={() => setOpen(false)}><a href='#works'>Trabajos</a></li>
              <li 
                className='py-3 mb-2 cursor-pointer hover:text-slate-300'
                onClick={() => setOpen(false)}><a href='#formation'>Formación</a></li>
              <li 
                className='py-3 mb-2 cursor-pointer hover:text-slate-300'
                onClick={() => setOpen(false)}><a href='#contact'>Contacto</a></li>
            </ul>            
          </div>
      
      <div
        id='menu-backdrop'
        className={`
          absolute bg-black/50 dark:bg-slate-200/50 backdrop-blur-lg rounded
          translate-x-[var(--left)] translate-y-[var(--top)]
          left-0 top-0
          w-[var(--width)] h-7
          transition-all duration-500
          ease-in-out 
        `}
      >
      </div>
    </header>    
  )

}

export default Header
