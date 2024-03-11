import React from 'react'

const Contact = () => {
    const config = {
        email:"santhoshsmsp@gmail.com",
        phNo:"+91 8695058712",
        whatsapp:"+91 8695058712",
        gitHub:"https://github.com/Santhosh-Selvaraju-Github",
        linkedin:"www.linkedin.com/in/santhosh-selvaraju-a275b69a/"
    }

    return (
        <section className=' bg-violet-600 w-full h-screen md:w-full md:h-screen' id='contact'>
            <div className=' mx-auto w-5/6 md:w-10/12 md:mx-auto pb-8 text-white pt-20 md:pt-24 text-center '>
                <div className=' w-full pt-8 md:w-11/12'>
                    <h1 className='text-2xl underline md:text-5xl underline-offset-4 decoration-violet-800 md:underline-offset-8 '>Contacts</h1>
                </div>
                <div className=' w-full pt-4 md:pt-8 md:w-11/12 leading-loose md:text-xl'>
                    <h1>If you want to discuss more in detail, please contact me</h1>
                    <h1 className='md:pt-6 pt-4'><span className='font-bold'>Email : </span><span>{config.email}</span></h1>
                    <h1 className='md:pt-4'><span className='font-bold'>Phone Number : </span><span>{config.phNo}</span></h1>
                    <h1 className='md:pt-4'><span className='font-bold'>What's App Number : </span><span>{config.whatsapp}</span></h1>
                    <h1 className='md:pt-4'><span className='font-bold'>Linkedin : </span><span>{config.linkedin}</span></h1>
                    <h1 className='md:pt-4'><span className='font-bold'>GitHub : </span><span>{config.gitHub}</span></h1>
                </div>
            </div>
        </section>
    )
}

export default Contact