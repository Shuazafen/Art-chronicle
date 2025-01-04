import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-7'>
      <h1 className='font-bold text-2xl cursor-pointer'>Art Chronicles</h1>
      <ul className="flex gap-5 cursor-pointer">
        <li>About</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
