import React, { useState } from 'react'
import "../App.css"
import { Bars3Icon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open,setOpen] = useState(true)

    // const menuClick = () => { 
    //     setOpen(!open)
    //  }

    return (
        <header className=' bg-violet-800 text-white px-10 py-4 w-full items-center sticky top-0 z-10'>
            <div className='md:flex md:justify-between md:w-11/12 md:mx-auto md:py-2'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className=' text-xl font-medium'><a href="#">Santhosh Portfolio</a></h1>    
                    </div>
                    <div className=' items-center md:hidden'>
                        <button className="md:hidden" onClick={() => setOpen(!open)}><Bars3Icon className=' h-7 items-center'/></button>
                    </div>
                </div>            
                <div>
                    <nav className={` md:block ${open ? "hidden" : "block"}`}>                
                        <ul onClick={() => setOpen(!open)} className=" flex flex-col md:flex-row md:space-x-8 text-lg gap-4 pt-10 md:pt-0">
                            <a href="#"><li className='headerList relative w-14 md:w-full'>Home</li></a>
                            <a href="#about"><li className='headerList relative w-16 md:w-full'>About</li></a>
                            <a href="#projects"><li className='headerList relative w-20 md:w-full'>Projects</li></a>
                            <a href="#resume"><li className='headerList relative w-20 md:w-full'>Resume</li></a>
                            <a href="#contact"><li className='headerList relative w-20 md:w-full'>Contact</li></a>
                        </ul>
                    </nav>
                </div>
            </div>
            
            
                          
            {/* {open && <nav className="block md:hidden fixed top-16 right-0 w-full">
                <ul className='flex flex-col text-base bg-violet-500 px-10 py-2 pb-4 gap-1 divide-y'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>}*/}
            
                        
        </header>
    )
}

export default Header