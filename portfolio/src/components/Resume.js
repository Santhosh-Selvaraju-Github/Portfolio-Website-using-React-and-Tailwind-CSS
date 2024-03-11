import React from 'react'
import ResumeImg from '../assets/resume.jpg'

const Resume = () => {
    const config={
        link:"https://heyzine.com/flip-book/6714053308.html"
    }

    return (
        <section className=' bg-violet-800 w-full h-fit md:w-full md:h-fit' id='resume'>
            <div className=' mx-auto w-5/6 md:w-10/12 md:mx-auto pb-8 md:flex md:pt-8 md:pb-14' >
                <div className='w-full pt-12 md:w-6/12 justify-start'>
                    <img src={ResumeImg} alt="Resume Img" />
                </div>
                <div className='text-white pt-6 md:w-6/12 md:py-52 md:pl-16 text-center'>
                    <h1 className='text-2xl underline md:text-5xl underline-offset-4 decoration-violet-500 md:underline-offset-8 '>Resume</h1>
                    <div className='md:flex-col'>
                        <p className=' pt-4 text-medium md:text-xl text-center md:pt-8 md:leading-normal'>
                            You can view my resume
                        </p>                      
                        <a href={config.link}><button className=' ml-8 mt-3 bg-violet-600 border-2 rounded-lg px-5 py-2 hover:scale-110 duration-300 md:text-xl'>Download</button></a>
                    </div>
                                       
                </div>
            </div>        
        </section>
    )
}

export default Resume