import React from 'react'
import './styles.css'

const About = () => {
  return (
    <section id='about' className='pt-20'>
      <div className='box-shadow border border-black rounded-md bg-slate-400 dark:bg-slate-900 w-11/12 sm:w-3/5 pt-10 pb-16 m-auto'>
        <div className='sm:text-end text-justify sm:flex pt-8 sm:w-11/12'>
          <div className=' pb-2 sm:w-3/5 ml-6 sm:ml-40 mr-5 dark:text-slate-300'>
            <h2 className='text-2xl font-semibold text-center sm:text-end pb-4 dark:text-slate-300' >Acerca de mi</h2>
            <h3 className='text-lg text-center sm:text-end mb-1 font-semibold pb-3' >Bienvenido a mi portfolio personal</h3>
            <p>Me llamo Angel, nací y vivo en en Campana. Me gustan los animales (tengo 5 perros y 3 gatos) y compartir bellos momentos con mi familia.</p>
            <p>Soy apasionado por la programación y estar siempre actualizado para ofrecer la mejor experiencia al usuario</p>
            <p>En mis ratos libres me gusta hacer música o jugar videojuegos, si se puede algún partidito de tenis o fútbol, para sanar el cuerpo elijo el crossfit y la bici!</p>
            <p>Podés enterarte más de mi siguiendome en mis redes al pie de la página!</p>
          </div>
          <div className='sm:w-3/12 w-11/12 m-auto mt-4'>
            <img
              className='w-full right-3 rounded-full m-auto'
              src="https://unavatar.io/ALIYUS_LGI" 
              alt="Foto Personal" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
