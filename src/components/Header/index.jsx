import { useEffect, useState } from 'react';
import React from 'react'
import { FaMoon, FaBars } from "react-icons/fa6";
import { HiOutlineSun } from "react-icons/hi2";


const Header = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark')      
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])

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

  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  const [open, setOpen] = useState(false)

  return (
    <div>      
      <nav className='flex justify-between bg-slate-400 dark:bg-slate-600 bg-opacity-75 dark:bg-opacity-80 backdrop:blur-md dark:backdrop:blur-lg p-4 fixed w-full top-0 z-50'>
        <div className='text-xl ml-4 flex gap-8 ' >
          <FaMoon className='cursor-pointer' id='moon' onClick={handleChangeTheme} />
          <HiOutlineSun className='cursor-pointer' id='sun' onClick={handleChangeTheme} />
          <FaBars 
            className='cursor-pointer text-xl z-60 sm:hidden' 
            onClick={() => setOpen(!open)}  
          />          
        </div>
        <div className='hidden sm:block' >
          <ul className='flex flex-row gap-2 sm:gap-6 font-bold'>
            <li className='cursor-pointer'><a href='#about'>Acerca de mi</a></li>
            <li className='cursor-pointer'><a href='#service'>Servicios</a></li>
            <li className='cursor-pointer'><a href='#works'>Trabajos</a></li>
            <li className='cursor-pointer'><a href='#formation'>Formación</a></li>
            <li className='cursor-pointer'><a href='#contact'>Contacto</a></li>
          </ul>
        </div>

        {/* SIDEBAR */}
          <div className={`${!open && 'hidden'} bg-slate-600/50 min-h-screen w-full fixed top-14 left-0 right-0 backdrop-blur-sm`}>
          </div>
          <div className={`${open ? 'w-2/3' : 'w-0' } bg-slate-600 min-h-screen fixed top-14 left-0 sm:hidden transition-all duration-300`}>        
            <ul className={`${!open && 'hidden'} flex flex-col gap-2 sm:hidden font-semibold text-2xl text-center text-white py-8`}>
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
      </nav>
    </div>
  )
}

export default Header
