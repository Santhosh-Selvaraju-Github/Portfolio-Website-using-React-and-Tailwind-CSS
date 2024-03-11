import React from 'react'
import Project1 from "../assets/ecommerce-websites.jpg"
import Project2 from "../assets/food-ecommerce.jpg"
import Project3 from "../assets/website-blog.jpg"

const Projects = () => {
    const config ={
        projects:[
            {
                img: Project1,
                description:"It is a Ecommerce Website build using MERN stack.",
                link:""
            },{
                img: Project2,
                description:"It is a Ecommerce Website build using MERN stack.",
                link:""
            },{
                img: Project3,
                description:"It is a Ecommerce Website build using MERN stack.",
                link:""
            },{
                img: Project1,
                description:"It is a Ecommerce Website build using MERN stack.",
                link:""
            },{
                img: Project2,
                description:"It is a Ecommerce Website build using MERN stack.",
                link:""
            },{
                img: Project3,
                description:"It is a Ecommerce Website build using MERN stack.",
                link:""
            },{
                img: Project1,
                description:"It is a Ecommerce Website build using MERN stack.",
                link:""
            },{
                img: Project2,
                description:"It is a Ecommerce Website build using MERN stack.",
                link:""
            },{
                img: Project3,
                description:"It is a Ecommerce Website build using MERN stack.",
                link:""
            },]
        }

    return (
        <section className=' bg-violet-600 w-full h-fit md:w-full md:h-fit' id='projects'>
            <div className=' mx-auto w-5/6 md:w-10/12 md:mx-auto pb-8 text-white md:pt-12 md:pb-12 '>
                <div className=' w-full pt-8 md:w-11/12'>
                    <h1 className='text-2xl underline md:text-5xl underline-offset-4 decoration-violet-800 md:underline-offset-8 '>Projects</h1>
                </div>
                <div className='grid md:grid-cols-3 gap-8 md:gap-10 w-full py-6 md:w-full md:pt-12'>
                {/* .map(()=>()) */}
                {config.projects.map(projectList=>(                    
                    <div className=' relative'>
                        <img className='w-full h-60 object-cover' src={projectList.img} alt="Project Img" />
                        <div className='absolute top-0 left-0 right-0 md:right-0 bottom-0 bg-black p-8 pt-24 text-center opacity-0 duration-500 hover:opacity-90 md:text-xl md:py-12'>
                            <p className='md:py-4'>
                                {projectList.description}
                            </p>
                            <a href={projectList.link}><button className=' bg-violet-600 border-2 rounded-lg px-3 py-1 hover:scale-110 duration-300 text-lg'>Download</button></a>
                        </div>                        
                    </div>                
                ))}                

                    {/* <div className=' relative'>
                        <img className='w-full h-60 object-cover' src={Project2} alt="Project Img" />
                        <p className=' absolute top-0 left-0 right-0 md:right-0 bottom-0 bg-black p-8 pt-24 text-center opacity-0 duration-500 hover:opacity-90 md:text-xl '>
                            It is a Ecommerce Website build using MERN stack.
                        </p>
                    </div>
                    <div className=' relative'>
                        <img className='w-full h-60 object-cover' src={Project3} alt="Project Img" />
                        <p className=' absolute top-0 left-0 right-0 md:right-0 bottom-0 bg-black p-8 pt-24 text-center opacity-0 duration-500 hover:opacity-90 md:text-xl '>
                            It is a Ecommerce Website build using MERN stack.
                        </p>
                    </div>
                    <div className=' relative'>
                        <img className='w-full h-60 object-cover' src={Project2} alt="Project Img" />
                        <p className=' absolute top-0 left-0 right-0 md:right-0 bottom-0 bg-black p-8 pt-24 text-center opacity-0 duration-500 hover:opacity-90 md:text-xl '>
                            It is a Ecommerce Website build using MERN stack.
                        </p>
                    </div>
                    <div className=' relative'>
                        <img className='w-full h-60 object-cover' src={Project3} alt="Project Img" />
                        <p className=' absolute top-0 left-0 right-0 md:right-0 bottom-0 bg-black p-8 pt-24 text-center opacity-0 duration-500 hover:opacity-90 md:text-xl '>
                            It is a Ecommerce Website build using MERN stack.
                        </p>
                    </div> */}
                </div>
            </div>        
        </section>
    )
}

export default Projects