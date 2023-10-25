import React from 'react'
import About from '../About'
import Service from '../Service'
import Works from '../Works'
import Formation from '../Formation'
import Contact from '../Contact'


const PpalContent = () => {
  return (
    <div className='bg-slate-200 dark:bg-slate-800' >
      <About />
      <Service />
      <Works />
      <Formation />
      <Contact />
    </div>
  )
}

export default PpalContent
