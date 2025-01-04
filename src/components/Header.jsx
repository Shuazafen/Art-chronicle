import React from 'react'
import img from '../assets/header.jpeg'
import '../index.css'
const Header = () => {
  
  return (
    <div className='px-7 text-center h-[436px] w-full justify-center'>
      <img src={img} alt="" className="rounded h-[436px] w-full object-cover" />
      <div className="max-w-[620px] justify-center items-center text-center absolute gap-[48px] m-[0 auto] top-44 left-16 bottom-12 right-6">
        <h1 className="text-[68px] font-semibold text-white"><span className='text-[#2d2d2d]'>Art  </span> Chronicles</h1>
        <p className="text-white text-[20px] font-normal max-w-[520px]">Welcome to art chronicles, a digital space dedicated to showcasing the finest art pieces from the Renaissance and Modern era</p>
        <button className='p-3  bg-[#2d2d2d] rounded text-white mt-2'>Let's Explore</button>
      </div>
    </div>
  )
}

export default Header
