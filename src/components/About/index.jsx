import React from 'react'
import './styles.css'
import { FaSquareXTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6'

const About = () => {
  return (
    <section id='about' className='pt-20'>
      <div className='box-shadow border border-black rounded-md bg-slate-400 dark:bg-slate-900 w-11/12 sm:w-3/5 pt-10 pb-12 m-auto'>
        <div className='sm:text-end text-justify sm:flex pt-8 sm:w-11/12'>
          <div className=' pb-2 sm:w-3/5 ml-6 sm:ml-40 mr-5 dark:text-slate-300'>
            <h2 className='text-2xl font-semibold text-center sm:text-end pb-4 dark:text-slate-300' >Acerca de mi</h2>
            <h3 className='text-lg text-center sm:text-end font-semibold pb-2' >Bienvenido a mi portfolio personal</h3>
            <h2 className='font-medium text-sm text-center sm:text-end pb-4 text-red-900 dark:text-orange-300'>+1 ReactJS Frontend - VTEX dev & analyst</h2>
            <article className='text-center sm:text-end sm:ml-14' >
              <p>Me llamo Angel, nací y vivo en en Campana.</p>
              <p>Soy apasionado por la programación y estar siempre actualizado para ofrecer la mejor experiencia al usuario</p>
              <p>Me gustan los animales (tengo 5 perros y 3 gatos) y compartir bellos momentos con mi familia.</p>
              <p>En mis ratos libres me gusta hacer música o jugar videojuegos, si se puede algún partidito de tenis o fútbol, para sanar el cuerpo elijo el crossfit y la bici!</p>
            </article>
          </div>
          <div className='sm:w-3/12 w-11/12 m-auto pt-16'>
            <img
              className='w-full right-3 rounded-full m-auto z-50'
              src='https://unavatar.io/ALIYUS_LGI' 
              alt='Foto Personal' />
          </div>
        </div>        
          <ul className='social-container'>
            <li>
              <a target='_blank' href='https://www.linkedin.com/in/angel-h-rodriguez-dev/'>
                <span></span><span></span><span></span><span></span>
                <span>
                  <FaLinkedin className='linkedin-icon'/>
                </span>
              </a>
            </li>
            <li>
              <a target='_blank' href='https://www.facebook.com/aliyuslgi'>
                <span></span><span></span><span></span><span></span>
                <span>
                  <FaFacebook className='facebook-icon' />
                </span>                
              </a>
            </li>
            <li>
              <a target='_blank' href='https://www.instagram.com/aliyus.dev/'>
                <span></span><span></span><span></span><span></span>
                <span>
                  <FaInstagram className='instagram-icon' />
                </span>                
              </a>
            </li>
            <li>
              <a target='_blank' href='https://twitter.com/ALIYUS_LGI'>
                <span></span><span></span><span></span><span></span>
                <span>
                  <FaSquareXTwitter className='twitter-icon' />
                </span>                
              </a>
            </li>
          </ul>        
      </div>
    </section>
  )
}

export default About
