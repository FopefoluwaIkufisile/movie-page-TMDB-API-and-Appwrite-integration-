import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchBox = ({searchTerm, setSearchTerm}) => {
  return (
    <form className='relative'>
        <FaSearch className='text-xl text-white absolute top-6 left-4'/>
        <input type="text" className='sticky top-0  border-2 text-white rounded-md border-blue-500 w-full px-13 py-5 outline-none' placeholder='Search for a movie here' value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
    </form>
  )
}

export default SearchBox