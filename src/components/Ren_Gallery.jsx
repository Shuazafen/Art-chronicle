import React from 'react'
import img from '../assets/about.jpeg'
import img1 from '../assets/ren1.jpeg'
import img2 from '../assets/rens.jpeg'
import img3 from '../assets/pop3.jpeg'
import img4 from '../assets/ren2.jpeg'
import img5 from '../assets/ren.jpeg'
import img6 from '../assets/ren4.jpeg'
import img7 from '../assets/ren5.jpeg'

const Ren_Gallery = () => {
  return (
    <div className='px-5 py-10  gap-[42px] justify-self-center items-center'>
      <div className="flex gap-5 items-center justify-self-center">
        <div className="gap-6">
            <div className="">
                <img src={img} alt="" className="w-[700px] h-[361px]" />
                <h1 className="font-bold text-[20px]">THE SCHOOL OF ATHENS</h1>
                <p>By raphael</p>
            </div>
            <div className="">
                <img src={img1} alt="" className="w-[700px] h-[361px]" />
                <h1 className="font-bold text-[20px]">The Last Supper</h1>
                <p>By Leonardo Davinci</p>
            </div>
        </div>
        <div className="">
            <img src={img2} alt="" className="w-[700px] h-[760px] object-cover" />
            <h1 className="font-bold text-[20px]">THE MONALISA</h1>
            <p>By Leonardo Davinci</p>
        </div>
      </div>
      <div className="flex gap-5 items-center justify-self-center">
        <div className="">
            <img src={img3} alt="" className="w-[750px] h-[792px] object-cover" />
            <h1 className="font-bold text-[20px]">Piet`a</h1>
            <p>By Michealangelo</p>
        </div>
        <div className="">
            <img src={img4} alt="" className="w-[750px] h-[792px] object-cover" />
            <h1 className="font-bold text-[20px]">David</h1>
            <p>By Michaelangelo</p>
        </div>
      </div>
      <img src={img5} alt="" className="w-full h-[450px] object-cover" />
      <h1 className="font-bold text-[20px]">THE CREATION OF ADAM</h1>
      <p>By Michaelangelo</p>

      <div className="flex gap-5 items-center justify-self-center">
        <div className="gap-6">
            <div className="">
                <img src={img6} alt="" className="w-[700px] h-[361px]" />
                <h1 className="font-bold text-[20px]">RAPHEL ROOM</h1>
                <p>By Raphael</p>
            </div>
            <div className="">
                <img src={img3} alt="" className="w-[700px] h-[361px]" />
                <h1 className="font-bold text-[20px]">Moses </h1>
                <p>By Michealangelo</p>
            </div>
        </div>
        <div className="">
            <img src={img7} alt="" className="w-[700px] h-[760px] object-cover" />
            <h1 className="font-bold text-[20px]">LADY WITH AN ERMINE</h1>
            <p>By Leonardo Davinci</p>
        </div>
      </div>
    </div>
  )
}

export default Ren_Gallery
