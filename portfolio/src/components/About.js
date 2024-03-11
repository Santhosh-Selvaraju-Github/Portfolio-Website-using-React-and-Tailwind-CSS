import React from 'react'
import AboutImg from "../assets/about.png"

const About = () => {
    return (
        <section className=' bg-violet-800 w-full h-screen md:w-full md:h-screen' id='about'>
            <div className=' mx-auto w-5/6 md:w-11/12 md:mx-auto pb-8 md:flex'>
                <div className='w-full py-6 md:w-7/12 md:pt-10 justify-start'>
                    <img src={AboutImg} alt="About Img" />
                </div>
                <div className='text-white pt-2 md:w-6/12 md:py-32'>
                    <h1 className='text-2xl underline md:text-5xl underline-offset-4 decoration-violet-500 md:underline-offset-8 '>About</h1>
                    <p className=' pt-4 text-medium md:text-xl indent-8 text-justify md:pt-8 md:leading-normal md:mr-14'>
                        2 years of experience with excellent problem-solving expertise in tech supprt and software developer. Prefers to work with the team to accomplish same goals and learn together during the process.
                    </p>
                </div>
            </div>        
        </section>
    )
}

export default About