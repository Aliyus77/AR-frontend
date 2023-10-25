import { useEffect, useState } from 'react';
import React from 'react'
import { FaRegSun, FaMoon } from "react-icons/fa6";

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
  return (
    <div>      
      <nav className='flex justify-between bg-slate-400 dark:bg-slate-600 bg-opacity-75 dark:bg-opacity-80 backdrop:blur-md dark:backdrop:blur-lg p-4 fixed w-full top-0 z-50'>
        <div className='cursor-pointer' >
          <FaMoon id='moon' onClick={handleChangeTheme} />
          <FaRegSun id='sun' onClick={handleChangeTheme} />
        </div>
        <div className='' >
          <ul className='flex flex-row gap-6 cursor-pointer font-bold'>
            <li><a href='#about'>Acerca de mi</a></li>
            <li><a href='#service'>Servicios</a></li>
            <li><a href='#works'>Trabajos</a></li>
            <li><a href='#formation'>Formación</a></li>
            <li><a href='#contact'>Contacto</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
