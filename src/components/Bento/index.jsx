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
    <div id='bento' className='container w-3/5 hidden lg:grid'>
      <motion.article 
        initial={{ y: -200, x: -200}}
        animate={{ y: 0, x: 0 }}
        transition={{ duration: 0.8 }}
        className='about text-white font-bold content-center bg-sky-200 dark:bg-sky-950 '
        style={{ backgroundImage: `url(${aboutImage})` }}
      >
        <a className='outlined-text text-shadow' href='#about'>Acerca de mi</a>
      </motion.article>
      <motion.article 
        initial={{ y: -200, x: 200}}
        animate={{ y: 0, x: 0 }}
        transition={{ duration: 0.8 }}        
        className='service font-bold text-black bg-sky-200 dark:bg-sky-950'
        style={{ backgroundImage: `url(${serviceImage})` }}
      >
        <a className='text-shadow' href='#service'>Servicios</a>
      </motion.article>
      <motion.article 
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}        
        className='projects font-bold text-white bg-sky-200 dark:bg-sky-950'
        style={{ backgroundImage: `url(${proyectsImage})` }}
      >
        <a className='outlined-text text-shadow' href='#works'>Proyectos</a>
      </motion.article>
      <motion.article 
        initial={{ x: 300}}
        animate={{ x: 0 , scale: [1.5, 1]}}
        transition={{ duration: 0.8 }}              
        className='formation font-bold text-white bg-sky-200 dark:bg-sky-950'
        style={{ backgroundImage: `url(${formationImage})` }}
      >
        <a className='outlined-text text-shadow' href='#formation'>Formación</a>
      </motion.article>
      <motion.article 
        animate={{
          scale: [0, 1.3, 1]
        }}    
        transition={{ duration: 1.5 }}   
        className='contact font-bold text-white bg-sky-200 dark:bg-sky-950'
        style={{ backgroundImage: `url(${contactImage})` }}
      >
        <a className='outlined-text text-shadow' href='#contact'>Contacto</a>
      </motion.article>
    </div>
  )
}

export default Bento
