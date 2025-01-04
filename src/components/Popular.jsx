import React from 'react'
import img from '../assets/pop.jpeg'
import img1 from '../assets/pop2.gif'
import img2 from '../assets/pop3.jpeg'
import img3 from '../assets/pop4.jpeg'

const Popular = () => {
  return (
    <div className='p-8 h-[1200px] w-full'>
      <h1 className="font-black text-[24px] text-center">Popular Art</h1>
      <div className="flex gap-4 justify-self-center text-center items-center">
        <div className="gap-[24px]">
          <img src={img} alt="" className="w-[640px] h-[330px]" />
            <h1 className="text-white">Flesh and blood</h1>
          <img src={img1} alt="" className="w-[640px] h-[330px]" />
        </div>
        <img src={img2} alt="" className='w-[640px] h-[684px]'/>
      </div>
       <img src={img3} alt="" className="w-full h-[346px] object-cover mt-4" />
    </div>
  )
}

export default Popular
