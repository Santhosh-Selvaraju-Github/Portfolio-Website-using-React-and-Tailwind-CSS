import React, { useState } from 'react'

const Footer = () => {
    const date = new Date()
    const year = `${date.getFullYear()}`;
  return (
    <section className=' bg-violet-800 w-full h-fit md:w-full md:h-fit text-white text-center pt-4' id='about'>
        <div className='md:text-lg'>&copy; Santhosh-Portfolio {year}</div>
    </section>
  )
}

export default Footer