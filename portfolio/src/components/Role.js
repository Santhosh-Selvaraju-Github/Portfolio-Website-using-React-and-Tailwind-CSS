import React from 'react'
import HeroImg from "../assets/hero.png"

const Role = () => {
    const config = {
        title:"I'm a Full Stack Developer"
    }

    return (
        <section className=' bg-violet-600 text-white py-4 md:w-full md:h-screen'>
            <div className='w-full h-screen md:flex md:w-11/12 md:justify-between mx-auto px-10 pt-6'>
                <div className=' w-5/6 md:w-6/12 md:pt-28 md:pl-14 text-3xl md:text-6xl font-roleFont md:leading-tight  md:justify-center leading-loose'>
                    <h1>Hi,</h1>
                    <h1>I'm Santhosh S</h1>
                    <h2 className='text-xl md:text-3xl'>{config.title}</h2>
                </div>
                <div className=' w-full mx-auto md:w-6/12 pt-2 md:mt-0 md:p-0 mt-12'>
                    <img src={HeroImg} alt="Role Img" />
                </div>
            </div>            
        </section>
    )
}

export default Role