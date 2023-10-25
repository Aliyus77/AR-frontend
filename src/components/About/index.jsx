import React from 'react'

const About = () => {
  return (
    <section id='about' className='pt-20'>
          <h2 className='text-xl font-semibold text-center pb-4 dark:text-slate-300' >Acerca de mi</h2>
        <div className='sm:flex justify-center'>
          <div className='sm:text-end text-center grid mx-auto w-3/4 pb-2 sm:w-2/3 mr-5 dark:text-slate-300'>
            <h3 className='text-lg mb-1 font-semibold' >Bienvenido a mi pagina personal</h3>
            <p>Me llamo Angel, nací y vivo en en Campana. Me gustan los animales (tengo 5 perros y 3 gatos, sí!) y compartir bellos momentos con mi familia.</p>
            <p>En mis ratos libres me gusta hacer música o jugar videojuegos, si se puede algún partidito de tenis o fútbol, para sanar el cuerpo elijo el crossfit y la bici!</p>
            <p>Podés enterarte más de mi siguiendome en mis redes al pie de la página!</p>
          </div>
          <div>
            <img
              className='w-44 mx-auto'
              src="https://unavatar.io/ALIYUS_LGI" 
              alt="Foto Personal" />
          </div>
        </div>
      </section>
  )
}

export default About
