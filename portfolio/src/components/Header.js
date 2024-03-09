import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open,setOpen] = useState(false)

    const menuClick = () => { 
        setOpen(!open)
     }

    return (
        <header className='flex justify-between bg-violet-600 text-white px-10 py-4 w-full'>
            <h1 className=' text-2xl font-medium'>Santhosh S</h1>
            <nav className={`${open ? "block" : "hidden"}`}>
                <ul className="flex space-x-10 items-center text-xl">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>              
            {/* {open && <nav className="block md:hidden fixed top-16 right-0 w-full">
                <ul className='flex flex-col text-base bg-violet-500 px-10 py-2 pb-4 gap-1 divide-y'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>}               */}
            <button className='md:hidden' onClick={menuClick}><Bars3Icon className=' h-7 items-center'/></button>
        </header>
    )
}

export default Header