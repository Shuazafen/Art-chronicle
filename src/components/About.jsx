import React from 'react'
import img from '../assets/about.jpeg'

const About = () => {
  return (
    <div className='w-full h-[591px] text-center items-center justify-center justify-self-center'>
      <img src={img} alt="" className="w-full h-[591px] object-cover relative" />
      <div className="gap-[63px]  w-[620px] h-[355px] justify-self-center items-center text-center absolute xl:mt-[-420px] xl:ml-[460px] filter:brightness:50%">
        <h1 className="font-black text-white text-[24px]">ABOUT</h1>
        <h1 className="text-[68px] font-semibold text-white"><span className='text-[#2d2d2d]'>Art  </span> Chronicles</h1>
        <p className="text-[20px] font-normal max-w-[520px]">Welcome to Art Chronicle, a digital space dedicated to showcasing the best art from the Modern and Renaissance era</p>
        <button className="p-3 bg-[#2d2d2d] rounded text-white mt-2">Discover Art</button>

      </div>
    </div>
  )
}

export default About
