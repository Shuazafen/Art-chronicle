import React from 'react'
import img from '../assets/mod.jpeg'
import img1 from '../assets/mod2.jpeg'
import img2 from '../assets/pop.jpeg'
import img3 from '../assets/mod3.jpeg'
import img4 from '../assets/pop2.gif'
import img5 from '../assets/mod4.jpeg'
import img6 from '../assets/mod5.jpeg'
import img7 from '../assets/mod6.jpeg'
import img8 from '../assets/mod7.jpeg'


const Mod_Gallery = () => {
  return (
    <div className='px-4 py-7  gap-[42px] justify-self-center items-center '>


      <div className="flex gap-[24px] leading-[30px] py-4">
        <div className="">

        <img src={img} alt="" className="w-[435px] h-[520px] object-cover" />
         <h1 className="font-bold text-[20px]">IDENTITY</h1>
         <p className="">Digital Art by Josh Hermanos</p>
        </div>
         
        <div className="">
        <img src={img1} alt="" className="w-[1000px] h-[520px] object-cover" />
         <h1 className="font-bold text-[20px]">NEW NEWS</h1>
         <p className="">Digital illustration by Sam Youn</p>
        </div>


      </div>

      <div className="flex gap-[24px] leading-[30px] py-4">
        <div className="">
            <img src={img2} alt="" className="w-[720px]" />
            <h1 className="font-bold text-[20px]">ABSTRACT OF BLUE AND ORANGE</h1>
            <p className="">Anonymous Mysterious Art</p>
        </div>

        <div className="">
            <img src={img3} alt="" className="w-[720px]" />
            <h1 className="font-bold text-[20px]">HEIGHTS</h1>
            <p className="">Photographed Art by Lewis</p>
        </div>
      </div>

      <div className="flex gap-[24px] leading-[30px] py-4">

           <div className="">
            <img src={img4} alt="" className="w-[1000px] h-[460px] object-cover" />
            <h1 className="font-bold text-[20px]">THE STARRY NIGHT</h1>
            <p className="">By Vincent Van Gogh</p>
           </div>

           <div className="">
            <img src={img5} alt="" className="w-[450px] h-[460px] object-cover" />
            <h1 className="font-bold text-[20px]">THE COMEDIAN</h1>
            <p className="">By Maurizo Cattelan</p>
           </div>
      </div>

      <div className="flex gap-[24px]">
        <div className="">
            <img src={img6} alt="" className="" />
            <h1 className="font-bold text-[20px]">THE SHOT</h1>
            <p>Photograph art by Fredrick Morales</p>
        </div>
        <div className="">
            <img src={img7} alt="" className="w-[482px]" />
            <h1 className="font-bold text-[20px]">BEAUTY OF GREY</h1>
            <p className="">Photograph art by Sarah Christian</p>
        </div>
        <div className="">
            <img src={img8} alt="" className="w-[482px]" />
            <h1 className="font-bold text-[20px]">GIRL BEFORE MIRROR</h1>
            <p className="">By Pablo Picasso</p>
        </div>
      </div>

    </div>
  )
}

export default Mod_Gallery
