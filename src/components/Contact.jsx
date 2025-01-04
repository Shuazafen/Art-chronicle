import React from 'react'
import img from '../assets/contact.jpeg'
import face from '../assets/facebook-box-fill.png'
import behance from '../assets/behance-line.png'
import instagram from '../assets/instagram-line.png'
import discore from '../assets/discord-fill.png'
import dribble from '../assets/dribbble-line.png'

const Contact = () => {
  return (
    <div className='w-full h-[504px]'>
      <img src={img} alt="" className="w-full h-[504px] object-cover" />
      <div className="flex p-10 mt-[-450px] items-center  justify-self-center gap-[200px]">
        <div className="gap-24px ">
            <h1 className="font-black text-[32px] text-white">Contact us</h1>
            <p className="text-[20px] text-white font-medium max-w-[571px]">
            Hope You enjoyed our Chronicles of Amazing Art, You could reach out to us through the Our socials below
            </p>
            <ul className="flex gap-4">
                <li className=""><img src={face} alt="" className="" /></li>
                <li className=""><img src={discore} alt="" className="" /></li>
                <li className=""><img src={dribble} alt="" className="" /></li>
                <li className=""><img src={behance} alt="" className="" /></li>
                <li className=""><img src={instagram} alt="" className="" /></li>
            </ul>
        </div>

        <div className="gap-10">
        <h1 className="font-black text-[32px] text-white">Write us</h1>
            <form className="flex flex-col gap-6">
                <input type="text" placeholder="Your Name" className="w-full px-5 py-3 rounded-md focus:outline-none" />
                <input type="email" placeholder="Your Email" className="w-full px-5 py-3 rounded-md focus:outline-none" />
                <textarea placeholder="Your Message" className="w-full px-5 py-3 rounded-md focus:outline-none" />
                <button className="w-full p-3  bg-[#2d2d2d] rounded text-white">Send Message</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
