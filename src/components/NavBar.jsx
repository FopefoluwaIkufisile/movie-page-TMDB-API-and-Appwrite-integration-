import React from 'react'
import { FaBook } from "react-icons/fa";


const NavBar = () => {
  return (
    <div className=' py-7  flex justify-between items-center'>
        <p className='text-3xl  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent'>Trending Movies</p>
        <FaBook className='text-4xl text-pink-300'/>
    </div>
  )
}

export default NavBar