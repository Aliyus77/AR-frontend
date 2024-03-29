import React from 'react'
import { motion } from 'framer-motion'
import aboutImage from '../../assets/about.png'
import serviceImage from '../../assets/service.png'
import proyectsImage from '../../assets/proyects.png'
import formationImage from '../../assets/formation.png'
import contactImage from '../../assets/contact.png'
import './styles.css'

const Bento = () => {
  return (
    <div className='main-container z-0 hidden lg:grid'>
      <h1 className='font-style text-4xl text-center pt-8 text-red-900 dark:text-orange-300 '>AliyusDev Portfolio</h1>  
      <div id='bento' className='container w-3/5 hidden lg:grid h-3/4'>
        <motion.article 
          style={{ backgroundImage: `url(${aboutImage})` }}
          initial={{ y: -100, x: -200}}
          animate={{ y: 0, x: 0}}
          transition={{ duration: 1 }}
          className='about text-white font-bold content-center bg-sky-200 dark:bg-sky-950 '
        >
          <a className='outlined-text text-shadow' href='#about'>Acerca de mi</a>
        </motion.article>
        <motion.article 
          style={{ backgroundImage: `url(${serviceImage})` }}
          initial={{ y: -100, x: 200}}
          animate={{ y: 0, x: 0 } }
          transition={{ duration: 1 }}        
          className='service font-bold text-black bg-sky-200 dark:bg-sky-950'
        >
          <a className='text-shadow' href='#service'>Servicios</a>
        </motion.article>
        <motion.article 
          style={{ backgroundImage: `url(${proyectsImage})` }}
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}        
          className='projects font-bold text-white bg-sky-200 dark:bg-sky-950'
        >
          <a className='outlined-text text-shadow' href='#works'>Proyectos</a>
        </motion.article>
        <motion.article 
          style={{ backgroundImage: `url(${formationImage})` }}
          initial={{ x: 300}}
          animate={{ x: 0 , scale: [1.5, 1]}}
          transition={{ duration: 1 }}              
          className='formation font-bold text-white bg-sky-200 dark:bg-sky-950'
        >
          <a className='outlined-text text-shadow' href='#formation'>Formación</a>
        </motion.article>
        <motion.article 
          style={{ backgroundImage: `url(${contactImage})` }}
          animate={{
            scale: [ 0, 1.3, 1.5, 1]
          }}    
          transition={{ duration: 1.2 }}   
          className='contact font-bold text-white bg-sky-200 dark:bg-sky-950'
        >
          <a className='outlined-text text-shadow' href='#contact'>Contacto</a>
        </motion.article>
      </div>
    </div>
  )
}

export default Bento
