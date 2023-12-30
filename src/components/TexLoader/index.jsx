import React from 'react'
import './styles.css'

const TextLoader = () => {
  return (
    <div className='wrapper'>
      <div>
        <h1 className='static-text'>Hi, I'm</h1>
        <ul className='dynamic-text'>
          <li><span> Designer</span></li>
          <li><span> Developer</span></li>
          <li><span> Passionate</span></li>
          <li><span> AliyusDev...</span></li>
        </ul>
      </div>
    </div>
  )
}

export default TextLoader
