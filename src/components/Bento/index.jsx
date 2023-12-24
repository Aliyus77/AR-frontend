import React from 'react'
import './styles.css'
import { motion } from 'framer-motion'

const Bento = () => {
  return (    
    <div id='bento' className='container'>
      <motion.article 
        initial={{ y: -200, x: -200}}
        animate={{ y: 0, x: 0 }}
        transition={{ duration: 0.8 }}
        className='about content-center bg-sky-200 dark:bg-sky-950'>
        <a href='#about'>Acerca de mi</a>
      </motion.article>
      <motion.article 
        initial={{ y: -200, x: 200}}
        animate={{ y: 0, x: 0 }}
        transition={{ duration: 0.8 }}        
        className='service bg-green-200 dark:bg-green-950'>
        <a href='#service'>Servicios</a>
      </motion.article>
      <motion.article 
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}        
        className='projects bg-orange-200 dark:bg-orange-950'>
        <a href='#works'>Trabajos</a>
      </motion.article>
      <motion.article 
        initial={{ x: 300}}
        animate={{ x: 0 , scale: [1.5, 1]}}
        transition={{ duration: 0.8 }}              
        className='formation bg-blue-200 dark:bg-blue-950'>
        <a href='#formation'>Formación</a>
      </motion.article>
      <motion.article 
        animate={{
          scale: [0, 1.3, 1]
        }}       
        className='contact bg-purple-200 dark:bg-purple-800'>
        <a href='#contact'>Contacto</a>
      </motion.article>
    </div>
  )
}

export default Bento
