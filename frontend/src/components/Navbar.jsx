import React from 'react'
import { Link } from "react-router-dom"
import { ShoppingCart } from 'lucide-react';
import { User } from "lucide-react"
import { Menu } from 'lucide-react'
import { useState } from "react"

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
 
return (
    <header className='bg-slate-700 shadow-md text-white sticky w-full flex justify-between'> 
        <div className='container mx-auto flex flex-wrap item-center text-white font-Epilogue py-4 -px-2'>
            <Link to='/' className='text-3xl px-3'>Lanks Library</Link>
            <div>
                <ul className=' hidden md:text-[18px] md:gap-6 md:flex md:items-center py-2 px-6'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/'>About Us</Link>
                    </li>
                    <li>
                        <Link to='/'>FAQs</Link>
                    </li>
                    <li>
                        <Link to='/'>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className='hidden md:py-6 md:px-4 md:flex md:gap-5'>
            <ShoppingCart size='30' />
            <User size='30'/>
        </div>
        <div className='md:hidden p-6' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu size='30'/>
            {isMenuOpen && (
                <div className="md:hidden bg-slate-700 text-white p-4 flex flex-col items-center text-center w-full absolute left-0">
                    <ul className="flex flex-col gap-4">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About Us</Link></li>
                        <li><Link to="/">FAQs</Link></li>
                    </ul>
                    <div className="flex flex-col gap-5 mt-4">
                        <ShoppingCart size='30' />
                        <User size='30' />
                    </div>
                </div>
                )}
        </div> 
    </header>
  )
}

export default Navbar