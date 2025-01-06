import React from 'react'
import img from '../assets/header.jpeg'
import '../index.css'
const Header = () => {
  
  return (
    <div className='py-3 h-[450px]'>
      <img src={img} alt="" className="w-full h-[450px] object-cover " />
      <div className="mt-[-300px] w-full text-center">
      <h1 className="text-[68px] font-bold text-white"><span className="text-[#2d2d2d]">Art</span> Chronicle</h1>
      <p className="text-white ">This gallery displays great Art pieces that have given rise to serveral new categories of visual art that are pleasing and seemingly unusual.</p>
      <button className='p-3  bg-[#2d2d2d] rounded text-white mt-2'>Let's Explore</button>

      </div>
      
    </div>
  )
}

export default Header
