import React from 'react'
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className='bg-slate-700 shadow-md text-white fixed w-full flex justify-start p-7'>
        <Link to='/' className='text-3xl px-3'>Lanks Library</Link>
    </footer>
  )
}

export default Footer