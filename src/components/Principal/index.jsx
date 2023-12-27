import React from 'react' 
import Bento from '../Bento'
import About from '../About'
import Service from '../Service'
import Works from '../Works'
import Formation from '../Formation'
import Contact from '../Contact'
import Top from '../Top'


const PpalContent = () => {
  return (
    <div className='bg-slate-300 dark:bg-slate-800' >
      <Top />
      <Bento />
      <About />
      <Service />
      <Works />
      <Formation />
      <Contact />
    </div>
  )
}

export default PpalContent
