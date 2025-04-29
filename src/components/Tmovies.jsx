import React from 'react'

const Tmovies = ({name, number}) => {
  return (
    <div className='text-white  p-3 relative w-fit h-fit'>
           <div className="absolute inset-0 -z-10 h-full w-full items-center [background:radial-gradient(100%_100%_at_50%_10%,#111_20%,#6366f1_100%)]"></div>
        <div className="box flex gap-5">
            <p className="number">{number + 1}.</p>
            <p className="name">{name}</p>
        </div>
    </div>
  )
}

export default Tmovies