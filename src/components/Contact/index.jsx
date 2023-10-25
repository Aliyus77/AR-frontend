import React from 'react'

const Contact = () => {
  return (
    <form id='contact' action='https://formsubmit.co/93ca0ec9c269e308b9cbae3e0d000d34' method='POST' className='h-2/3 flex justify-center items-center pb-6 pt-20'>
    <fieldset className='m-auto w-3/4 border border-gray-400 rounded-md pl-16 pr-16 pb-4 dark:text-slate-400'>
      <legend className='text-xl mb-4 text-center'>¡Contáctame!</legend>
      <label className='text-lg flex flex-col mb-4'>
      Nombre:
        <input 
          type='text' 
          id='name' 
          name='name'
          required 
          className='border dark:bg-slate-700 dark:text-slate-100 border-gray-300 dark:border-gray-800 p-2 rounded-md focus:outline-none focus:border-gray-400 dark:focus:border-black' />
      </label>
      <label className='text-lg flex flex-col mb-4'>
      Email:
        <input 
          type='email' 
          id='email' 
          name='email'
          required  
          placeholder='correo@correo.com' 
          className='border dark:bg-slate-700 dark:text-slate-100 border-gray-300 dark:border-gray-800 p-2 rounded-md focus:outline-none focus:border-gray-400 dark:focus:border-black' />
      </label>
      <label className='text-lg flex flex-col mb-4'>
      Mensaje:
        <textarea 
          id='message' 
          name='mensaje'
          required  
          className='border dark:bg-slate-700 dark:text-slate-100 border-gray-300 dark:border-gray-800 p-2 rounded-md focus:outline-none focus:border-gray-400 dark:focus:border-black resize-none'></textarea>
      </label>
        <div className='submit-button text-center'>
          <button 
            className='bg-slate-400 dark:bg-slate-600 hover:bg-slate-600 dark:text-white font-semibold dark:hover:bg-slate-700 text-white py-2 px-4 rounded'>Enviar</button>
        </div>
        <input type='hidden' name='_next' value='http://localhost:5173/' />
        <input type='hidden' name='_captcha' value='false' />
      </fieldset>
    </form>
  )
}

export default Contact
