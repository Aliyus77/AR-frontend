import React from 'react'
import { FaSquareXTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='bg-slate-400 dark:bg-slate-600 flex h-10 items-center'>
      <aside className='flex gap-2 absolute pl-3'>
        <a target='_blank' href='https://www.linkedin.com/in/angel-honorio-rodriguez-b74076b5/'><FaLinkedin className='dark:text-slate-400'/></a>
        <a target='_blank' href='https://www.facebook.com/aliyuslgi'><FaFacebook className='dark:text-slate-400' /></a>
        <a target='_blank' href='https://www.instagram.com/aliyus.lgi/'><FaInstagram className='dark:text-slate-400' /></a>
        <a target='_blank' href='https://twitter.com/ALIYUS_LGI'><FaSquareXTwitter className='dark:text-slate-400' /></a>
      </aside>
      <h2 className='font-semibold text-sm text-center m-auto'>
        &#169; 2023 Aliyus
      </h2>
    </div>
  )
}
export default Footer
