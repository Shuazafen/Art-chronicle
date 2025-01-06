import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { SiNike } from "react-icons/si";
import { SiSamsung } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { SiAdidas } from "react-icons/si";


const About = () => {

  return (
    <div className='py-16 gap-11 px-10 h-[60vh]'>
      <h2 className="font-semibold text-[20px] leading-[30px]">Branding | image making</h2>
      <h1 className="font-semibold text-[68px] leading-[69px] py-7">Art Chronicles</h1>
      <p className="font-normal text-[17px] leading-[27px] max-w-[620px]">Welcome to Art chronicles a digital space dedicated to showcasing the finest art pieces from across various categories</p>
      <button className='w-[211px] h-[58px]  bg-[#2d2d2d] rounded text-white mt-5'>Contact</button>

      <div className="flex justify-between py-6">
       <FaGoogle className='text-5xl'/>
       <SiNike className='text-7xl'/>
       <SiSamsung className='text-7xl'/>
       <FaApple className='text-5xl'/>
       <SiAdidas className='text-5xl'/>

      </div>
    </div>
  )
}

export default About
